import React, { useState } from 'react';
import { FlatList, View } from "react-native";
import ListItems from '../components/ListItems'
import ListItemSeparator from '../components/ListItemSeparator';
import Screen from '../components/Screen';
import SwipeableDelete from '../components/SwipeableDelete'
const initialState = [
    {
        id: 1,
        title: 'T1',
        description: 'D1',
        image: require('../assets/mosh.jpg')
    },
    {
        id: 2,
        title: 'T2',
        description: 'D2',
        image: require('../assets/mosh.jpg')
    },
    {
        id: 3,
        title: 'T3',
        description: 'D3',
        image: require('../assets/mosh.jpg')
    }
]

const MessagesScreen = () => {
    const [messages, setMessages] = useState(initialState)
    const [refreshing, setRefreshing] = useState(false)

    const handleDelete = message => {
        setMessages(messages.filter(m => m.id !== message.id))
    }
    return (
        <Screen>
            <FlatList
                data={messages}
                keyExtractor={message => message.id.toString()}
                renderItem={({ item }) => (<ListItems
                    title={item.title}
                    subtitle={item.description}
                    image={item.image}
                    onPress={() => console.log('message touched', item.title)}
                    renderRightActions={() => <SwipeableDelete onPress={() => handleDelete(item)} />}
                />)}
                ItemSeparatorComponent={ListItemSeparator}
                refreshing={refreshing}
                onRefresh={() => setMessages(initialState)}
            />
        </Screen>
    );
};

export default MessagesScreen;