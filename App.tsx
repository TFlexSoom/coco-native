/**
 * Root App Component
 *
 * @format
 */

import React from 'react';

import MaterialIcon from 'react-native-vector-icons/MaterialIcons';

import Chat from './src/screens/Chat';
import ComingSoon from './src/screens/ComingSoon';
import Discover from './src/screens/Discover';
import Duo from './src/screens/Duo';
import Feedback from './src/screens/Feedback';
import Home from './src/screens/Home';
import Login from './src/screens/Login';
import SignUp from './src/screens/Signup';
import Profile from './src/screens/Profile';
import Settings from './src/screens/Settings';
import Timeline from './src/screens/Timeline';
import Trends from './src/screens/Trends';
import NavigatorTerms from './src/constants/NavigatorTerms';
import Navigation, { DrawerContent, Screen, TabContent } from './src/contexts/Navigation';
import NetworkProvider from './src/contexts/Network';
import AuthenticationProvider from './src/contexts/Authentication';


const screens: Record<string, Screen> = {
    [NavigatorTerms.LOGIN]: { component: Login, hideDrawer: true, hideTabs: true },
    [NavigatorTerms.SIGN_UP]: { component: SignUp, hideDrawer: true, hideTabs: true },
    [NavigatorTerms.DUO]: { component: Duo, hideDrawer: true, hideTabs: true },
    [NavigatorTerms.COMING_SOON]: { component: ComingSoon },
    [NavigatorTerms.HOME]: { component: Home, },
    [NavigatorTerms.PROFILE]: { component: Profile },
    [NavigatorTerms.SETTINGS]: { component: Settings },
    [NavigatorTerms.FEEDBACK]: { component: Feedback },
    [NavigatorTerms.CHAT]: { component: Chat },
    [NavigatorTerms.TRENDS]: { component: Trends },
    [NavigatorTerms.TIMELINE]: { component: Timeline },
    [NavigatorTerms.DISCOVER]: { component: Discover },
}

const drawerContent: Record<string, DrawerContent> = {
    [NavigatorTerms.HOME]: { icon: <MaterialIcon name="home" size={15} color="black" /> },
    [NavigatorTerms.PROFILE]: { icon: <MaterialIcon name="manage-accounts" size={15} color="black" /> },
    [NavigatorTerms.SETTINGS]: { icon: <MaterialIcon name="settings" size={15} color="black" /> },
    [NavigatorTerms.FEEDBACK]: { icon: <MaterialIcon name="feedback" size={15} color="black" /> },
}


const tabContent: Record<string, TabContent> = {
    [NavigatorTerms.CHAT]: { icon: <MaterialIcon name="chat" size={22} color="white" /> },
    [NavigatorTerms.TRENDS]: { icon: <MaterialIcon name="leaderboard" size={22} color="white" /> },
    [NavigatorTerms.TIMELINE]: { icon: <MaterialIcon name="timeline" size={22} color="white" /> },
    [NavigatorTerms.DISCOVER]: { icon: <MaterialIcon name="search" size={22} color="white" /> },
}

export default function App(): JSX.Element {

    return (
        <NetworkProvider>
            <AuthenticationProvider>
                <Navigation
                    initialScreen={NavigatorTerms.LOGIN}
                    drawerContent={drawerContent}
                    tabContent={tabContent}
                    screens={screens}
                />
            </AuthenticationProvider>
        </NetworkProvider>

    );
}