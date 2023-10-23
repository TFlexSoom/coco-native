/**
 * Bar for profile picture drawer and App Name
 */

import React from 'react';
import {
    GestureResponderEvent,
    Image,
    Text,
    TouchableHighlight,
    View,
} from 'react-native';

import Config from './Config'

export interface TopBarProps {
    onButtonPress: ((event: GestureResponderEvent) => void)
}

export default function TopBar({ onButtonPress }: TopBarProps): JSX.Element {
    return (
        <View className="bg-[#000000] flex-row">
            <TouchableHighlight
                className="ml-4 mr-7"
                onPress={onButtonPress}
            >
                {/* <Image
                    source={{
                        // TODO Replace with static image to be packaged with app
                        uri: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADMAAAAzCAYAAAA6oTAqAAAAEXRFWHRTb2Z0d2FyZQBwbmdjcnVzaEB1SfMAAABQSURBVGje7dSxCQBACARB+2/ab8BEeQNhFi6WSYzYLYudDQYGBgYGBgYGBgYGBgYGBgZmcvDqYGBgmhivGQYGBgYGBgYGBgYGBgYGBgbmQw+P/eMrC5UTVAAAAABJRU5ErkJggg=='
                    }}
                /> */}
                <Text className="text-xl">ICON</Text>
            </TouchableHighlight>
            <Text className="text-xl">
                {Config.appTitle}
            </Text>
        </View >

    )
}