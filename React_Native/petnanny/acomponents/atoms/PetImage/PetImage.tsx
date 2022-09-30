import React from 'react';
import { Image, View, ImageSourcePropType } from 'react-native';
import { styles } from './PetImage.styles';

export type Props = {
    photoUrl: ImageSourcePropType;
};

export const PetImage: React.FC<Props> = ({ photoUrl }) => {
    return (
        <View style={styles.imageContainer}>
            <Image style={styles.image} source={photoUrl} />
        </View>
    );
};
