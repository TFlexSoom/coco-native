/**
 * Logo For Splash and Login
 */

import { styled } from 'nativewind';
import React from 'react';
import { Modal, Text, TouchableHighlight, View } from 'react-native';

const TailwindModal = styled(Modal);
const TailwindView = styled(View);

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
        <TailwindModal
            className=" bg-[#000000] "
            animationType='slide'
            transparent={true}
            onDismiss={closeDrawer}
            onRequestClose={closeDrawer}

        >
            <TailwindView className=" bg-[#000000] ">
                <TouchableHighlight onPress={closeDrawer}>
                    <Text>Username</Text>
                </TouchableHighlight>
                {Object.keys(drawerContent).map((key, index) => (
                    <TouchableHighlight key={index} onPress={updateScreen.bind(null, key)}>
                        <Text>
                            {key}
                        </Text>
                    </TouchableHighlight>
                ))}
            </TailwindView>
        </TailwindModal>
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

    return (
        <View>
            {Object.keys(tabContent).map((key, index) => (
                <TouchableHighlight key={index} onPress={updateScreen.bind(null, key)}>
                    <Text>
                        {key}
                    </Text>
                </TouchableHighlight>
            ))}
        </View>
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
        console.error(`Screen ${currentScreen} Does Not Exist! Updating to ${initialScreen}!`)
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