/*
 * Author: Tristan Hilbert
 * Date: 8/28/2023
 * Filename: PrivacyPolicy.tsx
 * Desc: Privacy Policy for Cocos Nutrition Application
 */

import React from 'react';

import {
    Text
} from 'react-native';
import Link from './Link';
import Config from './Config';

export default function PrivacyPolicy(): JSX.Element {
    return (
        <Link to={Config.termsOfService}>
            <Text>Privacy Policy</Text>
        </Link>
    )
}