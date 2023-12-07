/**
 * Logo For Splash and Login
 */

import React from 'react';

export interface CocoScreenProps {

}

export interface CocoScreen {
    component: (props: CocoScreenProps) => JSX.Element,
}

export interface CocoNavigationContainerProps {
    initialScreen: string
    hiddenScreens: Record<string, CocoScreen>
    drawerScreens: Record<string, CocoScreen>
    tabScreens: Record<string, CocoScreen>
}

export default function Navigation(props: CocoNavigationContainerProps): JSX.Element {
    return (
        <></>
    )
}