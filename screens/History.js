import React from "react";
import {StyleSheet, Text, View, FlatList} from 'react-native';
import styles from "../styles/Styles";

export default function History({ route }) {
    const navigationOptions = {
        title: 'History',
    };

    const { history } = route.params;
    

    return(
        <View style={{backgroundColor: '#afd8f2'}}>
            <Text style={{fontSize: 20}}>Search History</Text>
            <FlatList
                data={history}
                keyExtractor={(item, index) => index.toString()}
                renderItem={({ item }) => 
                <Text style={{fontSize: 18}}>{item.key}</Text>}/>
        </View>
    );
}