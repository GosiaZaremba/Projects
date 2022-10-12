import React from 'react';
import { Image, View } from 'react-native';
import { CustomButton } from '../CustomButton/CustomButton';
import { styles } from './ImagePreview.styles';

export type Props = {
    pickedImage: string;
    getImage: () => void;
};

export const ImagePreview: React.FC<Props> = ({ pickedImage, getImage }) => {
    return (
        <View>
            <Image style={styles.imagePreview} source={{ uri: pickedImage }} />
            <CustomButton
                onPressButton={getImage}
                buttonTitle={'Change the photo'}
            />
        </View>
    );
};
