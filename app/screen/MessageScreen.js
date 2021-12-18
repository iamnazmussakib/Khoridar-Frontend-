import React, { useState } from 'react';
import { FlatList, SafeAreaView, View } from 'react-native';
import ListItem from '../components/ListItem';
import ListItemDelete from '../components/ListItemDelete';
import Separetor from '../components/Separetor';

const initialMessage = [
    {
        id:1,
        title: 'Nazmus Sakib',
        desc: 'How are you?',
        image: require("../assets/sakib.png")
    },
    {
        id:2,
        title: 'Nazmus Sakib',
        desc: 'How are you?',
        image: require("../assets/sakib.png")
    },
    {
        id:3,
        title: 'Nazmus Sakib',
        desc: 'How are you?',
        image: require("../assets/sakib.png")
    }
]

function MessageScreen(props) {
    const [message, setMessage] = useState(initialMessage);
    const [refresh, setRefresh] = useState(false);
    const handleDelete = (item) => {
        setMessage(message.filter(m=>m.id !== item.id))
    }
    return (
        <FlatList 
            data={message}
            keyExtractor={message => message.id.toString() }
            renderItem={({item}) => <ListItem 
                title={item.title}
                desc={item.desc}
                image={item.image}
                onPress={() => console.log('selected')}
                renderRightActions={() => <ListItemDelete onPress={() => handleDelete(item)}/>}
            />}
            ItemSeparatorComponent={Separetor}
            refreshing={refresh}
            onRefresh={() => {
                
            }}
        />
    );
}

export default MessageScreen;