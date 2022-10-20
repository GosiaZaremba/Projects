import React from 'react';
import { View } from 'react-native';
import { CustomButton, ImagePreview } from '../../atoms';

export type Props = {
    getImage: () => void;
    pickedImage: string;
};

export const AppImagePicker: React.FC<Props> = ({ getImage, pickedImage }) => {
    return (
        <View>
            {pickedImage ? (
                <ImagePreview pickedImage={pickedImage} getImage={getImage} />
            ) : (
                <CustomButton
                    onPressButton={getImage}
                    buttonTitle={'Add a photo'}
                />
            )}
        </View>
    );
};
