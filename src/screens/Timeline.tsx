/**
 * Timeline for past nutrients and foods chosen before.
 */

import React from 'react';
import {
    SafeAreaView,
    ScrollView,
    StatusBar,
} from 'react-native';

export default function Timeline(): JSX.Element {
    return (
        <SafeAreaView>
            <StatusBar />
            <ScrollView
                contentInsetAdjustmentBehavior="automatic">
            </ScrollView>
        </SafeAreaView>
    )
}