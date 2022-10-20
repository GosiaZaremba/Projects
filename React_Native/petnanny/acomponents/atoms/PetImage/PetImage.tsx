import React from 'react';
import { Image, View, ImageSourcePropType } from 'react-native';
import { styles } from './PetImage.styles';

export type Props = {
    petImageUrl?: any;
};

export const PetImage: React.FC<Props> = ({ petImageUrl }) => {
    return (
        <View style={styles.imageContainer}>
            <Image style={styles.image} source={{ uri: petImageUrl }} />
        </View>
    );
};
