import React, {
    useState,
    useRef,
    useImperativeHandle,
    forwardRef,
} from 'react';
import { View, Alert } from 'react-native';
import ImageCropPicker from 'react-native-image-crop-picker';
import { CustomButton, ImagePreview } from '../../atoms';

export type Props = {};

export type AppImagePickerReference = {
    getValue: () => string;
    focus: () => void;
};

export const AppImagePickerWithRef: React.ForwardRefRenderFunction<
    AppImagePickerReference,
    Props
> = ({}, ref) => {
    const [pickedImageUri, setPickedImageUri] = useState<string>('');
    const appImagePickerReference = React.createRef();

    useImperativeHandle(ref, () => ({
        getValue: () => {
            return pickedImageUri;
        },
        focus: () => {
            // pickedImageUri?.current?.focus();
        },
    }));
    const getImage = () => {
        ImageCropPicker.openPicker({
            width: 150,
            height: 150,
            cropping: true,
            ref: appImagePickerReference,
        })
            .then((image) => {
                setPickedImageUri(image.path);
                console.log(image.path);
                console.log(typeof image.path);
            })
            .catch((error) => {
                if (error.code === 'E_PICKER_CANCELLED')
                    Alert.alert(
                        `You did't pick any photo.`,
                        'Please, try again.'
                    );
            });
    };

    // console.log(appImagePickerReference);
    return (
        <View>
            {pickedImageUri ? (
                <ImagePreview
                    pickedImage={pickedImageUri}
                    getImage={getImage}
                />
            ) : (
                <CustomButton
                    onPressButton={getImage}
                    buttonTitle={'Add a photo'}
                />
            )}
        </View>
    );
};

export const AppImagePicker = forwardRef(AppImagePickerWithRef);
