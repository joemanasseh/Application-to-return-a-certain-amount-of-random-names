/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */


import React, { useEffect, useState, Component } from 'react';
import type {Node} from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
  TextInput,
  Button,
  Alert,
  ActivityIndicator, 
  FlatList,
  TouchableOpacity,
} from 'react-native';

import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';



function RandomNumber()  {

  const [number, onNumber] = React.useState(null);
  const [data, setData] = useState([]);

  return (
    <View style={styles.sectionContainer}>
      <Text style={styles.sectionTitle}>Application to return a certain amount of random names</Text>
      <TextInput
        style={styles.textItem}
        placeholder="Enter a Number"
        onChangeText={onNumber}
        value={number}
        keyboardType="numeric"
      />
      <View style={styles.sendItem}>
      <Button
        title="Send Value"
        color="#00008b"
       onClick={() => getApi()}>

        </Button>
      
    </View>
    </View>
  )
}

function getApi() {

  const [isLoading, setLoading] = useState(true);
  const [data, setData] = useState([]);
  console.log(data);
  
    useEffect(() => {
      fetch('https://randomuser.me/api/?results=100&inc=name')
        .then((response) => response.json())
        .then((json) => setData(json))
        .catch((error) => console.error(error))
        .finally(() => setLoading(false));
    }, []);
  
    return (
  
      <View style={{ flex: 1, padding: 24 }}>
        {isLoading ? <Text>Loading...</Text> : 
        ( <View style={{ flex: 1, flexDirection: 'column', justifyContent:  'space-between'}}>
            <Text style={{ fontSize: 14, color: 'green', textAlign: 'center', paddingBottom: 10}}>Random Users</Text>
            <FlatList
              data={data.results}
              keyExtractor={({ name }) => name}
              renderItem={({ item }) => (
                <Text>{item.title + '. ' + item.first}</Text>
              )}
            />
          </View>
        )}
      </View>
    );
  
};


const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 200,
    paddingHorizontal: 24,
    flex : 1,
    alignItems: "center"
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
    flexWrap: 'wrap',
    flexDirection: 'row',
    justifyContent: 'center',
    marginBottom: 20
  },
  textItem: {
    fontWeight: '700',
    width: '100%',
    height: 50,
    borderColor: '#00008b',
    borderWidth:3,
    borderRadius: 5
  },
  sendItem: {
    padding: 15,
    width: '60%',
    marginTop: 15,
    height: 70
  },
});

export default RandomNumber;
