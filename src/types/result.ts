export interface Result<T> {
    data?: T
    error: string
}

export function result<T>(val: T): Result<T> {
    return {
        data: val,
        error: "",
    }
}

export function error<T>(val: string): Result<T> {
    return {
        error: val,
    };
}

export function isError<T>(result: Result<T>): boolean {
    return result.error !== "";
}

export function getData<T>(result: Result<T>): T {
    if (isError(result)) {
        throw new Error("tried to get data on erroneous result");
    }

    return result.data as T;
}

export function getError<T>(result: Result<T>): string {
    if (!isError(result)) {
        throw new Error("tried to get error on valid result");
    }

    return result.error;
}
