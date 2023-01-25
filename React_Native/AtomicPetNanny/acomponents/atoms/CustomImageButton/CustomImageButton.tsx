import React from 'react';
import { Image, ImageSourcePropType, Pressable } from 'react-native';
import { Colors } from '../../../constants/colors';
import { styles } from './CustomImageButton.styles';

export type Props = {
    onPress: () => void;
    buttonImage: ImageSourcePropType;
};

export const CustomImageButton: React.FC<Props> = ({
    buttonImage,
    onPress,
}) => {
    return (
        <Pressable
            style={styles.innerContainer}
            android_ripple={{ color: Colors.primary.light }}
            onPress={onPress}
        >
            <Image
                source={buttonImage}
                style={styles.buttonImage}
                resizeMode="contain"
            />
        </Pressable>
    );
};
