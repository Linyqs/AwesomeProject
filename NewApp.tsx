import React, {Component} from 'react';
import {NavigationContainer} from '@react-navigation/native';

import TabNavigator from './router/TabNavigator';

export default class NewApp extends Component {
    render() {
        return (
            <NavigationContainer>
                <TabNavigator />
            </NavigationContainer>
        );
    }
}
