import React from 'react';
import { Text } from 'react-native';
import { styles } from './TextMedium.styles';

export type Props = {
    text: string;
};

export const TextMedium: React.FC<Props> = ({ text }) => {
    return <Text style={styles.text}>{text}</Text>;
};
