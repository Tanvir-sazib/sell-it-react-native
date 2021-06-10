import React from 'react';
import { MaterialCommunityIcons } from '@expo/vector-icons'
import { Image, StyleSheet, TouchableHighlight, View } from 'react-native';
import colors from '../config/colors';
import AppText from './AppText';
import Swipeable from 'react-native-gesture-handler/Swipeable';
import { Colors } from 'react-native/Libraries/NewAppScreen';

const ListItems = ({ image, title, subtitle, onPress, ImageComponent, renderRightActions }) => {
    return (
        <Swipeable renderRightActions={renderRightActions}>
            <TouchableHighlight
                underlayColor={colors.light}
                onPress={onPress}
            >
                <View style={styles.container}>
                    {ImageComponent}
                    {image && <Image style={styles.image} source={image} />}
                    <View style={styles.detailsContainer}>
                        <AppText style={styles.title} numberOfLines={1}>{title}</AppText>
                        {subtitle && <AppText style={styles.subtitle} numberOfLines={2}>{subtitle}</AppText>}
                    </View>
                    <MaterialCommunityIcons
                        name='chevron-right'
                        size={25}
                        color={Colors.medium}
                    />
                </View>
            </TouchableHighlight>
        </Swipeable>
    );
};
const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        padding: 15,
        alignItems: 'center'
    },
    image: {
        width: 80,
        height: 80,
        borderRadius: 40,

    },
    title: {
        fontWeight: '600',
        fontSize: 21
    },
    subtitle: {
        color: colors.medium,

    },
    detailsContainer: {
        marginLeft: 10,
        flex: 1,
        justifyContent: 'center',

    }

})
export default ListItems;