/**
 * Picking a date since for looking up old records for chats and logs
 */

import React from 'react';
import {
    Button,
} from 'react-native';

export interface SincePickerProps {
    onPickedOption: (since: Date) => void,
}

export default function SincePicker({ onPickedOption }: SincePickerProps): JSX.Element {
    return (
        <Button title="Today" onPress={() => onPickedOption(new Date())} />
    )
}