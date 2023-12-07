/**
 * Link for opening phone browser outside of application
 */

import React from 'react';

export interface LinkProps {
    to: string
    children: JSX.Element
}

export default function Link({ to, children }: LinkProps): JSX.Element {
    // TODO Add touchable opacity to open browser for phone
    // Android -- Intents
    // Iphone -- ????

    return (
        <>
            {children}
        </>
    )
}