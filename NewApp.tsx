import React, {Component} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import StackNavigator from './router/StackNavigator';

export default class NewApp extends Component {
    render() {
        return (
            <NavigationContainer>
                <StackNavigator />
            </NavigationContainer>
        );
    }
}
