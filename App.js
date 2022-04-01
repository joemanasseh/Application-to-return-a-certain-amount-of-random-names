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
  FlatList
} from 'react-native';

import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';



const RandomNumber = () => {

  const [number, onNumber] = React.useState(null);
  const [isLoading, setLoading] = useState(true);
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
        onPress={() => Alert.alert('Simple Button pressed')}
      />
    </View>
    </View>
  )

  useEffect(() => {
    fetch('https://raw.githubusercontent.com/adhithiravi/React-Hooks-Examples/master/testAPI.json')
      .then((response) => response.json())
      .then((json) => setData(json))
      .catch((error) => console.error(error))
      .finally(() => setLoading(false));
  }, []);

  return (

    <View style={{ flex: 1, padding: 24 }}>
      {isLoading ? <Text>Loading...</Text> : 
      ( <View style={{ flex: 1, flexDirection: 'column', justifyContent:  'space-between'}}>
          <Text style={{ fontSize: 18, color: 'green', textAlign: 'center'}}>{data.title}</Text>
          <Text style={{ fontSize: 14, color: 'green', textAlign: 'center', paddingBottom: 10}}>Articles:</Text>
          <FlatList
            data={data.articles}
            keyExtractor={({ id }, index) => id}
            renderItem={({ item }) => (
              <Text>{item.id + '. ' + item.title}</Text>
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
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
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
