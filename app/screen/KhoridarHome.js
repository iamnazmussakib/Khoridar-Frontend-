import React from 'react';
import { FlatList, View, StyleSheet } from 'react-native';
import Card from '../components/Card';
import routes from '../navigation/routes';


const dumys = [
    {
        id:1,
        title: 'Title-1',
        subTitle: '100',
        image:require("../assets/abc.jpg")
    },
    {
        id:2,
        title: 'Title-1',
        subTitle: '100',
        image:require("../assets/abc.jpg")
    }
]

function KhoridarHome({navigation}) {
    return (
        <View style={styles.container}>
            <FlatList 
                data={dumys}
                keyExtractor={dumy => dumy.id.toString()}
                renderItem={({item}) => 
                    <View style={styles.card}>
                        <Card 
                            title={item.title}
                            subTitle={'$'+item.subTitle}
                            image={item.image}
                            onPress={() => navigation.navigate(routes.LISTING_DETAILS, item)}
                        />
                    </View>
                }
            />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        padding: 25,
        backgroundColor: '#f5f2f0',
        flex: 1
    },
    card: {
       marginBottom: 20 
    }
})

export default KhoridarHome;