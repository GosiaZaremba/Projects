import React from 'react';
import { Pressable } from 'react-native';
import { Colors } from '../../../constants/colors';
import { styles } from './CardPressable.styles';

export type Props = {
    children: any;
    color: string;
    onPress: () => void;
    onLongPress: () => void;
};

export const CardPressable: React.FC<Props> = ({
    children,
    color,
    onPress,
    onLongPress,
}) => {
    return (
        <Pressable
            style={({ pressed }) =>
                pressed
                    ? [styles.card, styles.pressed, { backgroundColor: color }]
                    : [styles.card, { backgroundColor: color }]
            }
            android_ripple={{ color: Colors.accent.light }}
            onPress={onPress}
            onLongPress={onLongPress}
        >
            {children}
        </Pressable>
    );
};
