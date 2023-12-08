import React from 'react';
import {View, Text, Button} from 'react-native';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import IconFont from '../../components/common/IconFont';
export default function Detail() {
    return (
        <View>
            <Text>Detail Page</Text>
            <FontAwesome name={'angle-right'} size={26} />
            <IconFont value="&#xe699;" isActive />
            <IconFont value="&#xe6a0;" />
        </View>
    );
}
