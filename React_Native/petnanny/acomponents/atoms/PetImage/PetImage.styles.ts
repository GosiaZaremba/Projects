import { StyleSheet } from 'react-native';
import { Colors } from '../../../constants/colors';

export const styles = StyleSheet.create({
    imageContainer: {
        width: 100,
        height: 100,
        borderRadius: 50,
        elevation: 5,
        marginVertical: 5,
        marginHorizontal: 7,
    },
    image: {
        width: 100,
        height: 100,
        borderRadius: 50,
        borderWidth: 1,
        borderColor: Colors.secondary.light,
    },
});
