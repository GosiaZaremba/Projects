import React from 'react';
import Icon from 'react-native-vector-icons/FontAwesome';

export type Props = {
    onPressIcon: () => void;
    iconColor: string;
    iconName: string;
    iconSize: number;
    iconBorderColor: string;
};

export const CustomIcon: React.FC<Props> = ({
    iconColor,
    iconName,
    iconSize,
}) => {
    return (
        <Icon
            name={iconName}
            style={{ fontSize: iconSize }}
            color={iconColor}
        />
    );
};
