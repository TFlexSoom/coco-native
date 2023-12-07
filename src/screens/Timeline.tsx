/**
 * Timeline for past nutrients and foods chosen before.
 */

import React from 'react';
import {
    Image,
    SafeAreaView,
    ScrollView,
    StatusBar,
    Text,
    View,
} from 'react-native';

import { NavigatorContext } from '../components/Navigation';
import TopBar from '../components/TopBar';
import SincePicker from '../components/SincePicker';

interface TimelineMeal {
    calories: number,
    mealType: string,
    mealTime: Date,
    image: string,
}

const meals: Array<TimelineMeal> = [
    {
        calories: 100,
        mealType: "Lunch",
        mealTime: new Date(),
        image: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADMAAAAzCAYAAAA6oTAqAAAAEXRFWHRTb2Z0d2FyZQBwbmdjcnVzaEB1SfMAAABQSURBVGje7dSxCQBACARB+2/ab8BEeQNhFi6WSYzYLYudDQYGBgYGBgYGBgYGBgYGBgZmcvDqYGBgmhivGQYGBgYGBgYGBgYGBgYGBgbmQw+P/eMrC5UTVAAAAABJRU5ErkJggg==',
    },
    {
        calories: 100,
        mealType: "Lunch",
        mealTime: new Date(),
        image: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADMAAAAzCAYAAAA6oTAqAAAAEXRFWHRTb2Z0d2FyZQBwbmdjcnVzaEB1SfMAAABQSURBVGje7dSxCQBACARB+2/ab8BEeQNhFi6WSYzYLYudDQYGBgYGBgYGBgYGBgYGBgZmcvDqYGBgmhivGQYGBgYGBgYGBgYGBgYGBgbmQw+P/eMrC5UTVAAAAABJRU5ErkJggg==',
    },
    {
        calories: 100,
        mealType: "Lunch",
        mealTime: new Date(),
        image: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADMAAAAzCAYAAAA6oTAqAAAAEXRFWHRTb2Z0d2FyZQBwbmdjcnVzaEB1SfMAAABQSURBVGje7dSxCQBACARB+2/ab8BEeQNhFi6WSYzYLYudDQYGBgYGBgYGBgYGBgYGBgZmcvDqYGBgmhivGQYGBgYGBgYGBgYGBgYGBgbmQw+P/eMrC5UTVAAAAABJRU5ErkJggg==',
    },
    {
        calories: 100,
        mealType: "Lunch",
        mealTime: new Date(),
        image: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADMAAAAzCAYAAAA6oTAqAAAAEXRFWHRTb2Z0d2FyZQBwbmdjcnVzaEB1SfMAAABQSURBVGje7dSxCQBACARB+2/ab8BEeQNhFi6WSYzYLYudDQYGBgYGBgYGBgYGBgYGBgZmcvDqYGBgmhivGQYGBgYGBgYGBgYGBgYGBgbmQw+P/eMrC5UTVAAAAABJRU5ErkJggg==',
    },
]

export default function Timeline(): JSX.Element {
    const navigator = React.useContext(NavigatorContext);

    return (
        <SafeAreaView>
            <StatusBar />
            <TopBar onButtonPress={() => navigator.openDrawer()} />
            <SincePicker onPickedOption={(since: Date) => { }} />
            <ScrollView
                contentInsetAdjustmentBehavior="automatic">
                {meals.map(({ image, mealTime, mealType, calories }, index) =>
                    <View key={index}>
                        <Image source={{ uri: image }} />
                        <Text>{calories}</Text>
                        <Text>Calories</Text>
                        <Text>{mealType}</Text>
                        <Text>{mealTime.getTime()}</Text>
                    </View>
                )}
            </ScrollView>
        </SafeAreaView>
    )
}