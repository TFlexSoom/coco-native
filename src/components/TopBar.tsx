/**
 * Bar for profile picture drawer and App Name
 */

import React from 'react';
import {
    GestureResponderEvent,
    Text,
    TouchableHighlight,
    View,
} from 'react-native';

import MaterialIcon from 'react-native-vector-icons/MaterialIcons';

import Config from './Config'

export interface TopBarProps {
    onButtonPress: ((event: GestureResponderEvent) => void)
}

export default function TopBar({ onButtonPress }: TopBarProps): JSX.Element {
    return (
        <View className="bg-[#000000] flex-row items-center">
            <TouchableHighlight
                className={
                    " flex-0 ml-4 mr-7 my-2 items-center justify-center " +
                    " border-[5px] border-[#FFFFFF] bg-[#FFFFFF] rounded-[100px] "
                }
                onPress={onButtonPress}
            >
                <MaterialIcon name="person" size={20} color="black" />
            </TouchableHighlight>
            <Text className="text-2xl ">
                {Config.appTitle}
            </Text>
        </View >

    )
}