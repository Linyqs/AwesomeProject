import React, {Component} from 'react';
import Modal from 'react-native-modal';
import {StyleSheet, Dimensions, Text, View} from 'react-native';
import UserCenter from '../modal/UserCenter';

const {width} = Dimensions.get('window');

export default function UserModal({isVisible, toggleVisible, navigation}) {
    return (
        <Modal
            isVisible={isVisible}
            animationIn="slideInLeft"
            animationOut="slideOutLeft"
            swipeDirection="left"
            onBackdropPress={toggleVisible}
            onSwipeComplete={toggleVisible}
            useNativeDriver
            hideModalContentWhileAnimating
            propagateSwipe
            style={styles.sideMenuStyle}>
            <UserCenter />
        </Modal>
    );
}

const styles = StyleSheet.create({
    sideMenuStyle: {
        width: width * 0.7,
        margin: 0,
        backgroundColor: '#fff',
    },
});
