/**
 * Hook for accessing and managing Auth
 */

import React from 'react';
import { FetchArgs, FetchSignature, NetworkContext } from './Network';
import * as ApiEndpoint from '../constants/ApiEndpoint';
import { fromEndpointAndParams } from '../helpers/URL';

export interface User {

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
    signUp: (args: Credentials) => Promise<void>,
    signIn: (args: Credentials) => Promise<void>,
    signOut: () => Promise<void>,
    fetch: FetchSignature,
}

export const AuthenticationContext = React.createContext({
    user: null,
    token: "",
    signUp: async (args: Credentials) => { },
    signIn: async (args: Credentials) => { },
    signOut: async () => { },
    fetch: async (args: FetchArgs) => new Response(),
} as AuthenticationContext);

async function signUp(
    instance: AuthenticationState,
    network: NetworkContext,
    update: AuthUpdate,
    creds: Credentials,
) {
    if (instance.token !== "") {
        throw Error("cannot signup when signed in");
    }

    const url = fromEndpointAndParams(ApiEndpoint.register, recordFromCreds(creds));

    const result = await netFetch(instance, network, update, {
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
        if (!result.ok) {
            console.error("bad signup response");
            return;
        }

        const payload = await result.json();
        instance.token = payload?.jwt || "";
        instance.user = payload?.record || {};
        update(instance);
    } catch (err) {
        console.error(err);
    }
}

async function signIn(
    instance: AuthenticationState,
    network: NetworkContext,
    update: AuthUpdate,
    creds: Credentials
) {
    if (instance.token !== "") {
        throw Error("cannot signin when signed in. Log out first!");
    }

    const url = fromEndpointAndParams(ApiEndpoint.login, recordFromCreds(creds));

    const result = await netFetch(instance, network, update, {
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
        if (!result?.ok) {
            console.error("bad signin response");
            return;
        }

        const payload = await result.json();
        instance.token = payload?.jwt || "";
        instance.user = payload?.record || {};
        update(instance);
    } catch (err) {
        console.error(err);
    }
}

async function signOut(
    instance: AuthenticationState,
    network: NetworkContext,
    update: AuthUpdate
) {
    if (instance.token === "") {
        throw Error("already signed out");
    }

    instance.token = "";
    instance.user = null;
    update(instance);
}

async function netFetch(
    instance: AuthenticationState,
    network: NetworkContext,
    update: AuthUpdate,
    args: FetchArgs
) {
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