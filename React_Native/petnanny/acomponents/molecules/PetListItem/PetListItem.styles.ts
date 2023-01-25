import { StyleSheet } from 'react-native';
import { Colors } from '../../../constants/colors';

export const styles = StyleSheet.create({
    innerContainer: {
        backgroundColor: Colors.accent.medium,
        padding: 10,
        borderRadius: 28,
    },
    dataContainer: {
        padding: 5,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-evenly',
    },
    text: {
        fontSize: 40,
        color: Colors.secondary.light,
        margin: 5,
    },
});
