import React from 'react';
import { View } from 'react-native';
import { styles } from './Card.styles';

export type Props = {
    children: any;
    color: string;
};

export const Card: React.FC<Props> = ({ children, color }) => {
    return (
        <View style={[styles.card, { backgroundColor: color }]}>
            {children}
        </View>
    );
};
