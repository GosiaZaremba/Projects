import React, {
    forwardRef,
    useImperativeHandle,
    useRef,
    useState,
} from 'react';
import { TextInput } from 'react-native';
import { styles } from './CustomInput.styles';

export type Props = {
    placeholder: string;
    autoCorrect: boolean;
    spellCheck: boolean;
    textContentType: any;
    autoCapitalize: any;
    secureTextEntry: boolean;
};

export type CustomInputReference = {
    getValue: () => string;
    focus: () => void;
};

export const CustomInputWithReference: React.ForwardRefRenderFunction<
    CustomInputReference,
    Props
> = (
    {
        placeholder,
        autoCorrect,
        spellCheck,
        textContentType,
        autoCapitalize,
        secureTextEntry,
    },
    ref
) => {
    const [value, setValue] = useState<string>('');

    const inputReference = useRef<TextInput>(null);

    const onChangeText = (value: string) => {
        setValue(value);
    };

    useImperativeHandle(ref, () => ({
        getValue: () => {
            return value;
        },
        focus: () => {
            inputReference?.current?.focus();
        },
    }));

    return (
        <TextInput
            style={styles.input}
            placeholder={placeholder}
            autoCorrect={autoCorrect}
            spellCheck={spellCheck}
            textContentType={textContentType}
            autoCapitalize={autoCapitalize}
            value={value}
            onChangeText={onChangeText}
            secureTextEntry={secureTextEntry}
            ref={inputReference}
        />
    );
};

export const CustomInput = forwardRef(CustomInputWithReference);
