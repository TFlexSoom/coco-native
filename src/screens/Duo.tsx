/**
 * Screen for Duo 2 factor auth
 */

import React from 'react';
import { useEffect } from 'react';
import {
    SafeAreaView,
    Image,
} from 'react-native';
import { NavigatorContext, ScreenNavigator } from '../components/Navigation';
import NavigatorTerms from '../constants/NavigatorTerms';

function duoAuthenticate(navigator: ScreenNavigator) {
    console.log("DUO AUTH HERE!");
    navigator.navigate(NavigatorTerms.HOME)
}

export default function Duo(): JSX.Element {
    const navigator = React.useContext(NavigatorContext)

    useEffect(duoAuthenticate.bind(null, navigator));
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