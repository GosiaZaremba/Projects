import React from 'react';
import { Text } from 'react-native';
import { styles } from './TextLarge.styles';

export type Props = {
    text: string;
};

export const TextLarge: React.FC<Props> = ({ text }) => {
    return <Text style={styles.text}>{text}</Text>;
};
