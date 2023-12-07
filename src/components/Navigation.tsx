/**
 * Logo For Splash and Login
 */

import React from 'react';

export interface ScreenNavigator {
    navigate: (screenName: string) => void
    openDrawer: () => void
}

export const NavigatorContext: React.Context<ScreenNavigator> = React.createContext({
    navigate: (screenName: string) => { },
    openDrawer: () => { },
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
}

function NavigationDrawer(props: NavigationDrawerProps): JSX.Element {
    return (
        <></>
    )
}

interface NavigationTabProps {
    tabScreens: Record<string, Screen>
}

function NavigationTab(props: NavigationTabProps): JSX.Element {
    return (
        <></>
    )
}


export default function Navigation(props: NavigationProps): JSX.Element {
    const { initialScreen, hiddenScreens, drawerScreens, tabScreens } = props;

    const [currentScreen, updateCurrentScreen] = React.useState(initialScreen);

    const screen: Screen = drawerScreens[currentScreen] || tabScreens[currentScreen] || hiddenScreens[currentScreen] || null;

    if (screen === null) {
        console.error(`Screen ${currentScreen} Does Not Exist! Updating to ${initialScreen}!`)
        updateCurrentScreen(initialScreen);
    }

    return (
        <NavigatorContext.Provider value={{
            navigate: updateCurrentScreen,
            openDrawer: () => { }
        }}>
            {screen.hideDrawer || <NavigationDrawer drawerScreens={drawerScreens} />}
            <screen.component />
            {screen.hideTabs || <NavigationTab tabScreens={tabScreens} />}
        </NavigatorContext.Provider>
    )
}