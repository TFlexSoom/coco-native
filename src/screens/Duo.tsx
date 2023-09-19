/**
 * Screen for Duo 2 factor auth
 */

import React from 'react';
import { useEffect } from 'react';
import {
    SafeAreaView,
    Image,
} from 'react-native';

function duoAuthenticate() {
    console.log("DUO AUTH HERE!");
}

export default function Duo(): JSX.Element {

    useEffect(duoAuthenticate);
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