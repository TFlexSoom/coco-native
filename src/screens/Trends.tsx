/**
 * Trends for aggregate data surrounding reported foods.
 */

import React from 'react';
import {
    SafeAreaView,
    ScrollView,
    StatusBar,
    Text,
    View,
} from 'react-native';
import { AppScreenProps } from '../navigator/NavigatorTypes';
import TopBar from '../components/TopBar';
import SincePicker from '../components/SincePicker';

export default function Trends({ navigation }: AppScreenProps): JSX.Element {
    const totalCalories = 100;
    const totalFat = 20;
    const totalCarbs = 30;
    const totalProtein = 50;

    return (
        <SafeAreaView>
            <StatusBar />
            <TopBar onButtonPress={() => navigation?.openDrawer()} />
            <SincePicker onPickedOption={(since: Date) => { }} />
            <ScrollView
                contentInsetAdjustmentBehavior="automatic">
                <Text>PIE CHART HERE</Text>
                <Text>Total: {totalCalories}</Text>
                <Text>Fat: {totalFat} </Text>
                <Text>Carbs: {totalCarbs} </Text>
                <Text>Protein: {totalProtein} </Text>
                <View>
                    <Text>Daily</Text>
                    <Text>Total: {totalCalories}</Text>
                    <Text>Fat: {totalFat} </Text>
                    <Text>Carbs: {totalCarbs} </Text>
                    <Text>Protein: {totalProtein} </Text>
                </View>
                <View>
                    <Text>Habits</Text>
                    <Text>Drink Water</Text>
                </View>
                <View>
                    <Text>Daily</Text>
                    <Text>Eat More Protein</Text>
                </View>
            </ScrollView>
        </SafeAreaView>
    )
}