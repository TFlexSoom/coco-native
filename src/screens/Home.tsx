/**
 * Homescreen for Coco-Nutrition. Not seen too often but shown on first login
 * with version information for the technical folks.
 */

import React from 'react';
import {
    SafeAreaView,
    View,
    StatusBar,
    Text,
} from 'react-native';
import TopBar from '../components/TopBar';
import Config from '../components/Config';
import { NavigatorContext } from '../components/Navigation';

export default function Home(): JSX.Element {
    const navigator = React.useContext(NavigatorContext);

    return (
        <SafeAreaView>
            <StatusBar />
            <TopBar onButtonPress={() => navigator?.openDrawer()} />
            <View className=" items-center align-begin">
                <Text className="mt-10 text-3xl text-[#1fb6ff]"> Welcome to Version {Config.versionNumber} </Text>
                <Text className="text-xl"> Find Nutritional Agency in your diet </Text>
            </View>
        </SafeAreaView>
    )
}