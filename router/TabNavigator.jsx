import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/Feather';

const activeColor = '#1e80ff';
const inactiveColor = 'gray';

const Tab = createBottomTabNavigator();

const tabRouterConfigs = [
    {
        name: 'Goods',
        options: {
            tabBarLabel: '物品',
            tabBarIcon: ({color, size}) => (
                <Icon name="box" size={size} color={color} />
            ),
        },
        component: require('../views/home/Goods').default,
    },
    {
        name: 'Statistics',
        options: {
            tabBarLabel: '统计',
            tabBarIcon: ({color, size}) => (
                <Icon name="activity" size={size} color={color} />
            ),
        },
        component: require('../views/home/Statistics').default,
    },
    {
        name: 'Settings',
        options: {
            tabBarLabel: '设置',
            tabBarIcon: ({color, size}) => (
                <Icon name="settings" size={size} color={color} />
            ),
        },
        component: require('../views/home/Settings').default,
    },
];

export default function TabNavigator() {
    const renderScreen = () =>
        tabRouterConfigs.map(item => <Tab.Screen key={item.name} {...item} />);

    return (
        <Tab.Navigator
            initialRouteName="Goods"
            screenOptions={() => ({
                headerShown: false,
                tabBarActiveTintColor: activeColor,
                tabBarInactiveTintColor: inactiveColor,
            })}>
            {renderScreen()}
        </Tab.Navigator>
    );
}
