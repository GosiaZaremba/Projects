import React from 'react';
import { Text } from 'react-native';
import { styles } from './TextSmall.styles';

export type Props = {
    text: string;
};

export const TextSmall: React.FC<Props> = ({ text }) => {
    return <Text style={styles.text}>{text}</Text>;
};
