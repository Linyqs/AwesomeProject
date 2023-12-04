import React from 'react';
import {View, Text} from 'react-native';
import FontAwesome from 'react-native-vector-icons/FontAwesome';

export default function Detail({route}) {
  const {itemId} = route.params;

  return (
    <View>
      <Text>Detail Page, come from home: {itemId}</Text>
      <FontAwesome name={'angle-right'} size={26} />
      <Text style={{fontFamily: 'iconfont', fontSize: 36}}>&#xe699;</Text>
    </View>
  );
}
