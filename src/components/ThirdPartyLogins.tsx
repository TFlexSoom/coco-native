/*
 * Author: Tristan Hilbert
 * Date: 8/28/2023
 * Filename: ThirdPartyLogins.tsx
 * Desc: Login Buttons for Third Party Applications
 */

import React from 'react';
import { getEnumValues } from '../helpers/Enum';
import NWView from '../primitives/NWView';
import NWTouchableHighlight from '../primitives/NWTouchableHighlight';
import NWText from '../primitives/NWText';
import { NavigatorContext } from './Navigation';
import NavigatorTerms from '../constants/NavigatorTerms';

enum ThirdParty {
    Google = 1,
    Meta = 2,
    Microsoft = 3,
    Apple = 4,
}

interface IconButtonProps {
    party: number
}

function IconButton(props: IconButtonProps): JSX.Element {
    const navigator = React.useContext(NavigatorContext);

    const { party } = props;

    return (
        <NWTouchableHighlight className=' bg-[#A62A72FF] rounded-lg py-1 px-2 ' onPress={() => { navigator.navigate(NavigatorTerms.DUO) }}>
            <NWText className=' text-xs ' >{party}</NWText>
        </NWTouchableHighlight>
    )
}

export default function ThirdPartyLogins(props: any): JSX.Element {
    return (
        <NWView className=' flex-0 flex-row items-center justify-between w-[100%] '>
            {(getEnumValues(ThirdParty) as Array<ThirdParty>).map(
                (thirdParty, index) => <IconButton
                    key={index}
                    party={thirdParty}
                />
            )}
        </NWView>
    )
}
