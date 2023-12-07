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

import NavigatorTerms from '../constants/NavigatorTerms';
import { NavigatorContext, ScreenNavigator, ScreenProps } from '../components/Navigation';
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

export default function Profile(): JSX.Element {
    const navigator = React.useContext(NavigatorContext);

    const image = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADMAAAAzCAYAAAA6oTAqAAAAEXRFWHRTb2Z0d2FyZQBwbmdjcnVzaEB1SfMAAABQSURBVGje7dSxCQBACARB+2/ab8BEeQNhFi6WSYzYLYudDQYGBgYGBgYGBgYGBgYGBgZmcvDqYGBgmhivGQYGBgYGBgYGBgYGBgYGBgbmQw+P/eMrC5UTVAAAAABJRU5ErkJggg==';
    const username = "";
    const password = "";
    const duo = "";

    return (
        <>
            <TopBar onButtonPress={() => navigator.openDrawer()} />
            <TouchableHighlight onPress={() => changePhoto(image)}>
                <Image source={{ uri: image }} />
            </TouchableHighlight>
            <Formik
                initialValues={{ username: username, password: password, duo: duo } as ChangeProfileRequest}
                onSubmit={changeProfileRequest.bind(null, navigator)}
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
            <Button title="Logout" onPress={() => navigator.navigate(NavigatorTerms.LOGIN)} />
            <Button title="Delete Account" onPress={() => navigator.navigate(NavigatorTerms.LOGIN)} />
        </>
    );
}
