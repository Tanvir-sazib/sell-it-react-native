import React from 'react';
import { StyleSheet, View, FlatList } from 'react-native';
import Icon from '../components/Icon';
import ListItems from '../components/ListItems';
import ListItemSeparator from '../components/ListItemSeparator';
import Screen from '../components/Screen';
import colors from '../config/colors';

const menuItems = [
    {
        title: "My Listings",
        icon: {
            name: 'format-list-bulleted',
            backgroundColor: colors.primary
        }
    },
    {
        title: "My Messages",
        icon: {
            name: 'email',
            backgroundColor: colors.secondary
        }
    }
]

const AccountScreen = () => {

    return (
        <Screen style={styles.screen}>
            <View style={styles.container}>
                <ListItems
                    title="John Breed"
                    subtitle="example@abc.com"
                    image={require('../assets/1-intro-photo-final.jpg')}
                />
            </View>

            <View style={styles.container}>
                <FlatList
                    data={menuItems}
                    keyExtractor={(menuItem) => menuItem.title}
                    ItemSeparatorComponent={ListItemSeparator}
                    renderItem={({ item }) => (
                        <ListItems
                            title={item.title}
                            ImageComponent={
                                <Icon
                                    name={item.icon.name}
                                    backGroundColor={item.icon.backgroundColor}
                                />}

                        />
                    )}

                />

            </View>
            <View style={styles.container}>
                <ListItems
                    title='Log Out'
                    ImageComponent={
                        <Icon
                            name="logout"
                            backGroundColor='#ffe66d'
                        />
                    }
                />
            </View>

        </Screen>
    );
};
const styles = StyleSheet.create({
    container: {
        marginVertical: 20,
        backgroundColor: colors.white
    },
    screen: {
        backgroundColor: colors.light
    }
})
export default AccountScreen;