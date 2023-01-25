import moment from 'moment';
import React, {
    useState,
    useRef,
    forwardRef,
    useImperativeHandle,
} from 'react';
import { TextInput, View } from 'react-native';
import DatePicker from 'react-native-date-picker';
import { styles } from './AppDatePicker.styles';

export type Props = {
    placeholder: string;
};

export type AppDatePickerReference = {
    getValue: () => string;
    focus: () => void;
};

export const AppDatePickerWithReference: React.ForwardRefRenderFunction<
    AppDatePickerReference,
    Props
> = (props, ref) => {
    const [date, setDate] = useState<Date>(new Date());
    const [open, setOpen] = useState<boolean>(false);

    const dateReference = useRef<TextInput>(null);

    useImperativeHandle(ref, () => ({
        getValue: () => {
            return moment(date).format('MMMM Do YYYY');
        },
        focus: () => {
            dateReference?.current?.focus();
        },
    }));

    const handleConfirm = (date: any) => {
        setOpen(false);
        setDate(date);
        console.log(date);
    };

    return (
        <View>
            <DatePicker
                modal
                open={open}
                date={date}
                mode={'date'}
                onConfirm={(date) => {
                    handleConfirm(date);
                }}
                onCancel={() => {
                    setOpen(false);
                }}
            />
            <TextInput
                placeholder={props.placeholder}
                autoCorrect={false}
                spellCheck={false}
                autoCapitalize={'none'}
                secureTextEntry={false}
                multiline={false}
                ref={dateReference}
                onPressIn={() => setOpen(true)}
                value={moment(date).format('MMMM Do YYYY')}
                style={styles.input}
            />
        </View>
    );
};

export const AppDatePicker = forwardRef(AppDatePickerWithReference);
