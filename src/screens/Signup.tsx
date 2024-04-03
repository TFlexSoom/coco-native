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
import { NavigatorContext, ScreenNavigator, ScreenProps } from '../contexts/Navigation';
import NWSafeAreaView from '../primitives/NWSafeAreaView';
import NWView from '../primitives/NWView';
import NWTextInput from '../primitives/NWTextInput';
import NWText from '../primitives/NWText';
import NWTouchableHighlight from '../primitives/NWTouchableHighlight';
import { AuthenticationContext, Credentials } from '../contexts/Authentication';
import NavigatorTerms from '../constants/NavigatorTerms';

async function register(
    navigator: ScreenNavigator,
    authentication: AuthenticationContext,
    creds: Credentials
): Promise<void> {
    const result = await authentication.signUp(creds);
}

function RegisterForm(): JSX.Element {
    const navigator = React.useContext(NavigatorContext);
    const authentication = React.useContext(AuthenticationContext);
    const inputClass = ' pl-5 border-2 border-[#d3d3d3] rounded-lg '
    return (
        <NWView className=' flex-0 flex-col items-center w-min-[100%] '>
            <Formik
                initialValues={{ email: '', password: '' } as Credentials}
                onSubmit={register.bind(null, navigator, authentication)}
            >
                {({ handleChange, handleBlur, handleSubmit, values }) => (
                    <NWView
                        className=' px-10 w-[90%] '
                    >
                        <NWView
                            className=' py-1 '
                        >
                            <NWTextInput
                                className={inputClass}
                                onChangeText={handleChange('email')}
                                onBlur={handleBlur('email')}
                                value={values.email}
                                placeholder=' Email'
                            />
                        </NWView>
                        <NWView
                            className=' pb-2 '
                        >
                            <NWTextInput
                                className={inputClass}
                                onChangeText={handleChange('password')}
                                onBlur={handleBlur('password')}
                                value={values.password}
                                placeholder=' Password'
                            />
                        </NWView>
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
                                Register
                            </NWText>
                        </NWTouchableHighlight>

                    </NWView>
                )}
            </Formik>
            <NWView
                className=' px-10 py-2 w-[90%] '
            >
                <NWTouchableHighlight
                    className=' flex-0 items-center justify-center bg-[#C678A6] py-1 rounded-lg '
                    onPress={() => { navigator.navigate(NavigatorTerms.LOGIN) }}
                >
                    <NWText
                        className=' text-[#FFFFFFFF] font-medium text-lg '
                    >
                        Back To Login
                    </NWText>
                </NWTouchableHighlight>
            </NWView>
            <NWView className=' flex-0 items-center '>
                <Terms />
                <PrivacyPolicy />
            </NWView>
        </NWView>
    );
}

export default function SignUp(props: ScreenProps): JSX.Element {
    return (
        <NWSafeAreaView>
            <NWView className=' py-16 '>
                <Logo />
            </NWView>
            <RegisterForm {...props} />
        </NWSafeAreaView>
    )
}