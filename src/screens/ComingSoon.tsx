/**
 * Coming Soon Screen when buttons are added but corresponding features are not yet implemented.
 */

import React from 'react';
import {
    Button,
    SafeAreaView,
    ScrollView,
    StatusBar,
    Text,
} from 'react-native';
import { NavigatorContext } from '../contexts/Navigation';
import TopBar from '../components/TopBar';

export default function ComingSoon(): JSX.Element {
    const navigator = React.useContext(NavigatorContext);

    return (
        <SafeAreaView>
            <StatusBar />
            <TopBar onButtonPress={() => navigator.openDrawer()} />
            <ScrollView
                contentInsetAdjustmentBehavior="automatic">
                <Text> Coming Soon </Text>
                <Button
                    title="Get Alerts"
                    onPress={() => { }}
                />
            </ScrollView>
        </SafeAreaView>
    )
}