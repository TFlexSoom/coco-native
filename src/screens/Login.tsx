/**
 * Login For users to collect token and perform changes to their account
 */

import React from 'react';

import {
    Formik,
} from 'formik';

import {
    GestureResponderEvent,
} from 'react-native';

import Logo from '../components/Logo';
import Terms from '../components/Terms';
import PrivacyPolicy from '../components/PrivacyPolicy';
import ThirdPartyLogins from '../components/ThirdPartyLogins';
import NavigatorTerms from '../constants/NavigatorTerms';
import { NavigatorContext, ScreenNavigator, ScreenProps } from '../contexts/Navigation';
import NWSafeAreaView from '../primitives/NWSafeAreaView';
import NWView from '../primitives/NWView';
import NWTextInput from '../primitives/NWTextInput';
import NWText from '../primitives/NWText';
import NWTouchableHighlight from '../primitives/NWTouchableHighlight';

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
    const inputClass = ' mb-3 pl-5 border-2 border-[#d3d3d3] rounded-lg '
    return (
        <NWView className=' flex-0 flex-col items-center w-min-[100%] '>
            <Formik
                initialValues={{ username: '', password: '' } as LoginRequest}
                onSubmit={makeLoginRequest.bind(null, navigator)}
            >
                {({ handleChange, handleBlur, handleSubmit, values }) => (
                    <NWView
                        className=' px-10 mb-5 w-[90%] '
                    >
                        <NWTextInput
                            className={inputClass}
                            onChangeText={handleChange('username')}
                            onBlur={handleBlur('username')}
                            value={values.username}
                            placeholder=' Username'
                        />
                        <NWTextInput
                            className={inputClass}
                            onChangeText={handleChange('password')}
                            onBlur={handleBlur('password')}
                            value={values.password}
                            placeholder=' Password'
                        />
                        <NWTouchableHighlight
                            className=' flex-0 items-center justify-center bg-[#C678A6] py-1 rounded-lg '
                            onPress={
                                handleSubmit as (values:
                                    GestureResponderEvent |
                                    React.FormEvent<HTMLFormElement> |
                                    undefined) => void
                            }
                        >
                            <NWText
                                className=' text-[#FFFFFFFF] font-medium text-lg '
                            >
                                Login
                            </NWText>
                        </NWTouchableHighlight>

                    </NWView>
                )}
            </Formik>
            <ThirdPartyLogins onPress={makeLoginRequest.bind(null, navigator)} />
            <NWView className=' flex-0 items-center '>
                <Terms />
                <PrivacyPolicy />
            </NWView>
        </NWView>
    );
}

export default function Login(props: ScreenProps): JSX.Element {
    return (
        <NWSafeAreaView>
            <NWView className=' mt-10 mb-[30%] '>
                <Logo />
            </NWView>
            <LoginForm {...props} />
        </NWSafeAreaView>
    )
}