/**
 * Hook for accessing and managing Auth
 */

import React from 'react';
import delay from '../helpers/delay';

export interface FetchArgs {
    resource: RequestInfo,
    options?: RequestInit,
}

export interface FetchResponse {
    isOk: boolean,
    headers: Headers,
    status: number,
    data: Record<string, any>,
}

export function badResponse(): FetchResponse {
    return {
        isOk: false,
        headers: new Headers(),
        status: 400,
        data: {}
    };
}

async function fromResponse(response: Response): Promise<FetchResponse> {
    try {
        return {
            isOk: response.ok,
            headers: response.headers,
            status: response.status,
            data: await response.json()
        };

    } catch (e) {
        console.warn(e);
    }

    return badResponse();
}

export type FetchSignature = (args: FetchArgs) => Promise<FetchResponse>;

export interface NetworkContext {
    isProcessing: boolean,
    fetch: FetchSignature,
}

export const NetworkContext = React.createContext({
    isProcessing: false,
    fetch: async (args: FetchArgs) => badResponse(),
});

function needsMoreTime(resultRecord: Record<string, string>): boolean {
    return resultRecord["msg"] === "Still Processing";
}

async function fetchLoop(args: FetchArgs): Promise<FetchResponse> {
    const defaultOptions = args?.options || {} as RequestInit;

    try {
        let response = await fromResponse(await fetch(args.resource, defaultOptions));
        if (!needsMoreTime(response.data)) {
            return response;
        }

        let resource = new URL(args.resource.toString())
        resource.searchParams.append("task_id", response.data["task_id"] as string);
        const finalResource = resource.toString();

        while (needsMoreTime(response.data)) {
            await delay(response.data["sleep"] as number)
            response = await fromResponse(await fetch(finalResource, defaultOptions));
            console.log("got", response.data);
        }

        return response;

    } catch (e) {
        console.warn("caught error ", e);
        return badResponse();
    }
}

async function netFetch(isProcessing: boolean, update: (val: boolean) => void, args: FetchArgs): Promise<FetchResponse> {
    if (isProcessing) {
        console.warn("still proccesing");
        return badResponse();
    }

    try {
        update(true);
        const fetchResult = await fetchLoop(args);
        update(false);
        return fetchResult;
    } catch (e) {
        console.warn("caught error ", e);
        update(false);
        return badResponse();
    }
}

interface NetworkProviderProps {
    children: JSX.Element
}

export default function NetworkProvider(props: NetworkProviderProps) {
    const children = props.children;

    const [isProcessing, makeProcessing] = React.useState(false);

    return (
        <NetworkContext.Provider value={{
            isProcessing: isProcessing,
            fetch: netFetch.bind(null, isProcessing, makeProcessing),
        }}>
            {children}
        </NetworkContext.Provider>
    )
}