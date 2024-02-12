/**
 * Link for opening phone browser outside of application
 */

import React from 'react';
import { Alert, Linking } from 'react-native';
import NWTouchableHighlight from '../primitives/NWTouchableHighlight';

export interface LinkProps {
    to: string
    children: JSX.Element
    className?: string
}

// Copied from https://reactnative.dev/docs/linking
async function onPress(url: string) {
    // Checking if the link is supported for links with custom URL scheme.
    const supported = await Linking.canOpenURL(url);

    if (supported) {
        // Opening the link with some app, if the URL scheme is "http" the web link should be opened
        // by some browser in the mobile
        await Linking.openURL(url);
    } else {
        Alert.alert(`Don't know how to open this URL: ${url}`);
    }
}

export default function Link({ to, children, className }: LinkProps): JSX.Element {

    const onPressHandler = React.useCallback(onPress.bind(null, to), [to]);

    return (
        <NWTouchableHighlight
            className={className || ""}
            onPress={onPressHandler}
        >
            {children}
        </NWTouchableHighlight>
    )
}