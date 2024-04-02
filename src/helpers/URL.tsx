/*
 * Helpers for creating API calls with network
 */

export function fromEndpointAndParams(endpoint: string, params: Record<string, string>): URL {
    let result = new URL(endpoint);
    for (let record in params) {
        result.searchParams.append(record, params[record]);
    }

    return result;
}