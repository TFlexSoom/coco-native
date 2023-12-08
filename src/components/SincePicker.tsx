/**
 * Picking a date since for looking up old records for chats and logs
 */

import React from 'react';
import NWModal from '../primitives/NWModal';
import NWButton from '../primitives/NWButton';
import { getEnumValues } from '../helpers/Enum';
import moment, { Moment } from 'moment';

export interface SincePickerProps {
    currentSinceOption?: SinceOption
    updateSinceOption: (since: SinceOption) => void,
}

enum SinceOption {
    Today = 1,
    Yesterday = 2,
    LastWeek = 3,
    LastMonth = 4,
    LastYear = 5,
    // SinceSpecific = 6,
}

const sinceOptionTitleMap: Record<SinceOption, string> = {
    [SinceOption.Today]: "Today",
    [SinceOption.Yesterday]: "Yesterday",
    [SinceOption.LastWeek]: "Last Week",
    [SinceOption.LastMonth]: "Last Month",
    [SinceOption.LastYear]: "Last Year",
    // [SinceOptions.SinceSpecific]: "Since Specific",
}

const functionMap: Record<SinceOption, () => Moment> = {
    [SinceOption.Today]: moment,
    [SinceOption.Yesterday]: () => moment().subtract(1, 'days'),
    [SinceOption.LastWeek]: () => moment().subtract(1, 'weeks'),
    [SinceOption.LastMonth]: () => moment().subtract(1, 'months'),
    [SinceOption.LastYear]: () => moment().subtract(1, 'years'),
    // [SinceOptions.SinceSpecific]: () => new Date(),
}

export function getSinceMoment(option: SinceOption): Date {
    return functionMap[option]().toDate();
}

export default function SincePicker(props: SincePickerProps): JSX.Element {
    const currentSinceOption = props?.currentSinceOption || SinceOption.Today;
    const { updateSinceOption } = props;

    const [isOpen, updateIsOpen] = React.useState(false);

    const preButton = (
        <NWButton
            title={sinceOptionTitleMap[currentSinceOption]}
            onPress={() => updateIsOpen(true)}
        />
    )

    if (!isOpen) {
        return preButton;
    }

    const updateAndClose = (val: SinceOption) => {
        updateIsOpen(false);
        updateSinceOption(val);
    }

    return (
        <>
            {preButton}
            <NWModal>
                {(getEnumValues(SinceOption) as Array<SinceOption>).map(
                    (sinceOption, index) => <NWButton
                        key={index}
                        title={sinceOptionTitleMap[sinceOption]}
                        onPress={() => updateAndClose(sinceOption)}
                    />
                )}
            </NWModal>
        </>
    )
}