/**
 * Homescreen for Coco-Nutrition. Not seen too often but shown on first login
 * with version information for the technical folks.
 */

import React from 'react';
import TopBar from '../components/TopBar';
import Config from '../components/Config';
import { NavigatorContext } from '../components/Navigation';
import NWSafeAreaView from '../primitives/NWSafeAreaView';
import NWView from '../primitives/NWView';
import NWText from '../primitives/NWText';
import NWStatusBar from '../primitives/NWStatusBar';

export default function Home(): JSX.Element {
    const navigator = React.useContext(NavigatorContext);

    return (
        <NWSafeAreaView>
            <NWStatusBar />
            <TopBar onButtonPress={() => navigator?.openDrawer()} />
            <NWView className=" items-center align-begin">
                <NWText className="mt-10 text-3xl text-[#1fb6ff]"> Welcome to Version {Config.versionNumber} </NWText>
                <NWText className="text-xl"> Find Nutritional Agency in your diet </NWText>
            </NWView>
        </NWSafeAreaView>
    )
}