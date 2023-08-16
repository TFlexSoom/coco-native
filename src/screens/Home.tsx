/**
 * Homescreen for Coco-Nutrition. Not seen too often but shown on first login
 * with version information for the technical folks.
 */

import React from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
} from 'react-native';

export default function Home(): JSX.Element {
  return (
    <SafeAreaView>
      <StatusBar />
      <ScrollView
        contentInsetAdjustmentBehavior="automatic">
      </ScrollView>
    </SafeAreaView>
  )
}