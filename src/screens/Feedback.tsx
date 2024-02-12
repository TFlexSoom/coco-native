/**
 * Feedback Form for users when they want to illicit feedback to the developers.
 */

import React from 'react';
import {
    GestureResponderEvent,
} from 'react-native';
import { NavigatorContext, ScreenNavigator } from '../components/Navigation';
import TopBar from '../components/TopBar';
import NavigatorTerms from '../constants/NavigatorTerms';
import { Formik } from 'formik';
import NWView from '../primitives/NWView';
import NWText from '../primitives/NWText';
import NWTouchableHighlight from '../primitives/NWTouchableHighlight';
import NWTextInput from '../primitives/NWTextInput';

interface Feedback {
    text: string,
}

function submitFeedback(
    navigator: ScreenNavigator,
    { text }: Feedback
): void {
    navigator.navigate(NavigatorTerms.HOME);
}

export default function Feedback(): JSX.Element {
    const navigator = React.useContext(NavigatorContext);
    const feedback = "";

    return (
        <>
            <TopBar onButtonPress={() => navigator?.openDrawer()} />
            <Formik
                initialValues={{ text: feedback, } as Feedback}
                onSubmit={submitFeedback.bind(null, navigator)}
            >
                {({ handleChange, handleBlur, handleSubmit, values }) => (
                    <NWView className=" p-5 ">
                        <NWText className=" text-xl color-[#000000FF] ">Feedback</NWText>
                        <NWTextInput
                            className=" border-2 rounded-lg p-2 min-h-[40%] "
                            onChangeText={handleChange('text')}
                            onBlur={handleBlur('text')}
                            value={values.text}
                            multiline={true}
                        />
                        <NWView className=" pt-2 ">
                            <NWTouchableHighlight
                                className=' flex-0 items-center justify-center bg-[#C678A6] py-1 rounded-lg '
                                onPress={handleSubmit as (values:
                                    GestureResponderEvent |
                                    React.FormEvent<HTMLFormElement> |
                                    undefined) => void
                                }
                            >
                                <NWText
                                    className=' text-[#FFFFFFFF] font-medium text-lg '
                                >
                                    Submit Feedback
                                </NWText>
                            </NWTouchableHighlight>
                        </NWView>

                    </NWView>
                )}
            </Formik>
        </>
    );
}
