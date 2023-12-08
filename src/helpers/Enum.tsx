/**
 * Helper Functions for enum values
 */

export function getEnumKeys(enumRef: any): Array<string> {
    return Object.keys(enumRef).filter((item) => {
        return isNaN(Number(item))
    });
}

export function getEnumValues(enumRef: any): Array<number> {
    return Object.keys(enumRef).filter((item) => {
        return !isNaN(Number(item))
    }).map(Number);
}