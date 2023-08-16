/**
 * Chat page for describing the foods eaten each day.
 */

import React from 'react';
import {
    SafeAreaView,
    ScrollView,
    StatusBar,
} from 'react-native';

export default function Chat(): JSX.Element {
    return (
        <SafeAreaView>
            <StatusBar />
            <ScrollView
                contentInsetAdjustmentBehavior="automatic">
            </ScrollView>
        </SafeAreaView>
    )
}