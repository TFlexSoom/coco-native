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
import NavigatorTerms from '../constants/NavigatorTerms';
import { NavigatorContext, ScreenNavigator, ScreenProps } from '../components/Navigation';
import NWSafeAreaView from '../primitives/NWSafeAreaView';

interface LoginRequest {
    username: string,
    password: string
}

function makeLoginRequest(
    navigator: ScreenNavigator,
    { username, password }: LoginRequest
): void {
    navigator.navigate(NavigatorTerms.DUO)
}

function LoginForm(): JSX.Element {
    const navigator = React.useContext(NavigatorContext);

    return (
        <View>
            <Formik
                initialValues={{ username: '', password: '' } as LoginRequest}
                onSubmit={makeLoginRequest.bind(null, navigator)}
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
            <ThirdPartyLogins onPress={makeLoginRequest.bind(null, navigator)} />
            <Terms />
            <PrivacyPolicy />
        </ View>
    );
}

export default function Login(props: ScreenProps): JSX.Element {
    return (
        <NWSafeAreaView>
            <Logo />
            <LoginForm {...props} />
        </NWSafeAreaView>
    )
}