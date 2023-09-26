/**
 * CocoNavigator for Navigating using stack, tabs, and drawer
 *
 * @format
 */

import * as React from 'react';
import {
    createNavigatorFactory,
    useNavigationBuilder,
} from '@react-navigation/native';
import CocoRouter from './CocoRouter';
import { Button, Text, View } from 'react-native';
import NavigatorTerms from './NavigatorTerms';

interface CocoNavigatorParams {
    initialScreen: string,
    backBehavior: string | undefined,
    children: JSX.Element[],
}

function CocoNavigator({
    initialScreen,
    backBehavior,
    children,
    ...rest
}: CocoNavigatorParams): JSX.Element {
    const justBackBehavior = backBehavior || "none";

    const { state, descriptors, navigation, NavigationContent } =
        useNavigationBuilder(CocoRouter, {
            initialRouteName: initialScreen,
            justBackBehavior,
            children,
        });

    // state => desired place that the navigator wants to be
    // descriptors => constant information regarding each 
    // descriptors[state.routeNames[SOME_INDEX]].option

    console.log("HERE!");
    return (
        <NavigationContent>
            {descriptors[state.routeNames[state.index]].render()}
        </NavigationContent>
    );
}

const createCocoNavigator = createNavigatorFactory(CocoNavigator);

export default createCocoNavigator;

