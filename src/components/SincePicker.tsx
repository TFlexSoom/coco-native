/**
 * Picking a date since for looking up old records for chats and logs
 */

import React from 'react';
import { Dimensions } from 'react-native'
import NWModal from '../primitives/NWModal';
import NWButton from '../primitives/NWButton';
import { getEnumValues } from '../helpers/Enum';
import moment, { Moment } from 'moment';
import NWText from '../primitives/NWText';
import NWTouchableHighlight from '../primitives/NWTouchableHighlight';
import NWView from '../primitives/NWView';

const deviceWidth = Dimensions.get("window").width;
const deviceHeight = Dimensions.get("window").height;

export interface SincePickerProps {
    currentSinceOption?: SinceOption
    updateSinceOption?: (since: number) => void,
}

export enum SinceOption {
    Today = 1,
    Yesterday = 2,
    LastWeek = 3,
    LastMonth = 4,
    LastYear = 5,
    // SinceSpecific = 6,
}

const sinceOptionTitleMap: Record<number, string> = {
    [SinceOption.Today]: "Today",
    [SinceOption.Yesterday]: "Yesterday",
    [SinceOption.LastWeek]: "Last Week",
    [SinceOption.LastMonth]: "Last Month",
    [SinceOption.LastYear]: "Last Year",
    // [SinceOptions.SinceSpecific]: "Since Specific",
}

const functionMap: Record<number, () => Moment> = {
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
    const updateSinceOption = props?.updateSinceOption || (() => { });

    const [isOpen, updateIsOpen] = React.useState(false);
    const closeModal = updateIsOpen.bind(null, false);

    const highlightClassname = " w-[80%] py-1 my-2 flex-0 items-center justify-center rounded-lg ";
    const textClassname = " text-lg ";

    const preButton = (
        <NWView
            className=" absolute top-0 flex-0 flex-col items-center w-screen "
        >
            <NWTouchableHighlight
                className={highlightClassname + " bg-[#C678A699] "}
                onPress={() => updateIsOpen(true)}
            >
                <NWText
                    className={textClassname}
                >
                    {sinceOptionTitleMap[currentSinceOption]}
                </NWText>
            </NWTouchableHighlight>
        </NWView>
    );

    if (!isOpen) {
        return preButton;
    }

    const updateAndClose = (val: SinceOption) => {
        closeModal();
        updateSinceOption(val);
    }

    return (
        <>
            {preButton}
            <NWModal
                animationIn='slideInUp'
                animationOut='slideOutUp'
                isVisible={isOpen}
                onBackdropPress={closeModal}
                hasBackdrop={false}
                swipeDirection='left'
                deviceHeight={deviceHeight}
                deviceWidth={deviceWidth}
                animationInTiming={500} // ms
                animationOutTiming={500} // ms
                avoidKeyboard={false}
                coverScreen={false}
                backdropColor={''}
                backdropOpacity={0}
                backdropTransitionInTiming={0}
                backdropTransitionOutTiming={0}
                customBackdrop={undefined}
                useNativeDriver={false}
                hideModalContentWhileAnimating={false}
                propagateSwipe={false}
                panResponderThreshold={0}
                swipeThreshold={0}
                onModalShow={() => { }}
                onModalWillShow={() => { }}
                onModalHide={closeModal}
                onModalWillHide={closeModal}
                onBackButtonPress={() => { }}
                scrollTo={null}
                scrollOffset={0}
                scrollOffsetMax={0}
                scrollHorizontal={false}
                statusBarTranslucent={false}
                supportedOrientations={[]}
            >
                <NWView
                    className=" flex-0 flex-col items-center mt-[13%] "
                >
                    <NWView
                        className={
                            " w-[90%] flex-0 flex-col items-center justify-between " +
                            " bg-[#a9a9a9BB] rounded-lg py-2 "
                        }
                    >
                        {(getEnumValues(SinceOption) as Array<SinceOption>).map(
                            (sinceOption, index) =>
                                <NWTouchableHighlight
                                    className={highlightClassname + " bg-[#C678A6FF] "}
                                    key={index}
                                    onPress={() => updateAndClose(sinceOption)}
                                >
                                    <NWText
                                        className={textClassname}
                                    >
                                        {sinceOptionTitleMap[sinceOption]}
                                    </NWText>
                                </NWTouchableHighlight>
                        )}
                    </NWView>
                </NWView>
            </NWModal>
        </>
    )
}