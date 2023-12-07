/**
 * Bar for profile picture drawer and App Name
 */

import React from 'react';
import {
    GestureResponderEvent
} from 'react-native';

import MaterialIcon from 'react-native-vector-icons/MaterialIcons';
import Config from './Config'
import NWView from '../primitives/NWView';
import NWText from '../primitives/NWText';
import NWTouchableHighlight from '../primitives/NWTouchableHighlight';

export interface TopBarProps {
    onButtonPress: ((event: GestureResponderEvent) => void)
}

export default function TopBar({ onButtonPress }: TopBarProps): JSX.Element {
    return (
        <NWView className=" flex flex-row bg-[#000000FF] items-center ">
            <NWTouchableHighlight
                className={
                    " flex flex-col ml-4 mr-7 my-2 items-center justify-center " +
                    " border-[5px] border-[#FFFFFF] bg-[#FFFFFF] rounded-[100px] "
                }
                onPress={onButtonPress}
            >
                <MaterialIcon name="person" size={20} color="black" />
            </NWTouchableHighlight>
            <NWText className="text-2xl ">
                {Config.appTitle}
            </NWText>
        </NWView >

    )
}