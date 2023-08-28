/*
 * Author: Tristan Hilbert
 * Date: 8/28/2023
 * Filename: ThirdPartyLogins.tsx
 * Desc: Login Buttons for Third Party Applications
 */

import React from 'react';

import {
    Button
} from 'react-native';

enum ThirdParty {
    Google = 1,
    Meta = 2,
    Microsoft = 3,
    Apple = 4,
}

function IconButton(props: any): JSX.Element {
    return (
        <Button {...props} />
    )
}

export default function ThirdPartyLogins(props: any): JSX.Element {
    const elems = [] as Array<JSX.Element>;

    for (let party in ThirdParty) {
        elems.push(
            <IconButton
                party={party}
                title="Third Party Login"
                {...props}
            />
        )
    }

    return (
        <>
            {elems}
        </>
    )
}
