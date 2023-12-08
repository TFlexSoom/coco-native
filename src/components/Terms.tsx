/*
 * Author: Tristan Hilbert
 * Date: 8/28/2023
 * Filename: Terms.tsx
 * Desc: Terms and Conditions for Cocos Nutrition Application
 */

import React from 'react';

import {
    Text
} from 'react-native';
import Link from './Link';
import Config from './Config';

export default function Terms(): JSX.Element {
    return (
        <Link to={Config.termsOfService}>
            <Text>Term of Service</Text>
        </Link>
    )
}