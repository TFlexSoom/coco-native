/**
 * Coming Soon Screen when buttons are added but corresponding features are not yet implemented.
 */

import React from 'react';
import {
    SafeAreaView,
    ScrollView,
    StatusBar,
} from 'react-native';

export default function ComingSoon(): JSX.Element {
    return (
        <SafeAreaView>
            <StatusBar />
            <ScrollView
                contentInsetAdjustmentBehavior="automatic">
            </ScrollView>
        </SafeAreaView>
    )
}