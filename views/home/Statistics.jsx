import React from 'react';
import {View, Text, Button} from 'react-native';

export default function Detail({navigation}) {
    return (
        <View>
            <Text>Statistics Page</Text>
            <Button
                title="Go to details page"
                onPress={() => navigation.navigate('Detail')}
            />
        </View>
    );
}
