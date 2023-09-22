/**
 * Root App Component
 *
 * @format
 */

import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Chat from './src/screens/Chat';
import ComingSoon from './src/screens/ComingSoon';
import Discover from './src/screens/Discover';
import Duo from './src/screens/Duo';
import Feedback from './src/screens/Feedback';
import Home from './src/screens/Home';
import Login from './src/screens/Login';
import Profile from './src/screens/Profile';
import SettingChange from './src/screens/SettingChange';
import Settings from './src/screens/Settings';
import Timeline from './src/screens/Timeline';
import Trends from './src/screens/Trends';

const Stack = createNativeStackNavigator();

export default function App(): JSX.Element {
    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen
                    name="Login"
                    component={Login}
                />
                <Stack.Screen
                    name="Duo"
                    component={Duo}
                />
                <Stack.Screen
                    name="Home"
                    component={Home}
                />
                <Stack.Screen
                    name="Coming Soon"
                    component={ComingSoon}
                />
                <Stack.Screen
                    name="Chat"
                    component={Chat}
                />
                <Stack.Screen
                    name="Trends"
                    component={Trends}
                />
                <Stack.Screen
                    name="Timeline"
                    component={Timeline}
                />
                <Stack.Screen
                    name="Discover"
                    component={Discover}
                />
                <Stack.Screen
                    name="Profile"
                    component={Profile}
                />
                <Stack.Screen
                    name="Settings"
                    component={Settings}
                />
                <Stack.Screen
                    name="SettingChange"
                    component={SettingChange}
                />
                <Stack.Screen
                    name="Feedback"
                    component={Feedback}
                />
            </Stack.Navigator>
        </NavigationContainer>
    );
}
