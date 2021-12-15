import { StatusBar } from 'expo-status-bar';
import React, {useState} from "react";
import { Text, TextInput, Button, View, FlatList, Alert} from 'react-native';
import styles from "../styles/Styles";

export default function FlightInfo() {

    const [text, setText] = useState('');
    const [flightData, setFlightData] = useState([]);

    const getFlightData = () => {
        fetch(`http://api.aviationstack.com/v1/flights?access_key=64777fb4fb7368ee8f340a811f60b839&limit=5`)
        .then(response => response.json())
        .then(responseJson => setFlightData(responseJson.data))
        .catch(error => {
            Alert.alert('Error', error.message);
        });
        console.log(flightData)

    }
    return(
        <View style={styles.background}>
            <View style={styles.background}>
                <Text>Search specific flight details:</Text>
                <TextInput
                    style={styles.textInput}
                    placeholder='flight code'
                    onChangeText={text => setText(text)}
                    value={text}
                    />
                <Button onPress={getFlightData} title="Search"/>
            </View>

        <FlatList
            style={{marginLeft : "5%"}}
            keyExtractor={(item, index) => index.toString()}
            renderItem={({item}) =>

                <Text style={{fontSize: 18, fontWeight: "bold"}}>{item.flight.number}</Text>
            }
            data={flightData}
        />

      
    


    
      <StatusBar style="auto" />
            </View>
           
    );
}