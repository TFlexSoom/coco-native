/**
 * Logo For Splash and Login
 */

import React from 'react';
import NWImage from '../primitives/NWImage';
import NWView from '../primitives/NWView';

export default function Logo(): JSX.Element {
    return (
        <NWView className=' flex items-center my-5 '>
            <NWImage
                className=' h-[100px] '
                style={{
                    resizeMode: 'contain',
                }}
                source={require('../images/cocoLogo.jpg')}
            />
        </NWView>
    )
}