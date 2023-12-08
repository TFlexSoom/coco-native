/*
 * Author: Tristan Hilbert
 * Date: 8/28/2023
 * Filename: ThirdPartyLogins.tsx
 * Desc: Login Buttons for Third Party Applications
 */

import React from 'react';
import { getEnumValues } from '../helpers/Enum';
import NWButton from '../primitives/NWButton';

enum ThirdParty {
    Google = 1,
    Meta = 2,
    Microsoft = 3,
    Apple = 4,
}

function IconButton(props: any): JSX.Element {
    return (
        <NWButton {...props} />
    )
}

export default function ThirdPartyLogins(props: any): JSX.Element {
    return (
        <>
            {(getEnumValues(ThirdParty) as Array<ThirdParty>).map(
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
