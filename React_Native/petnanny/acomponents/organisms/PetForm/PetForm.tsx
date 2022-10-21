import { getVersion } from 'jest';
import React, { useRef } from 'react';
import { View } from 'react-native';
import { CustomButton, CustomInput, CustomInputReference } from '../../atoms';
import {
    AppDatePicker,
    AppDatePickerReference,
    AppImagePicker,
    AppImagePickerReference,
} from '../../molecules';

export type Props = {};

export const PetForm: React.FC<Props> = () => {
    const nameInputReference = useRef<CustomInputReference>(null);
    const breedInputReference = useRef<CustomInputReference>(null);
    const descriptionInputReference = useRef<CustomInputReference>(null);
    const dateInputReference = useRef<AppDatePickerReference>(null);
    const imageInputReference = useRef<AppImagePickerReference>(null);

    const onPressSubmit = () => {
        const nameValue = nameInputReference.current?.getValue() || '';
        const breedValue = breedInputReference.current?.getValue() || '';
        const dateValue = dateInputReference.current?.getValue() || '';
        const descriptionValue =
            descriptionInputReference.current?.getValue() || '';
        const imageValue = imageInputReference.current?.getValue() || '';
        // console.log('nameValue', nameValue);
        // console.log('breedValue', breedValue);
        // console.log('dateValue', dateValue);
        // console.log('descriptionValue', descriptionValue);
        // console.log('imageValue', imageValue);
    };
    return (
        <View>
            <AppImagePicker ref={imageInputReference} />
            <View>
                <CustomInput
                    placeholder={'Name'}
                    autoCorrect={false}
                    spellCheck={false}
                    textContentType={'name'}
                    autoCapitalize={'words'}
                    secureTextEntry={false}
                    multiline={false}
                    maxLength={20}
                    ref={nameInputReference}
                />
                <CustomInput
                    placeholder={'Breed'}
                    autoCorrect={false}
                    spellCheck={false}
                    textContentType={'breed'}
                    autoCapitalize={'words'}
                    secureTextEntry={false}
                    multiline={false}
                    maxLength={20}
                    ref={breedInputReference}
                />
                <AppDatePicker
                    placeholder={'DateOfBirth'}
                    ref={dateInputReference}
                />
                <CustomInput
                    placeholder={'Description'}
                    autoCorrect={false}
                    spellCheck={false}
                    textContentType={'name'}
                    autoCapitalize={'words'}
                    secureTextEntry={false}
                    multiline={true}
                    maxLength={140}
                    ref={dateInputReference}
                />
                <CustomButton
                    buttonTitle={'Submit'}
                    onPressButton={onPressSubmit}
                />
            </View>
        </View>
    );
};
