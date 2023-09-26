/**
 * Root App Component
 *
 * @format
 */

import React from 'react';
import { NavigationContainer } from '@react-navigation/native';

import Chat from './src/screens/Chat';
import ComingSoon from './src/screens/ComingSoon';
import Discover from './src/screens/Discover';
import Duo from './src/screens/Duo';
import Feedback from './src/screens/Feedback';
import Home from './src/screens/Home';
import Login from './src/screens/Login';
import Profile from './src/screens/Profile';
import Settings from './src/screens/Settings';
import Timeline from './src/screens/Timeline';
import Trends from './src/screens/Trends';
import createCocoNavigator from './src/navigator/CocoNavigator';
import NavigatorTerms from './src/navigator/NavigatorTerms';
import { AppScreenProps } from './src/navigator/NavigatorTypes';

const Coco = createCocoNavigator();

interface AppScreen {
    name: string,
    component: (props: AppScreenProps) => JSX.Element,
    isDrawer?: boolean,
    isBottomTab?: boolean,
    isBackNav?: boolean,
}

const screens: Array<AppScreen> = [
    {
        name: NavigatorTerms.LOGIN,
        component: Login,
    },
    {
        name: NavigatorTerms.DUO,
        component: Duo,
    },
    {
        name: NavigatorTerms.HOME,
        component: Home,
        isDrawer: true,
    },
    {
        name: NavigatorTerms.COMING_SOON,
        component: ComingSoon,
    },
    {
        name: NavigatorTerms.CHAT,
        component: Chat,
        isBottomTab: true,
    },
    {
        name: NavigatorTerms.TRENDS,
        component: Trends,
        isBottomTab: true,
    },
    {
        name: NavigatorTerms.TIMELINE,
        component: Timeline,
        isBottomTab: true,
    },
    {
        name: NavigatorTerms.DISCOVER,
        component: Discover,
        isBottomTab: true,
    },
    {
        name: NavigatorTerms.PROFILE,
        component: Profile,
        isDrawer: true,
        isBackNav: true,
    },
    {
        name: NavigatorTerms.SETTINGS,
        component: Settings,
        isDrawer: true,
        isBackNav: true,
    },
    {
        name: NavigatorTerms.FEEDBACK,
        component: Feedback,
        isDrawer: true,
        isBackNav: true,
    },
]

export default function App(): JSX.Element {
    return (
        <NavigationContainer>
            <Coco.Navigator
                initialScreen={NavigatorTerms.LOGIN}
                backBehavior="history"
            >
                {screens.map(({ name, component, ...options }, index) =>
                    <Coco.Screen
                        key={index}
                        name={name}
                        component={component}
                        options={options}
                    />
                )}
            </Coco.Navigator>
        </NavigationContainer>
    );
}