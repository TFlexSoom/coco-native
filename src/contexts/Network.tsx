/**
 * Hook for accessing and managing Auth
 */

import React from 'react';

export interface FetchArgs {
    resource: RequestInfo,
    options?: RequestInit,
}

export type FetchSignature = (args: FetchArgs) => Promise<Response>;

export interface NetworkContext {
    isProcessing: boolean,
    fetch: FetchSignature,
}

export const NetworkContext = React.createContext({
    isProcessing: false,
    fetch: async (args: FetchArgs) => new Response(),
});

async function netFetch(isProcessing: boolean, update: (val: boolean) => void, args: FetchArgs): Promise<Response> {
    if (isProcessing) {
        return new Response();
    }

    const defaultOptions = args?.options || {} as RequestInit;
    try {
        update(true);
        const result = await fetch(args.resource, defaultOptions);
        update(false);
        return result;
    } catch (e) {
        update(false);
        return new Response();
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