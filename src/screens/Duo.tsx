/**
 * Screen for Duo 2 factor auth
 */

import React from 'react';
import { useEffect } from 'react';
import {
    SafeAreaView,
    Image,
} from 'react-native';
import { AppScreenProps } from '../constants/NavigatorTypes';
import { DrawerNavigationProp } from '@react-navigation/drawer';
import { ParamListBase } from '@react-navigation/native';

function duoAuthenticate(navigation: DrawerNavigationProp<ParamListBase>) {
    console.log("DUO AUTH HERE!");
    navigation.navigate("Home")
}

export default function Duo({ navigation }: AppScreenProps): JSX.Element {

    useEffect(duoAuthenticate.bind(null, navigation));
    return (
        <SafeAreaView>
            <Image source={{
                uri: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADMAAAAzCAYAAAA6oTAqAAAAEXRFWHRTb2Z0d2" +
                    "FyZQBwbmdjcnVzaEB1SfMAAABQSURBVGje7dSxCQBACARB+2/ab8BEeQNhFi6WSYzYLYudDQYGBgYGBgYGBgYGBgY" +
                    "GBgZmcvDqYGBgmhivGQYGBgYGBgYGBgYGBgYGBgbmQw+P/eMrC5UTVAAAAABJRU5ErkJggg==",
            }} />
        </SafeAreaView>
    )
}