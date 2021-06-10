import React from 'react';
import { FlatList, StyleSheet } from 'react-native';
import Card from '../components/Card';
import ListItems from '../components/ListItems';
import Screen from '../components/Screen';
import colors from '../config/colors';


const lsitings = [
    {
        id: 1,
        title: 'Red Jacket For Sale',
        price: 100,
        image: require('../assets/jacket.jpg')
    },
    {
        id: 2,
        title: 'Couch in great condition',
        price: 1000,
        image: require('../assets/couch.jpg')
    },
    // {
    //     id: 3,
    //     title: 'Hard chair in a lower price',
    //     price: 50,
    //     image: require('../assets/chair.jpg')
    // },
]
const ListingsScreen = () => {
    return (
        <Screen style={styles.screen}>
            <FlatList
                data={lsitings}
                keyExtractor={listing => listing.id.toString()}
                renderItem={({ item }) => (
                    <Card
                        title={item.title}
                        subtitle={'$ ' + item.price}
                        image={item.image}
                    />
                )}
            />

        </Screen>
    );
};
const styles = StyleSheet.create({
    screen: {
        padding: 20,
        backgroundColor: colors.light
    }
})

export default ListingsScreen;