/**
 * Settings page for changing app related options
 */

import React from 'react';
import {
    Formik,
} from 'formik';

import {
    View,
    SafeAreaView,
    Button,
    TextInput,
    GestureResponderEvent,
    TouchableHighlight,
    Image,
    Text,
    Switch,
} from 'react-native';

import { AppScreenProps } from '../navigator/NavigatorTypes';
import { DrawerNavigationProp } from '@react-navigation/drawer';
import { ParamListBase } from '@react-navigation/native';
import NavigatorTerms from '../navigator/NavigatorTerms';
import TopBar from '../components/TopBar';

interface ChangeProfileRequest {
    username?: string,
    password?: string,
    duo?: string,
}

function changeProfileRequest(
    navigation: DrawerNavigationProp<ParamListBase>,
    { username, password, duo }: ChangeProfileRequest
): void {
    navigation.navigate(NavigatorTerms.HOME);
}

function changePhoto(photo: string): void {
    /** TODO **/
}

interface Setting {
    name: string,
    currentVal: boolean,
}

const settings: Array<Setting> = [
    {
        name: "Dark Mode",
        currentVal: true,
    },
    {
        name: "Use Local NLP",
        currentVal: true,
    },
    {
        name: "Use Local Storage",
        currentVal: true,
    },
    {
        name: "Animations",
        currentVal: true,
    }
]

export default function Settings({ navigation }: AppScreenProps): JSX.Element {
    return (
        <>
            <TopBar onButtonPress={() => navigation?.openDrawer()} />
            {settings.map(({ name, currentVal }, index) =>
                <View key={index}>
                    <Text>{name}</Text>
                    <Switch onValueChange={() => { }} value={currentVal} />
                </View>
            )}
            <Button title="Logout" onPress={() => { }} />
            <Button title="Delete Account" onPress={() => { }} />
        </>
    );
}
