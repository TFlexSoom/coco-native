/**
 * Settings page for changing app related options
 */

import React from 'react';
import {
    SafeAreaView,
    ScrollView,
    StatusBar,
} from 'react-native';

export default function Settings(): JSX.Element {
    return (
        <SafeAreaView>
            <StatusBar />
            <ScrollView
                contentInsetAdjustmentBehavior="automatic">
            </ScrollView>
        </SafeAreaView>
    )
}