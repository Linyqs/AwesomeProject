import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {Route, getFocusedRouteNameFromRoute} from '@react-navigation/native';

const Stack = createNativeStackNavigator();

export default function StackNavigator() {
    const getHeaderTitle = (route: Partial<Route<string>>) => {
        const routeName = getFocusedRouteNameFromRoute(route) ?? 'Goods';
        switch (routeName) {
            case 'Goods':
                return '物品';
            case 'Statistics':
                return '统计';
            case 'Settings':
                return '设置';
        }
    };

    return (
        <Stack.Navigator>
            <Stack.Screen
                name="Home"
                component={require('./TabNavigatorContainer').default}
            />
            <Stack.Screen
                name="Detail"
                component={require('../views/home/Detail').default}
            />
        </Stack.Navigator>
    );
}
