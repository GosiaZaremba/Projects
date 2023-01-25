import { StyleSheet } from 'react-native';
import { Colors } from '../../../constants/colors';

export const styles = StyleSheet.create({
    innerContainer: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: Colors.primary.medium,
        borderRadius: 15,
        overflow: 'hidden',
        elevation: 7,
        padding: 12,
        margin: 5,
    },
    buttonImage: {
        height: 50,
        width: 60,
    },
});
