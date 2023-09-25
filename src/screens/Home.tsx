/**
 * Homescreen for Coco-Nutrition. Not seen too often but shown on first login
 * with version information for the technical folks.
 */

import React from 'react';
import { ParamListBase } from '@react-navigation/core';
import { DrawerNavigationProp } from '@react-navigation/drawer';
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
            <TopBar OnButtonPress={() => navigation?.openDrawer()} />
            <ScrollView
                contentInsetAdjustmentBehavior="automatic">
                <Text> Welcome to Version {Config.versionNumber} </Text>
                <Text> Find Nutritional Agency in your diet </Text>
            </ScrollView>
        </SafeAreaView>
    )
}