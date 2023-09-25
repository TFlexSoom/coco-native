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

    return (
        <NavigationContent>
            {/**  TODO */}
        </NavigationContent>
    );
}

const createCocoNavigator = createNavigatorFactory(CocoNavigator);

export default createCocoNavigator;

