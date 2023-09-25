/**
 * Login For users to collect token and perform changes to their account
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
} from 'react-native';

import Logo from '../components/Logo';
import Terms from '../components/Terms';
import PrivacyPolicy from '../components/PrivacyPolicy';
import ThirdPartyLogins from '../components/ThirdPartyLogins';
import { AppScreenProps } from '../navigator/NavigatorTypes';
import { DrawerNavigationProp } from '@react-navigation/drawer';
import { ParamListBase } from '@react-navigation/native';
import NavigatorTerms from '../navigator/NavigatorTerms';

interface LoginRequest {
    username: string,
    password: string
}

function makeLoginRequest(
    navigation: DrawerNavigationProp<ParamListBase>,
    { username, password }: LoginRequest
): void {
    navigation.navigate(NavigatorTerms.DUO)
}

function LoginForm({ navigation }: AppScreenProps): JSX.Element {
    return (
        <>
            <Formik
                initialValues={{ username: '', password: '' } as LoginRequest}
                onSubmit={makeLoginRequest.bind(null, navigation)}
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
                        <Button
                            onPress={
                                handleSubmit as (values:
                                    GestureResponderEvent |
                                    React.FormEvent<HTMLFormElement> |
                                    undefined) => void
                            }
                            title="Login"
                        />

                    </View>
                )}
            </Formik>
            <ThirdPartyLogins onPress={makeLoginRequest.bind(null, navigation)} />
            <Terms />
            <PrivacyPolicy />
        </>
    );
}

export default function Login(props: AppScreenProps): JSX.Element {
    return (
        <SafeAreaView>
            <Logo />
            <LoginForm {...props} />
        </SafeAreaView>
    )
}