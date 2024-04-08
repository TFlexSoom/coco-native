/**
 * Profile Settings Screen
 */

import React from 'react';
import {
    Formik,
} from 'formik';

import {
    GestureResponderEvent,
    Image,
    ScrollView,
} from 'react-native';

import NavigatorTerms from '../constants/NavigatorTerms';
import { NavigatorContext, ScreenNavigator } from '../contexts/Navigation';
import TopBar from '../components/TopBar';
import NWTextInput from '../primitives/NWTextInput';
import NWText from '../primitives/NWText';
import NWTouchableHighlight from '../primitives/NWTouchableHighlight';
import NWView from '../primitives/NWView';
import NWButton from '../primitives/NWButton';
import { AuthenticationContext } from '../contexts/Authentication';

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

async function signOut(auth: AuthenticationContext, navigator: ScreenNavigator): Promise<void> {
    await auth.signOut();
    navigator.navigate(NavigatorTerms.LOGIN);
}

export default function Profile(): JSX.Element {
    const navigator = React.useContext(NavigatorContext);
    const auth = React.useContext(AuthenticationContext);

    const image = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADMAAAAzCAYAAAA6oTAqAAAAEXRFWHRTb2Z0d2FyZQBwbmdjcnVzaEB1SfMAAABQSURBVGje7dSxCQBACARB+2/ab8BEeQNhFi6WSYzYLYudDQYGBgYGBgYGBgYGBgYGBgZmcvDqYGBgmhivGQYGBgYGBgYGBgYGBgYGBgbmQw+P/eMrC5UTVAAAAABJRU5ErkJggg==';
    const username = "";
    const password = "";
    const duo = "";

    return (
        <>
            <TopBar onButtonPress={() => navigator.openDrawer()} />
            <NWView className=" h-[83%] ">
                <ScrollView
                    contentInsetAdjustmentBehavior="automatic"
                >
                    <NWText className=" text-l color-[#000000FF] py-1 ">Profile Picture</NWText>
                    <NWView className=" flex-0 items-center justify-center ">
                        <NWTouchableHighlight onPress={() => changePhoto(image)}>
                            <Image width={64} height={64} source={{ uri: image }} />
                        </NWTouchableHighlight>
                    </NWView>

                    <NWText className=" text-l color-[#000000FF] py-2 ">Change Password</NWText>
                    <Formik
                        initialValues={{ username: username, password: password, duo: duo } as ChangeProfileRequest}
                        onSubmit={changeProfileRequest.bind(null, navigator)}
                    >
                        {({ handleChange, handleBlur, handleSubmit, values }) => (
                            <NWView className=" pt-5 ">
                                <NWView>
                                    <NWTextInput
                                        className=" border-2 rounded-lg p-2 mt-2 "
                                        onChangeText={handleChange('username')}
                                        onBlur={handleBlur('username')}
                                        value={values.username}
                                        placeholder='Username'
                                    />
                                </NWView>
                                <NWView className=" pt-2 ">
                                    <NWTextInput
                                        className=" border-2 rounded-lg p-2 "
                                        onChangeText={handleChange('password')}
                                        onBlur={handleBlur('password')}
                                        value={values.password}
                                        placeholder='Password'
                                    />
                                </NWView>
                                <NWView className=" pt-2 ">
                                    <NWTextInput
                                        className=" border-2 rounded-lg p-2 "
                                        onChangeText={handleChange('duo')}
                                        onBlur={handleBlur('duo')}
                                        value={values.duo}
                                        placeholder='Confirm Password'
                                    />
                                </NWView>

                                <NWView className=" pt-2 ">
                                    <NWTouchableHighlight
                                        className=' flex-0 items-center justify-center bg-[#C678A6] py-1 rounded-lg '
                                        onPress={handleSubmit as (values:
                                            GestureResponderEvent |
                                            React.FormEvent<HTMLFormElement> |
                                            undefined) => void}
                                    >
                                        <NWText
                                            className=' text-[#FFFFFFFF] font-medium text-lg '
                                        >
                                            Change Password
                                        </NWText>
                                    </NWTouchableHighlight>
                                </NWView>

                            </NWView>
                        )}
                    </Formik>

                    <NWText className=" text-l color-[#000000FF] pb-2 pt-8 ">Controls</NWText>
                    <NWView className=" py-2 ">
                        <NWTouchableHighlight
                            className=' flex-0 items-center justify-center bg-[#C678A6] py-1 rounded-lg '
                            onPress={() => signOut(auth, navigator)}
                        >
                            <NWText
                                className=' text-[#FFFFFFFF] font-medium text-lg '
                            >
                                Logout
                            </NWText>
                        </NWTouchableHighlight>
                    </NWView>
                    <NWView>
                        <NWTouchableHighlight
                            className=' flex-0 items-center justify-center bg-[#C678A6] py-1 rounded-lg '
                            onPress={() => signOut(auth, navigator)}
                        >
                            <NWText
                                className=' text-[#FFFFFFFF] font-medium text-lg '
                            >
                                Delete Account
                            </NWText>
                        </NWTouchableHighlight>
                    </NWView>
                </ScrollView>
            </NWView>
        </>
    );
}
