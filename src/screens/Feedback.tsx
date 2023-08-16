/**
 * Feedback Form for users when they want to illicit feedback to the developers.
 */

import React from 'react';
import {
    SafeAreaView,
    ScrollView,
    StatusBar,
} from 'react-native';

export default function Feedback(): JSX.Element {
    return (
        <SafeAreaView>
            <StatusBar />
            <ScrollView
                contentInsetAdjustmentBehavior="automatic">
            </ScrollView>
        </SafeAreaView>
    )
}