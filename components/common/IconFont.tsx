import React from 'react';
import {StyleSheet, Text, TextProps} from 'react-native';

interface Props extends TextProps {
    value: string;
    color?: string;
    size?: number;
    isActive?: boolean;
}

const defaultColor = '#000';
const activeColor = '#1e80ff';
const defaultSize = 40;

export default function IconFont({
    value,
    color,
    size = defaultSize,
    isActive,
    style,
    ...res
}: Props) {
    const colorStyle = isActive ? activeColor : color || defaultColor;

    return (
        <Text
            style={[style, styles.common, {color: colorStyle, fontSize: size}]}
            {...res}>
            {value}
        </Text>
    );
}

const styles = StyleSheet.create({
    common: {
        fontFamily: 'iconfont',
        fontWeight: '500',
    },
});
