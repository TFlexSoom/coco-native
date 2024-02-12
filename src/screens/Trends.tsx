/**
 * Trends for aggregate data surrounding reported foods.
 */

import React from 'react';
import {
    SafeAreaView,
    ScrollView,
    StatusBar,
} from 'react-native';
import { PieChart } from 'react-native-svg-charts'
import { NavigatorContext } from '../components/Navigation';
import TopBar from '../components/TopBar';
import SincePicker, { SinceOption } from '../components/SincePicker';
import NWView from '../primitives/NWView';
import NWText from '../primitives/NWText';

interface TrendStat {
    title: string,
    value: number,
};

function getTotals(calories: number, fat: number, carbs: number, protein: number): Array<TrendStat> {
    return [
        { title: "Total", value: calories },
        { title: "Fat", value: fat },
        { title: "Carbs", value: carbs },
        { title: "Protein", value: protein },
    ];
}

const habits = [
    "Drink Water",
    "Be Happy"
]

function TrendTotals({ totals, className }: { totals: Array<TrendStat>, className?: string }): JSX.Element {
    return (
        <NWView className={className || ""}>
            {totals.map(({ title, value }) => {
                return (
                    <NWView className=" pb-2 ">
                        <NWView className=" flex-0 flex-row justify-between bg-[#A62A72BB] p-2 ">
                            <NWText className=" color-[#000000FF] "> {title} </NWText>
                            <NWText className=" text-l ">{value}</NWText>
                        </NWView>
                    </NWView>
                );
            })}
        </NWView>
    );
}

function TrendsPieChart(): JSX.Element {
    const data = [50, 10, 40, 95, -4, -24, 85, 91, 35, 53, -53, 24, 50, -20, -80]

    const randomColor = () => ('#' + ((Math.random() * 0xffffff) << 0).toString(16) + '000000').slice(0, 7)

    const pieData = data
        .filter((value) => value > 0)
        .map((value, index) => ({
            value,
            svg: {
                fill: randomColor(),
                onPress: () => console.log('press', index),
            },
            key: `pie-${index}`,
        }))

    return <PieChart style={{ height: 200 }} data={pieData} />
}

export default function Trends(): JSX.Element {
    const navigator = React.useContext(NavigatorContext);

    const [sinceOption, updateSinceOption] = React.useState(SinceOption.Today);

    const totalCalories = 100;
    const totalFat = 20;
    const totalCarbs = 30;
    const totalProtein = 50;

    const macrosTotals = getTotals(totalCalories, totalFat, totalCarbs, totalProtein);
    const dailyTotals = getTotals(totalCalories, totalFat, totalCarbs, totalProtein);

    return (
        <SafeAreaView>
            <StatusBar />
            <TopBar onButtonPress={() => navigator.openDrawer()} />
            <NWView
                className=" flex-0 flex-col h-[88%] px-1 "
            >
                <SincePicker currentSinceOption={sinceOption} updateSinceOption={updateSinceOption} />
                <NWView
                    className=" flex-0 flex-col h-[90%] pt-16 "
                >
                    <ScrollView
                        contentInsetAdjustmentBehavior="automatic">
                        <TrendsPieChart />
                        <NWView className="pb-5">
                            <NWText className=" text-xl ">Macros</NWText>
                            <TrendTotals totals={macrosTotals} />
                        </NWView>
                        <NWView className="pb-5">
                            <NWText className=" text-xl ">Daily</NWText>
                            <TrendTotals totals={dailyTotals} />
                        </NWView>
                        <NWView className="pb-5">
                            <NWText className=" text-xl ">Healthy Habits</NWText>
                            {habits.map((habit) => <NWText className=" mb-2 p-1 bg-[#A62A72BB] text-m color-[#000000FF] ">{habit}</NWText>)}
                        </NWView>
                    </ScrollView>
                </NWView>
            </NWView>
        </SafeAreaView>
    )
}