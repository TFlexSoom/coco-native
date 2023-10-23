/**
 * Register For users to collect token and create an account
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

interface RegisterRequest {
    email: string,
    username: string,
    password: string,
    passwordConfirm: string,
}

function makeRegisterRequest({
    email,
    username,
    password,
    passwordConfirm
}: RegisterRequest): void {
    // TODO
}

function RegisterForm(): JSX.Element {
    return (
        <>
            <Formik
                initialValues={{ email: '', username: '', password: '', passwordConfirm: '' } as RegisterRequest}
                onSubmit={makeRegisterRequest}
            >
                {({ handleChange, handleBlur, handleSubmit, values }) => (
                    <View>
                        <TextInput
                            onChangeText={handleChange('email')}
                            onBlur={handleBlur('email')}
                            value={values.email}
                        />
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
                            onChangeText={handleChange('passwordConfirm')}
                            onBlur={handleBlur('passwordConfirm')}
                            value={values.username}
                        />
                        <Button
                            onPress={
                                handleSubmit as (values:
                                    GestureResponderEvent |
                                    React.FormEvent<HTMLFormElement> |
                                    undefined) => void
                            }
                            title="Register"
                        />
                        <Button
                            onPress={/* TODO Nav to screen Login */ (e) => { }}
                            title="Cancel"
                        />
                    </View>
                )}
            </Formik>
            <ThirdPartyLogins onPress={() => { }} />
            <Terms />
            <PrivacyPolicy />
        </>
    );
}

export default function Register(): JSX.Element {
    return (
        <SafeAreaView>
            <Logo />
            <RegisterForm />
        </SafeAreaView>
    )
}