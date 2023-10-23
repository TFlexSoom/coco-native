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

function getEnumValues(enumRef: any): Array<any> {
    return Object.keys(enumRef).filter((item) => {
        return isNaN(Number(item))
    });
}

function IconButton(props: any): JSX.Element {
    return (
        <Button {...props} />
    )
}

export default function ThirdPartyLogins(props: any): JSX.Element {
    return (
        <>
            {(getEnumValues(ThirdParty) as Array<keyof typeof ThirdParty>).map(
                (thirdParty, index) => <IconButton
                    key={index}
                    party={thirdParty}
                    title="Third Party Login"
                    {...props}
                />
            )}
        </>
    )
}
