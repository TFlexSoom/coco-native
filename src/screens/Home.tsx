/**
 * Homescreen for Coco-Nutrition. Not seen too often but shown on first login
 * with version information for the technical folks.
 */

import React from 'react';
import {
    SafeAreaView,
    ScrollView,
    StatusBar,
    Text,
} from 'react-native';
import TopBar from '../components/TopBar';
import Config from '../components/Config';
import { AppScreenProps } from '../navigator/NavigatorTypes';

export default function Home({ navigation }: AppScreenProps): JSX.Element {
    return (
        <SafeAreaView>
            <StatusBar />
            <TopBar onButtonPress={() => navigation?.openDrawer()} />
            <ScrollView
                contentInsetAdjustmentBehavior="automatic">
                <Text className="text-xl text-{blue}"> Welcome to Version {Config.versionNumber} </Text>
                <Text> Find Nutritional Agency in your diet </Text>
            </ScrollView>
        </SafeAreaView>
    )
}