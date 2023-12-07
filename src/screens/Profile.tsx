/**
 * Profile Settings Screen
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
} from 'react-native';

import { AppScreenProps } from '../constants/NavigatorTypes';
import { DrawerNavigationProp } from '@react-navigation/drawer';
import { ParamListBase } from '@react-navigation/native';
import NavigatorTerms from '../constants/NavigatorTerms';
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

export default function Profile({ navigation }: AppScreenProps): JSX.Element {

    const image = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADMAAAAzCAYAAAA6oTAqAAAAEXRFWHRTb2Z0d2FyZQBwbmdjcnVzaEB1SfMAAABQSURBVGje7dSxCQBACARB+2/ab8BEeQNhFi6WSYzYLYudDQYGBgYGBgYGBgYGBgYGBgZmcvDqYGBgmhivGQYGBgYGBgYGBgYGBgYGBgbmQw+P/eMrC5UTVAAAAABJRU5ErkJggg==';
    const username = "";
    const password = "";
    const duo = "";

    return (
        <>
            <TopBar onButtonPress={() => navigation?.openDrawer()} />
            <TouchableHighlight onPress={() => changePhoto(image)}>
                <Image source={{ uri: image }} />
            </TouchableHighlight>
            <Formik
                initialValues={{ username: username, password: password, duo: duo } as ChangeProfileRequest}
                onSubmit={changeProfileRequest.bind(null, navigation)}
            >
                {({ handleChange, handleBlur, handleSubmit, values }) => (
                    <View>
                        <TextInput
                            onChangeText={handleChange('username')}
                            onBlur={handleBlur('username')}
                            value={values.username}
                        />
                        <TextInput
                            onChangeText={handleChange('password')}
                            onBlur={handleBlur('password')}
                            value={values.username}
                        />
                        <TextInput
                            onChangeText={handleChange('duo')}
                            onBlur={handleBlur('duo')}
                            value={values.duo}
                        />
                        <Button
                            onPress={
                                handleSubmit as (values:
                                    GestureResponderEvent |
                                    React.FormEvent<HTMLFormElement> |
                                    undefined) => void
                            }
                            title="Submit Changes"
                        />

                    </View>
                )}
            </Formik>
            <Button title="Logout" onPress={() => { }} />
            <Button title="Delete Account" onPress={() => { }} />
        </>
    );
}
