import { StatusBar } from 'expo-status-bar';
import React, { useEffect, useState } from 'react';
import { Text, View, Button, TextInput, FlatList, Alert, ListItem } from 'react-native';
import styles from '../styles/Styles';
import axios from 'axios';

export default function Home() {

  const [text, setText] = useState('');
  const [aircraftData, setAircraftData] = useState([]);
  
  const [reg, setReg] = useState('');
  const [seating, setSeating] = useState('');
  const [age, setAge] = useState('');
  const [airline, setAirline] = useState('');
  const [type, setType] = useState('');
  const [isActive, setIsActive] = useState(false);
  const [engine, setEngine] = useState('');
  const [isFreighter, setIsFreighter] = useState(false);

  const [status, setStatus] = useState('');


  const getAircraftData = () => {
    fetch(`https://aerodatabox.p.rapidapi.com/aircrafts/reg/${text}`, {
      method: 'GET',
      headers: {
        'x-rapidapi-host': 'aerodatabox.p.rapidapi.com',
        'x-rapidapi-key': 'bf3acc1802msha7b90082be5634fp12d132jsn202db9c4aeb2'
      }
    })
    .then(response => response.json())
    .then(responseJson => {
      setAircraftData(responseJson);
      setReg(responseJson.reg);
      setSeating(responseJson.numSeats);
      setAge(responseJson.ageYears);
      setAirline(responseJson.airlineName);
      setType(responseJson.typeName);
      setEngine(responseJson.engineType);
      setIsActive(responseJson.active);
      setIsFreighter(responseJson.isFreighter);

    })
    .catch(error => {
      Alert.alert('Error', error.message);
    });
    console.log(aircraftData.numSeats)
  };
 

  const testArray = () => {
    if (Array.isArray(aircraftData)) {
      console.log('Is array')
    } else {
      console.log('it don work')
    }
  }




  return (
    <View style={{flex: 1, backgroundColor: '#afd8f2', alignItems: 'center', justifyContent: 'center'}}>
      <View style={{flex: 1, backgroundColor: '#afd8f2', alignItems: 'center', paddingTop: 50}}>
        <Text style={{fontSize: 50}}>Aircraft Info</Text>
        <Text>Search specific aircraft using their registration codes: </Text>
      </View>

      <View style={{flex: 1, backgroundColor: '#afd8f2', alignItems: 'center'}}>
        <TextInput
          style={styles.textInput}
          placeholder='Registration'
          onChangeText={text => setText(text)}
          value={text}
        />
        <Button onPress={getAircraftData} title='Search'/>

      </View>

      <View style={{flex: 4, backgroundColor: '#afd8f2', justifyContent: 'flex-start', textAlign: 'left'}}>
        <Text style={{fontSize: 24, paddingBottom: 20}}>{`Search results for registration code: ${reg}`}</Text>
        <Text style={styles.listText}>{`Type:                          ${type}`}</Text>
        <Text style={styles.listText}>{`Airline:                       ${airline}`}</Text>
        <Text style={styles.listText}>{`Age (years):              ${age}`}</Text>
        <Text style={styles.listText}>{`In service:                 ${isActive}`}</Text>
        <Text style={styles.listText}>{`Freightplane:           ${isFreighter}`}</Text>
        <Text style={styles.listText}>{`Number of seats:    ${seating}`}</Text>
        <Text style={styles.listText}>{`Engine type:            ${engine}`}</Text>
        
      </View>
    </View>
    
  );
}


