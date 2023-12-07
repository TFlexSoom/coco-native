/**
 * Root App Component
 *
 * @format
 */

import React from 'react';

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
import NavigatorTerms from './src/constants/NavigatorTerms';
import Navigation, { CocoScreen } from './src/components/Navigation';

const hiddenScreens: Record<string, CocoScreen> = {
    [NavigatorTerms.LOGIN]: { component: Login },
    [NavigatorTerms.DUO]: { component: Duo },
    [NavigatorTerms.COMING_SOON]: { component: ComingSoon },
}

const drawerScreens: Record<string, CocoScreen> = {
    [NavigatorTerms.HOME]: { component: Home },
    [NavigatorTerms.PROFILE]: { component: Profile },
    [NavigatorTerms.SETTINGS]: { component: Settings },
    [NavigatorTerms.FEEDBACK]: { component: Feedback },
}


const tabScreens: Record<string, CocoScreen> = {
    [NavigatorTerms.CHAT]: { component: Chat },
    [NavigatorTerms.TRENDS]: { component: Trends },
    [NavigatorTerms.TIMELINE]: { component: Timeline },
    [NavigatorTerms.DISCOVER]: { component: Discover },
}

export default function App(): JSX.Element {
    return (
        <Navigation
            initialScreen={NavigatorTerms.LOGIN}
            hiddenScreens={hiddenScreens}
            drawerScreens={drawerScreens}
            tabScreens={tabScreens}
        />
    );
}