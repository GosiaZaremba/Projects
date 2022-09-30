import React from 'react';
import { ScrollView } from 'react-native';
import { styles } from './Card.styles';

export type Props = {
    children: any;
    color: string;
};

export const Card: React.FC<Props> = ({ children, color }) => {
    return (
        <ScrollView style={[styles.card, { backgroundColor: color }]}>
            {children}
        </ScrollView>
    );
};
