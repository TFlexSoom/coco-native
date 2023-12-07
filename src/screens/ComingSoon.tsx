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
import TopBar from '../components/TopBar';
import { AppScreenProps } from '../constants/NavigatorTypes';

export default function ComingSoon({ navigation }: AppScreenProps): JSX.Element {
    return (
        <SafeAreaView>
            <StatusBar />
            <TopBar onButtonPress={() => navigation?.openDrawer()} />
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