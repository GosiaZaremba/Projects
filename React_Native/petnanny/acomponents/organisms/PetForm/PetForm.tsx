import React from 'react';
import { View } from 'react-native';
import { CustomButton, CustomInput } from '../../atoms';
import { AppDatePicker } from '../../molecules';

export type Props = {};

export const PetForm: React.FC<Props> = () => {
    const onPressSubmit = () => {
        console.log('click');
    };
    return (
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
            />
            <AppDatePicker placeholder={'DateOfBirth'} />
            <CustomInput
                placeholder={'Name'}
                autoCorrect={false}
                spellCheck={false}
                textContentType={'name'}
                autoCapitalize={'words'}
                secureTextEntry={false}
                multiline={false}
                maxLength={20}
            />
            <CustomButton
                buttonTitle={'Submit'}
                onPressButton={onPressSubmit}
            />
        </View>
    );
};
