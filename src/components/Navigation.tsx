/**
 * Logo For Splash and Login
 */

import React from 'react';
import { Modal, Text, TouchableHighlight, View } from 'react-native';

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

export interface NavigationProps {
    initialScreen: string
    hiddenScreens: Record<string, Screen>
    drawerScreens: Record<string, Screen>
    tabScreens: Record<string, Screen>
}

interface NavigationDrawerProps {
    drawerScreens: Record<string, Screen>
    updateScreen: (screenName: string) => void
    closeDrawer: () => void
    isOut: boolean
}

function NavigationDrawer(props: NavigationDrawerProps): JSX.Element {
    const { drawerScreens, updateScreen, closeDrawer, isOut } = props;

    if (!isOut) {
        return <></>;
    }

    return (
        <Modal>
            <View>
                <TouchableHighlight onPress={closeDrawer}>
                    <Text>Username</Text>
                </TouchableHighlight>
                {Object.keys(drawerScreens).map((key, index) => (
                    <TouchableHighlight key={index} onPress={updateScreen.bind(null, key)}>
                        <Text>
                            {key}
                        </Text>
                    </TouchableHighlight>
                ))}
            </View>
        </Modal>
    )
}

interface NavigationTabProps {
    tabScreens: Record<string, Screen>
    updateScreen: (screenName: string) => void
}

function NavigationTab(props: NavigationTabProps): JSX.Element {
    const { tabScreens, updateScreen } = props;

    return (
        <View>
            {Object.keys(tabScreens).map((key, index) => (
                <TouchableHighlight key={index} onPress={updateScreen.bind(null, key)}>
                    <Text>
                        {key}
                    </Text>
                </TouchableHighlight>
            ))}
        </View>
    )
}


export default function Navigation(props: NavigationProps): JSX.Element {
    const { initialScreen, hiddenScreens, drawerScreens, tabScreens } = props;

    const [currentScreen, updateCurrentScreen] = React.useState(initialScreen);
    const [isDrawerShown, updateIsDrawerShown] = React.useState(false);
    const closeDrawer = updateIsDrawerShown.bind(null, false);
    const updateScreenAndCloseDrawer = (screenName: string) => {
        closeDrawer();
        updateCurrentScreen(screenName);
    }

    const screen: Screen = drawerScreens[currentScreen] || tabScreens[currentScreen] || hiddenScreens[currentScreen] || null;

    if (screen === null) {
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
                    drawerScreens={drawerScreens}
                    updateScreen={updateScreenAndCloseDrawer}
                    closeDrawer={closeDrawer}
                    isOut={isDrawerShown}
                />}
            <screen.component />
            {screen.hideTabs || <NavigationTab tabScreens={tabScreens} updateScreen={updateCurrentScreen} />}
        </NavigatorContext.Provider>
    )
}