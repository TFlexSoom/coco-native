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
    OnButtonPress: ((event: GestureResponderEvent) => void)
}

export default function TopBar({ OnButtonPress }: TopBarProps): JSX.Element {
    return (
        <View>
            <TouchableHighlight
                onPress={OnButtonPress}
            >
                <Image
                    source={{
                        // TODO Replace with static image to be packaged with app
                        uri: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADMAAAAzCAYAAAA6oTAqAAAAEXRFWHRTb2Z0d2FyZQBwbmdjcnVzaEB1SfMAAABQSURBVGje7dSxCQBACARB+2/ab8BEeQNhFi6WSYzYLYudDQYGBgYGBgYGBgYGBgYGBgZmcvDqYGBgmhivGQYGBgYGBgYGBgYGBgYGBgbmQw+P/eMrC5UTVAAAAABJRU5ErkJggg=='
                    }}
                />
            </TouchableHighlight>
            <Text>
                {Config.appTitle}
            </Text>
        </View>
    )
}