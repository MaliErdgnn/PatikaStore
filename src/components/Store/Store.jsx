import React from 'react';
import {View, Text, FlatList, Image} from 'react-native';
import product_data from '../../patika_data.json';
import styles from './Store_style';

const Store = () => {
    return(
        <FlatList
    numColumns={2}
    data = {product_data}
    renderItem = {({item}) => <View style = {styles.body}>
      <View style = {styles.item_body}>
        <Image source = {{uri: item.imgURL}}  style = {styles.image} resizeMode = {'contain'} />
        <Text style = {styles.title}>{item.title}</Text>
        <Text style = {styles.price}>{item.price}</Text>
        <Text style = {styles.inStock}>{item.inStock == false ? 'STOKTA YOK' : null}</Text>
      </View>
    </View>}
    keyExtractor = {item => item.id}
    />
    );
}
export default Store;