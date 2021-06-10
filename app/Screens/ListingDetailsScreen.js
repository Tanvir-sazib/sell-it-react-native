import React from 'react';
import { Image, StyleSheet, View } from 'react-native';
import AppText from '../components/AppText';
import ListItems from '../components/ListItems';
import colors from '../config/colors';

const ListingDetailsScreen = () => {
    return (
        <View style={styles.container}>
            <Image
                style={styles.image}
                source={require('../assets/jacket.jpg')}
            />
            <View style={styles.detailsContainer}>
                <AppText style={styles.title}>Red jacket for sale</AppText>
                <AppText style={styles.price}>$100</AppText>
                <View style={styles.userContainer}>
                    <ListItems
                        image={require('../assets/mosh.jpg')}
                        title='John Denver'
                        subtitle='6 Listings'
                    />
                </View>
            </View>
        </View>
    );
};
const styles = StyleSheet.create({
    container: {

    },
    detailsContainer: {
        padding: 15,
    },
    image: {
        width: '100%',
        height: 300
    },
    title: {
        fontSize: 25,
        fontWeight: '500'
    },
    price: {
        color: colors.secondary,
        fontWeight: 'bold',
        marginVertical: 10
    },
    userContainer: {
        marginVertical: 40
    }
})

export default ListingDetailsScreen;