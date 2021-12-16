import React, { useEffect, useState } from 'react';
import { Text, View, Button, TextInput, Alert } from 'react-native';
import styles from '../styles/Styles';

export default function Home(props) {

  const [text, setText] = useState('');
  const [aircraftData, setAircraftData] = useState([]);
  
  const [history, setHistory] = useState([]);


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
      
      setHistory([...history, responseJson.reg]);

    })
    .catch(error => {
      Alert.alert('Error', error.message);
    });
    console.log(aircraftData)
    console.log(history)
  };
 
  const { navigate } = props.navigation;

  return (
    <View style={{flex: 1, backgroundColor: '#afd8f2', alignItems: 'center', justifyContent: 'center'}}>

      <View style={{flex: 1, backgroundColor: '#afd8f2', alignItems: 'center', paddingTop: 30}}>
        <Text style={{fontSize: 80, fontStyle: 'italic', fontWeight: 'bold'}}>Aircraft Info</Text>
        <Text style={{fontSize: 18}}>Search for a specific aircraft using their registration code: </Text>
      </View>

      <View style={{flex: 1, backgroundColor: '#afd8f2', alignItems: 'center', paddingTop: 20}}>
        <TextInput
          style={styles.textInput}
          placeholder='Registration number'
          onChangeText={text => setText(text)}
          value={text}
        />
        <View>
          <Button onPress={getAircraftData} title='Search' style={{}}/>
          <Button onPress={() => navigate('History', {history: history})} title='Search history' color={'green'}/>
        </View>
      </View>

      <View style={{flex: 4, backgroundColor: '#afd8f2', justifyContent: 'flex-start', textAlign: 'left', marginTop: 20}}>
        <Text style={{fontSize: 24, paddingBottom: 20}}>{`Search results for registration code: ${aircraftData.reg}`}</Text>
        <Text style={styles.listText}>{`Type:                          ${aircraftData.typeName}`}</Text>
        <Text style={styles.listText}>{`Airline:                       ${aircraftData.airlineName}`}</Text>
        <Text style={styles.listText}>{`Age (years):              ${aircraftData.ageYears}`}</Text>
        <Text style={styles.listText}>{`In service:                 ${aircraftData.active}`}</Text>
        <Text style={styles.listText}>{`Freightplane:           ${aircraftData.isFreighter}`}</Text>
        <Text style={styles.listText}>{`Number of seats:    ${aircraftData.numSeats}`}</Text>
        <Text style={styles.listText}>{`Engine type:             ${aircraftData.engineType}`}</Text>

      </View>
    </View>
    
  );
}


