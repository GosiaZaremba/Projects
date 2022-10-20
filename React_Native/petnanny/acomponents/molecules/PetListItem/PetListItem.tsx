import React from 'react';
import { View } from 'react-native';
import { CardPressable, PetImage, TextSmall } from '../../atoms';
import { styles } from './PetListItem.styles';
import { Colors } from '../../../constants/colors';

export type Props = {
    onPress: () => void;
    onLongPress: () => void;
    petName: string;
    petImageUrl: any;
};

export const PetListItem: React.FC<Props> = ({
    onPress,
    petName,
    petImageUrl,
    onLongPress,
}) => {
    return (
        <CardPressable
            color={Colors.accent.light}
            onPress={onPress}
            onLongPress={onLongPress}
        >
            <View style={styles.dataContainer}>
                <PetImage petImageUrl={petImageUrl} />
                <TextSmall text={petName} />
            </View>
        </CardPressable>
    );
};
