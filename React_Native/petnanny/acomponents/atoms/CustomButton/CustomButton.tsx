import React from 'react';
import { Pressable, Text, View } from 'react-native';
import { Colors } from '../../../constants/colors';
import { styles } from './CustomButton.styles';

export type Props = {
    onPress: () => void;
    buttonTitle: string;
};

export const CustomButton: React.FC<Props> = ({ buttonTitle, onPress }) => {
    return (
        <View style={styles.buttonOuterContainer}>
            <Pressable
                style={({ pressed }) =>
                    pressed
                        ? [styles.buttonInnerContainer, styles.pressed]
                        : styles.buttonInnerContainer
                }
                android_ripple={{ color: Colors.primary.light }}
                onPress={onPress}
            >
                <Text style={styles.buttonText}>{buttonTitle}</Text>
            </Pressable>
        </View>
    );
};
