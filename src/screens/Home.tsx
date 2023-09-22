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

export default function Home(): JSX.Element {
    return (
        <SafeAreaView>
            <StatusBar />
            <TopBar />
            <ScrollView
                contentInsetAdjustmentBehavior="automatic">
                <Text>
                    Welcome to Version {Config.versionNumber}
                    <br />
                    Find Nutritional Agency in your diet
                </Text>
            </ScrollView>
        </SafeAreaView>
    )
}