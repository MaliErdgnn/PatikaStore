import { StyleSheet, Dimensions } from "react-native";

export default StyleSheet.create({
    body: {
      backgroundColor: 'white',
      flex: 1,
      padding: 5,
    },
    item_body: {
      backgroundColor: '#d3d3d3',
      borderRadius: 15,
      flex: 1
    },
    image:{
      height: Dimensions.get('window').height/4,
      margin: 10,
      borderRadius: 15,
    },
    title: {
      fontWeight: 'bold',
      color: 'black',
      fontSize: 16,
      paddingLeft: 10,
    },
    price: {
      fontSize: 15,
      paddingLeft: 10,
    },
    inStock: {
      fontWeight: 'bold',
      color: 'red',
      fontSize: 16,
      paddingLeft: 10,
      paddingBottom: 5,
    },
  });