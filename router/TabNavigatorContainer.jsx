import React, {useLayoutEffect, useState} from 'react';
import {getFocusedRouteNameFromRoute} from '@react-navigation/native';
import TabNavigator from './TabNavigator';
import Icon from 'react-native-vector-icons/Feather';
import UserModal from '../views/modal/UserModal';

export default function TabNavigatorContainer({navigation, route}) {
    const [isVisible, setIsVisible] = useState(false);

    useLayoutEffect(() => {
        navigation.setOptions({
            headerTitle: getHeaderTitle(),
            headerRight: () => <Icon name="more-horizontal" size={25} />,
            headerLeft: () => (
                <Icon
                    name="menu"
                    size={25}
                    onPress={() => setIsVisible(true)}></Icon>
            ),
        });
    }, [route]);

    const getHeaderTitle = () => {
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

    const toggleVisible = () => {
        setIsVisible(pre => !pre);
    };

    return (
        <>
            <TabNavigator />
            <UserModal isVisible={isVisible} toggleVisible={toggleVisible} />
        </>
    );
}
