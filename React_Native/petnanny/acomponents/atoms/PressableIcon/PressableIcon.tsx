import React from 'react';
import { Pressable } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import styles from './PressableIcon.styles';

export type Props = {
    onPressIcon: () => void;
    iconColor: string;
    iconName: string;
    iconSize: number;
    iconBorderColor: string;
};

export const PressableIcon: React.FC<Props> = ({
    onPressIcon,
    iconColor,
    iconName,
    iconSize,
    iconBorderColor,
}) => {
    return (
        <Pressable
            onPress={onPressIcon}
            hitSlop={5}
            style={({ pressed }) =>
                pressed
                    ? [styles.pressed, { borderColor: iconBorderColor }]
                    : [styles.pressable, { borderColor: iconBorderColor }]
            }
        >
            <Icon
                name={iconName}
                style={{ fontSize: iconSize }}
                color={iconColor}
            ></Icon>
        </Pressable>
    );
};
