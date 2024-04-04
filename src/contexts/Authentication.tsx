/**
 * Hook for accessing and managing Auth
 */

import React from 'react';
import { FetchArgs, FetchResponse, FetchSignature, NetworkContext, badResponse } from './Network';
import * as ApiEndpoint from '../constants/ApiEndpoint';
import { fromEndpointAndParams } from '../helpers/URL';
import { Result, error, result } from '../types/result';
import { Buffer } from 'buffer';

export interface User {
    userid: string
}

export interface Credentials {
    email: string,
    password: string,
}

function recordFromCreds(creds: Credentials): Record<string, string> {
    let result: Record<string, string> = {};
    result["email"] = creds.email;
    result["password"] = creds.password;
    return result;
}

interface AuthenticationState {
    user: User | null,
    token: string,
}

type AuthUpdate = (newState: AuthenticationState) => void

export interface AuthenticationContext extends AuthenticationState {
    signUp: (args: Credentials) => Promise<Result<User>>,
    signIn: (args: Credentials) => Promise<Result<User>>,
    signOut: () => Promise<boolean>,
    fetch: FetchSignature,
}

export const AuthenticationContext = React.createContext({
    user: null,
    token: "",
    signUp: async (args: Credentials) => error("unimplemented"),
    signIn: async (args: Credentials) => error("unimplemented"),
    signOut: async () => false,
    fetch: async (args: FetchArgs) => badResponse(),
} as AuthenticationContext);

async function signUp(
    instance: AuthenticationState,
    network: NetworkContext,
    update: AuthUpdate,
    creds: Credentials,
): Promise<Result<User>> {
    if (instance.token !== "") {
        throw Error("cannot signup when signed in");
    }

    const url = fromEndpointAndParams(ApiEndpoint.register, recordFromCreds(creds));

    const netResult: FetchResponse = await netFetch(instance, network, update, {
        resource: url.toString(),
        options: {
            method: "POST",
            cache: "no-cache",
            headers: {
                "Content-Type": "application/json"
            },
            redirect: "follow",
            referrerPolicy: "no-referrer",
        },
    });

    try {
        if (!netResult.isOk) {
            console.error("bad signup response");
            return error("bad signup response");
        }

        const payload = netResult.data;
        instance.token = payload?.jwt || "";
        instance.user = payload?.record || {};
        update(instance);
    } catch (err) {
        console.error(err);
    }

    return result({} as User)
}

async function signIn(
    instance: AuthenticationState,
    network: NetworkContext,
    update: AuthUpdate,
    creds: Credentials
): Promise<Result<User>> {
    if (instance.token !== "") {
        throw Error("cannot signin when signed in. Log out first!");
    }

    const auth = Buffer.from(creds.email + ":" + creds.password).toString('base64');

    const netResult: FetchResponse = await netFetch(instance, network, update, {
        resource: ApiEndpoint.login,
        options: {
            method: "POST",
            cache: "no-cache",
            headers: {
                "Authorization": "Basic " + auth,
                "Content-Type": "application/json"
            },
            redirect: "follow",
            referrerPolicy: "no-referrer",
        },
    });

    try {
        if (!netResult.isOk) {
            console.error("bad signin response");
            return error("bad signin response");
        }

        const payload = netResult.data;
        instance.token = payload?.token || "";
        instance.user = {
            userid: payload?.userid || "",
        };
        update(instance);
    } catch (err) {
        console.error(err);
    }

    return result({
        userid: "",
    } as User)
}

async function signOut(
    instance: AuthenticationState,
    network: NetworkContext,
    update: AuthUpdate
): Promise<boolean> {
    if (instance.token === "") {
        throw Error("already signed out");
    }

    instance.token = "";
    instance.user = null;
    update(instance);
    return true;
}

async function netFetch(
    instance: AuthenticationState,
    network: NetworkContext,
    update: AuthUpdate,
    args: FetchArgs
): Promise<FetchResponse> {
    if (instance.token === "") {
        return await network.fetch(args);
    }

    const defaultedOptions = args?.options || {} as RequestInit;
    defaultedOptions.headers = defaultedOptions.headers || {} as HeadersInit;
    (defaultedOptions.headers as Record<string, string>)["Authorization"] = `Bearer ${instance.token}`
    return await network.fetch({ resource: args.resource, options: defaultedOptions });
}

export interface AuthenticationProviderProps {
    children: JSX.Element
}

export default function AuthenticationProvider(props: AuthenticationProviderProps) {
    const children = props?.children;
    const network = React.useContext(NetworkContext);
    const [instance, update] = React.useState({
        user: null,
        token: "",
    } as AuthenticationState);

    return (
        <AuthenticationContext.Provider value={{
            user: instance.user,
            token: instance.token,
            signUp: signUp.bind(null, instance, network, update),
            signIn: signIn.bind(null, instance, network, update),
            signOut: signOut.bind(null, instance, network, update),
            fetch: netFetch.bind(null, instance, network, update),
        }}>
            {children}
        </AuthenticationContext.Provider>
    )
}