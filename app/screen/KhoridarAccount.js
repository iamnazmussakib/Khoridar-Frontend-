import React from 'react';
import { View, StyleSheet, FlatList } from 'react-native';

import Icon from '../components/Icon';
import ListItem from '../components/ListItem';
import Separetor from '../components/Separetor';
import colors from '../config/colors';
import routes from "../navigation/routes";

const lists = [
    {
        id: 1,
        title: 'Account Info',
        icon:{
            name: 'format-list-bulleted',
            size: 45,
            backgroundColor: colors.primary
        }
    },
    {
        id: 2,
        title: 'My Messages',
        icon:{
            name: 'email',
            size: 45,
            backgroundColor: colors.secondary
        },
        targetScreen: routes.MESSAGES,
    }
]

function KhoridarAccount({navigation}) {
    return (
        <View style={styles.container}>
            <View style={styles.subContainer}>
                <ListItem 
                    title="Nazmus Sakib"
                    desc="nazmussakibppp22@gmail.com"
                    image={require('../assets/sakib.png')}
                />
            </View>
            <View style={styles.subContainer}>
                <FlatList 
                    data={lists}
                    keyExtractor={list => list.id.toString()}
                    renderItem={({item}) => 
                        <ListItem 
                            title={item.title}
                            IconComponent={<Icon 
                                iconName={item.icon.name} 
                                size={item.icon.size}
                                backgroundColor={item.icon.backgroundColor}
                            />}
                            onPress={() => navigation.navigate(item.targetScreen)}
                        />
                    }
                    ItemSeparatorComponent={Separetor}
                />
            </View>
            <View style={styles.subContainer}>
                <ListItem 
                    title="LogOut"
                    IconComponent={
                        <Icon
                            iconName="logout"
                            size={45}
                            backgroundColor='#ffe66d'
                        />
                    }
                />
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: colors.bgLight,
        flex: 1
    },
    subContainer: {
        backgroundColor: '#fff',
        marginVertical: 20
    }
})

export default KhoridarAccount;