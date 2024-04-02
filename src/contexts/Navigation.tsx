/**
 * Logo For Splash and Login
 */

import React from 'react';
import { Alert, Keyboard, Dimensions } from 'react-native';
import MaterialIcon from 'react-native-vector-icons/MaterialIcons';
import NWModal from '../primitives/NWModal';
import NWView from '../primitives/NWView';
import NWText from '../primitives/NWText';
import NWTouchableHighlight from '../primitives/NWTouchableHighlight';

const deviceWidth = Dimensions.get("window").width;
const deviceHeight = Dimensions.get("window").height;

export interface ScreenNavigator {
    navigate: (screenName: string) => void
    openDrawer: () => void
    closeDrawer: () => void
}

export const NavigatorContext: React.Context<ScreenNavigator> = React.createContext({
    navigate: (screenName: string) => { },
    openDrawer: () => { },
    closeDrawer: () => { },
});

export interface ScreenProps {

}

export interface Screen {
    component: (props: ScreenProps) => JSX.Element,
    hideDrawer?: boolean,
    hideTabs?: boolean,
}

export interface DrawerContent {
    icon: JSX.Element
}

interface NavigationDrawerProps {
    drawerContent: Record<string, DrawerContent>
    updateScreen: (screenName: string) => void
    closeDrawer: () => void
    isOut: boolean
}

function NavigationDrawer(props: NavigationDrawerProps): JSX.Element {
    const { drawerContent, updateScreen, closeDrawer, isOut } = props;

    if (!isOut) {
        return <></>;
    }

    return (
        <NWModal
            className=' p-0 m-0 flex-1 '
            animationIn='slideInLeft'
            animationOut='slideOutLeft'
            isVisible={isOut}
            onBackdropPress={closeDrawer}
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
            onModalHide={() => { }}
            onModalWillHide={() => { }}
            onBackButtonPress={() => { }}
            scrollTo={null}
            scrollOffset={0}
            scrollOffsetMax={0}
            scrollHorizontal={false}
            statusBarTranslucent={false}
            supportedOrientations={[]}
        >
            <NWView className=" bg-[#000000FF] h-screen w-[55%] p-4 ">
                <NWTouchableHighlight
                    className=" border-2 border-[#FFFFFFFF] rounded-md p-1 w-[36] "
                    onPress={closeDrawer}
                >
                    <MaterialIcon name="close" size={24} color="white" />
                </NWTouchableHighlight>
                {Object.keys(drawerContent).map((key, index) => (
                    <NWTouchableHighlight
                        className=" bg-[#A9A9A9FF] rounded-lg p-1 w-[80%] my-1 "
                        key={index}
                        onPress={updateScreen.bind(null, key)}
                    >
                        <NWView className=" pl-1 flex-0 flex-row items-center justify-begin ">
                            {drawerContent[key].icon}
                            <NWText>
                                {key}
                            </NWText>
                        </NWView>
                    </NWTouchableHighlight>
                ))}
            </NWView>
        </NWModal>
    )
}

export interface TabContent {
    icon: JSX.Element
}

interface NavigationTabProps {
    tabContent: Record<string, TabContent>
    updateScreen: (screenName: string) => void
}

function NavigationTab(props: NavigationTabProps): JSX.Element {
    const { tabContent, updateScreen } = props;

    const [keyboardIsVisible, updateKeyboardIsVisible] = React.useState(false);

    Keyboard.addListener('keyboardWillShow', updateKeyboardIsVisible.bind(null, true));
    Keyboard.addListener('keyboardWillHide', updateKeyboardIsVisible.bind(null, false));
    Keyboard.addListener('keyboardDidShow', updateKeyboardIsVisible.bind(null, true));
    Keyboard.addListener('keyboardDidHide', updateKeyboardIsVisible.bind(null, false));

    if (keyboardIsVisible) {
        return <></>
    }

    return (
        <>
            <NWView className=" flex-1 flex-row justify-evenly bg-[#A62A72FF] absolute bottom-0 w-screen ">
                {Object.keys(tabContent).map((key, index) => (
                    <NWTouchableHighlight key={index} onPress={updateScreen.bind(null, key)}>
                        <NWView className=" flex-0 flex-col items-center min-w-[20%] mt-2" >
                            {tabContent[key].icon}
                            <NWText className=" text-sm ">
                                {key}
                            </NWText>
                        </NWView>
                    </NWTouchableHighlight>
                ))}
            </NWView>
        </>
    )
}

export interface NavigationProps {
    initialScreen: string
    drawerContent: Record<string, DrawerContent>
    tabContent: Record<string, TabContent>
    screens: Record<string, Screen>
}

export default function Navigation(props: NavigationProps): JSX.Element {
    const { initialScreen, drawerContent, tabContent, screens } = props;

    const [currentScreen, updateCurrentScreen] = React.useState(initialScreen);
    const [isDrawerShown, updateIsDrawerShown] = React.useState(false);
    const closeDrawer = updateIsDrawerShown.bind(null, false);
    const updateScreenAndCloseDrawer = (screenName: string) => {
        closeDrawer();
        updateCurrentScreen(screenName);
    }

    const screen: Screen = screens[currentScreen];

    if (screen === undefined) {
        Alert.alert(`Screen ${currentScreen} Does Not Exist! Updating to ${initialScreen}!`)
        updateCurrentScreen(initialScreen);
    }

    return (
        <NavigatorContext.Provider value={{
            navigate: updateCurrentScreen,
            openDrawer: updateIsDrawerShown.bind(null, true),
            closeDrawer: closeDrawer,
        }}>
            {screen.hideDrawer ||
                <NavigationDrawer
                    drawerContent={drawerContent}
                    updateScreen={updateScreenAndCloseDrawer}
                    closeDrawer={closeDrawer}
                    isOut={isDrawerShown}
                />}
            <screen.component />
            {screen.hideTabs ||
                <NavigationTab
                    tabContent={tabContent}
                    updateScreen={updateCurrentScreen}
                />}
        </NavigatorContext.Provider>
    )
}