/**
 * Page for discovering diets and tips on how to better your nutrition
 */

import React from 'react';
import {
    SafeAreaView,
    ScrollView,
    StatusBar,
    Text,
    View,
} from 'react-native';
import { NavigatorContext } from '../components/Navigation';
import TopBar from '../components/TopBar';
import Link from '../components/Link';

interface Headline {
    title: string,
    link: string,
}

const headlines: Array<Headline> = [
    {
        title: "Salmonella, filth, undeclared drugs lead FDA to step up enforcement on imported food",
        link: "https://www.foodsafetynews.com/2023/09/salmonella-filth-undeclared-drugs-lead-fda-to-step-up-enforcement-on-imported-food/"
    },
    {
        title: "Salmonella, filth, undeclared drugs lead FDA to step up enforcement on imported food",
        link: "https://www.foodsafetynews.com/2023/09/salmonella-filth-undeclared-drugs-lead-fda-to-step-up-enforcement-on-imported-food/"
    },
    {
        title: "Salmonella, filth, undeclared drugs lead FDA to step up enforcement on imported food",
        link: "https://www.foodsafetynews.com/2023/09/salmonella-filth-undeclared-drugs-lead-fda-to-step-up-enforcement-on-imported-food/"
    },
]

export default function Discover(): JSX.Element {
    const navigator = React.useContext(NavigatorContext);

    return (
        <SafeAreaView>
            <StatusBar />
            <TopBar onButtonPress={() => navigator?.openDrawer()} />
            <ScrollView
                contentInsetAdjustmentBehavior="automatic">
                <View>
                    <Text>Headlines</Text>
                    {headlines.map(({ title, link }, index) =>
                        <Link key={index} to={link}>
                            <Text>{title}</Text>
                        </Link>
                    )}
                </View>

                {/* TODO Add Diets */}
            </ScrollView>
        </SafeAreaView>
    )
}