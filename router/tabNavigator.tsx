import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/Feather';
import Goods from '../views/home/Goods';
import Detail from '../views/home/Detail';
import Settings from '../views/home/Settings';

const Tab = createBottomTabNavigator();

const routerConfigs = [
    {key: 0, name: 'Goods', options: {title: '物品'}, component: Goods},
    {key: 1, name: 'Detail', options: {title: '统计'}, component: Detail},
    {key: 2, name: 'Settings', options: {title: '设置'}, component: Settings},
    // {key: 3, name: 'Home', options: {title: '设置'}, component: Home},
];

const activeColor = '#1e80ff';

export default function TabNavigator() {
    const renderScreen = () =>
        routerConfigs.map(item => <Tab.Screen {...item} />);

    const renderTabBarIcon = ({
        name,
        focused,
    }: {
        name: string;
        focused: boolean;
    }) => {
        const tabIconMap: any = {
            Goods: 'box',
            Detail: 'activity',
            Settings: 'settings',
        };
        const sourceImgValue = tabIconMap[name];
        if (!sourceImgValue) {
            return null;
        }
        const color = focused ? activeColor : 'gray';
        return <Icon name={sourceImgValue} size={23} color={color} id={name} />;
    };

    return (
        <Tab.Navigator
            initialRouteName="Goods"
            screenOptions={({route}) => ({
                tabBarIcon: ({focused}) => {
                    return renderTabBarIcon({name: route.name, focused});
                },
                tabBarActiveTintColor: activeColor,
                tabBarInactiveTintColor: 'gray',
            })}>
            {renderScreen()}
        </Tab.Navigator>
    );
}
