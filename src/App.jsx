import React from 'react';
import {PropsWithChildren} from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
  FlatList,
  Image,
  TextInput,
  Dimensions,
} from 'react-native';

import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';
import Store from './components/Store'

const App = () => {

  return(
    <SafeAreaView style = {styless.container}>
      <Text style = {styless.header} >PATIKASTORE</Text>
      <TextInput placeholder='Ara...' onChangeText={()=>{}} style = {styless.Input}/>
      <Store/>
  </SafeAreaView>
  );
};

const styless = StyleSheet.create({
  container: {
    flex: 1,
    padding: 5,
  },
  header:{
    fontWeight: 'bold',
    color: 'purple',
    fontSize: 30,
    paddingLeft:5,
  },
  Input: {
    borderRadius: 15,
    //borderWidth: 2,
    backgroundColor: '#d3d3d3',
    paddingLeft: 15,
    marginHorizontal: 5,
  }
});

export default App;