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

import NavigatorTerms from '../constants/NavigatorTerms';
import { NavigatorContext, ScreenNavigator } from '../components/Navigation';
import TopBar from '../components/TopBar';

interface ChangeProfileRequest {
    username?: string,
    password?: string,
    duo?: string,
}

function changeProfileRequest(
    navigator: ScreenNavigator,
    { username, password, duo }: ChangeProfileRequest
): void {
    navigator.navigate(NavigatorTerms.HOME);
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

export default function Settings(): JSX.Element {
    const navigator = React.useContext(NavigatorContext);

    return (
        <>
            <TopBar onButtonPress={() => navigator?.openDrawer()} />
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
