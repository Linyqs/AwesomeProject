import React from 'react';
import {View, Text, Button} from 'react-native';

export default function Home({navigation}) {
  const handlePress = () =>
    navigation.navigate('Detail', {
      itemId: 1,
    });

  return (
    <View>
      <Text>Home Page</Text>
      <Button title="Go to detail page" onPress={handlePress} />
    </View>
  );
}
