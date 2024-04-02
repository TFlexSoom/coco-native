/**
 * Settings page for changing app related options
 */

import React from 'react';
import {
    Switch,
} from 'react-native';

import NavigatorTerms from '../constants/NavigatorTerms';
import { NavigatorContext, ScreenNavigator } from '../contexts/Navigation';
import TopBar from '../components/TopBar';
import NWView from '../primitives/NWView';
import NWText from '../primitives/NWText';
import NWTouchableHighlight from '../primitives/NWTouchableHighlight';

interface ChangeProfileRequest {
    username?: string,
    password?: string,
    duo?: string,
}

function changeProfileRequest(
    navigator: ScreenNavigator,
    { username, password, duo }: ChangeProfileRequest
): void {
    navigator.navigate(NavigatorTerms.HOME);
}

function changePhoto(photo: string): void {
    /** TODO **/
}

interface Setting {
    name: string,
    currentVal: boolean,
}

const settings: Array<Setting> = [
    {
        name: "Dark Mode",
        currentVal: true,
    },
    {
        name: "Use Local NLP",
        currentVal: true,
    },
    {
        name: "Use Local Storage",
        currentVal: true,
    },
    {
        name: "Animations",
        currentVal: true,
    }
]

export default function Settings(): JSX.Element {
    const navigator = React.useContext(NavigatorContext);

    return (
        <>
            <TopBar onButtonPress={() => navigator.openDrawer()} />
            {settings.map(({ name, currentVal }, index) =>
                <NWView className=" flex-0 flex-col items-begin justify-around py-1 " key={index}>
                    <NWView className=" flex-0 flex-row justify-between w-screen ">
                        <NWText className=" color-[#000000FF] ">{name}</NWText>
                        <Switch onValueChange={() => { }} value={currentVal} />
                    </NWView>

                </NWView>
            )}
            <NWView className=" pt-2 ">
                <NWTouchableHighlight
                    className=' flex-0 items-center justify-center bg-[#C678A6] py-1 rounded-lg '
                    onPress={() => navigator.navigate(NavigatorTerms.LOGIN)}
                >
                    <NWText
                        className=' text-[#FFFFFFFF] font-medium text-lg '
                    >
                        Logout
                    </NWText>
                </NWTouchableHighlight>
            </NWView>
            <NWView className=" pt-2 ">
                <NWTouchableHighlight
                    className=' flex-0 items-center justify-center bg-[#C678A6] py-1 rounded-lg '
                    onPress={() => navigator.navigate(NavigatorTerms.LOGIN)}
                >
                    <NWText
                        className=' text-[#FFFFFFFF] font-medium text-lg '
                    >
                        Delete Account
                    </NWText>
                </NWTouchableHighlight>
            </NWView>
        </>
    );
}
