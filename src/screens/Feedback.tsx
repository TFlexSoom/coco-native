/**
 * Feedback Form for users when they want to illicit feedback to the developers.
 */

import React from 'react';
import {
    Button,
    GestureResponderEvent,
    TextInput,
    View,
} from 'react-native';
import TopBar from '../components/TopBar';
import { DrawerNavigationProp } from '@react-navigation/drawer';
import { ParamListBase } from '@react-navigation/native';
import NavigatorTerms from '../navigator/NavigatorTerms';
import { AppScreenProps } from '../navigator/NavigatorTypes';
import { Formik } from 'formik';

interface Feedback {
    text: string,
}

function submitFeedback(
    navigation: DrawerNavigationProp<ParamListBase>,
    { text }: Feedback
): void {
    navigation.navigate(NavigatorTerms.HOME);
}

export default function Feedback({ navigation }: AppScreenProps): JSX.Element {

    const feedback = "";

    return (
        <>
            <TopBar onButtonPress={() => navigation?.openDrawer()} />
            <Formik
                initialValues={{ text: feedback, } as Feedback}
                onSubmit={submitFeedback.bind(null, navigation)}
            >
                {({ handleChange, handleBlur, handleSubmit, values }) => (
                    <View>
                        <TextInput
                            onChangeText={handleChange('text')}
                            onBlur={handleBlur('text')}
                            value={values.text}
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
