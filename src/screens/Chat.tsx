/**
 * Chat page for describing the foods eaten each day.
 */

import React from 'react';
import {
    Button,
    Image,
    SafeAreaView,
    ScrollView,
    StatusBar,
    Text,
    TouchableOpacity,
} from 'react-native';
import { AppScreenProps } from '../constants/NavigatorTypes';
import TopBar from '../components/TopBar';
import SincePicker from '../components/SincePicker';

interface Chat {
    fromMe: boolean,
    text: string,
    date: Date,
}

const chats: Array<Chat> = [
    {
        fromMe: false,
        text: "Hello Example",
        date: new Date(),
    },
    {
        fromMe: true,
        text: "Hello Example",
        date: new Date(),
    },
    {
        fromMe: false,
        text: "Hello Example",
        date: new Date(),
    },
    {
        fromMe: true,
        text: "Hello Example",
        date: new Date(),
    },
]

export default function Chat({ navigation }: AppScreenProps): JSX.Element {
    return (
        <SafeAreaView>
            <StatusBar />
            <TopBar onButtonPress={() => navigation?.openDrawer()} />
            <SincePicker onPickedOption={(since: Date) => { }} />
            <ScrollView
                contentInsetAdjustmentBehavior="automatic">
                {chats.map((item, index) =>
                    <Text key={index}>
                        {item.text}
                    </Text>
                )}
            </ScrollView>
            <TouchableOpacity onPress={() => { }}>
                <Image
                    source={{
                        // TODO Replace with static image to be packaged with app
                        uri: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADMAAAAzCAYAAAA6oTAqAAAAEXRFWHRTb2Z0d2FyZQBwbmdjcnVzaEB1SfMAAABQSURBVGje7dSxCQBACARB+2/ab8BEeQNhFi6WSYzYLYudDQYGBgYGBgYGBgYGBgYGBgZmcvDqYGBgmhivGQYGBgYGBgYGBgYGBgYGBgbmQw+P/eMrC5UTVAAAAABJRU5ErkJggg=='
                    }}
                />
            </TouchableOpacity>
        </SafeAreaView>
    )
}