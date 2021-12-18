import React from 'react';
import { FlatList, View, StyleSheet } from 'react-native';
import Card from '../components/Card';
import routes from '../navigation/routes';


const dumys = [
    {
        id:1,
        title: 'Very Comfourtable sofa',
        subTitle: '250',
        image:require("../assets/item1.jpg")
    },
    {
        id:2,
        title: 'Four Single stand chire',
        subTitle: '155',
        image:require("../assets/item2.jpg")
    },
    {
        id:3,
        title: 'Sofa with pillow and Here is full set',
        subTitle: '410',
        image:require("../assets/item3.jpg")
    },
    {
        id:4,
        title: 'Comfortable badsheet',
        subTitle: '290',
        image:require("../assets/item4.jpg")
    },
    {
        id:5,
        title: 'Very nice bed and it gorgious',
        subTitle: '500',
        image:require("../assets/item5.jpg")
    },
    {
        id:6,
        title: 'Simple sofa',
        subTitle: '200',
        image:require("../assets/item6.jpg")
    },
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