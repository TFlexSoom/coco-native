/**
 * Chat page for describing the foods eaten each day.
 */

import React from 'react';
import {
    FlatList,
    SafeAreaView,
    StatusBar,
} from 'react-native';

import MaterialIcon from 'react-native-vector-icons/MaterialIcons';
import { NavigatorContext } from '../contexts/Navigation';
import TopBar from '../components/TopBar';
import SincePicker, { SinceOption } from '../components/SincePicker';
import NWTouchableHighlight from '../primitives/NWTouchableHighlight';
import NWText from '../primitives/NWText';
import { Formik } from 'formik';
import NWView from '../primitives/NWView';
import NWTextInput from '../primitives/NWTextInput';

interface Chat {
    id: number,
    fromMe: boolean,
    text: string,
    date: Date,
}

const chats: Chat[] = [
    {
        id: 1,
        fromMe: false,
        text: "First Hello Example",
        date: new Date(),
    },
    {
        id: 2,
        fromMe: true,
        text: "Hello Example",
        date: new Date(),
    },
    {
        id: 3,
        fromMe: false,
        text: "Hello Example",
        date: new Date(),
    },
    {
        id: 4,
        fromMe: true,
        text: "Hello Example",
        date: new Date(),
    },
    {
        id: 5,
        fromMe: false,
        text: "Hello Example",
        date: new Date(),
    },
    {
        id: 6,
        fromMe: true,
        text: "Hello Example",
        date: new Date(),
    },
    {
        id: 7,
        fromMe: false,
        text: "Hello Example",
        date: new Date(),
    },
    {
        id: 8,
        fromMe: true,
        text: "Hello Example",
        date: new Date(),
    },
    {
        id: 9,
        fromMe: false,
        text: "Hello Example",
        date: new Date(),
    },
    {
        id: 10,
        fromMe: true,
        text: "Hello Example",
        date: new Date(),
    },
    {
        id: 11,
        fromMe: false,
        text: "Hello Example",
        date: new Date(),
    },
    {
        id: 12,
        fromMe: true,
        text: "Last Hello Example",
        date: new Date(),
    },
]

interface NewMessage {
    text: string,
}

async function sumbitMessage({ text }: NewMessage) {

}

export default function Chat(): JSX.Element {
    const navigator = React.useContext(NavigatorContext);
    const initialMessage: NewMessage = {
        text: ""
    }

    const [sinceOption, updateSinceOption] = React.useState(SinceOption.Today);

    return (
        <SafeAreaView>
            <StatusBar />
            <TopBar onButtonPress={() => navigator.openDrawer()} />
            <NWView className=" flex-0 flex-col h-[85%] px-1 ">
                <FlatList
                    contentContainerStyle={{
                        flex: 0,
                        flexDirection: "column",
                    }}
                    inverted={true}
                    data={chats}
                    keyExtractor={(item, index) => String(item.id)}
                    renderItem={({ item }: { item: Chat }) =>
                        <NWView
                            className={" p-2 my-2 w-[40%] rounded-md " +
                                (item.fromMe ?
                                    " bg-[#A62A72BB] " :
                                    " bg-[#C678A6BB] self-end text-right ")
                            }
                        >
                            <NWText
                                className={
                                    (item.fromMe ?
                                        " text-left " :
                                        " text-right ")
                                }
                                key={item.id}
                            >
                                {item.text}
                            </NWText>
                        </NWView>
                    }
                />
                <SincePicker currentSinceOption={sinceOption} updateSinceOption={updateSinceOption} />
            </NWView>
            <NWView className=" absolute bottom-[10] flex-0 flex-row bg-[#a9a9a930] rounded-md ">
                <Formik
                    initialValues={initialMessage}
                    onSubmit={sumbitMessage}
                >
                    {({ handleChange, handleBlur, handleSubmit, values }) => (
                        <>
                            <NWTextInput
                                className=" flex-[9] "
                                onChangeText={handleChange('text')}
                                onBlur={handleBlur('text')}
                                value={values.text}
                            />
                            <NWTouchableHighlight
                                className=" flex-1 bg-[#FFFFFFFF] items-center justify-center rounded-lg m-3 "
                                onPress={() => { handleSubmit() }}
                            >
                                <MaterialIcon name="send" size={24} color="black" />
                            </NWTouchableHighlight>
                        </>
                    )}
                </Formik>
            </NWView>
        </SafeAreaView>
    )
}