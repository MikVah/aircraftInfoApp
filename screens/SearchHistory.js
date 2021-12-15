import React from "react";
import {StyleSheet, Text, View, FlatList} from 'react-native';
import Styles from "../styles/Styles";

export default function SearchHistory({route}) {
    
    const navigationOptions = {
        title: 'History'
    };

    const { history } = route.params;

    return(
        <View style={Styles.background}>
            <Text style={{fontSize: 20}}>Search History</Text>
            <FlatList
                data={history}
                renderItem={({item}) => <Text style={{fontSize: 16}}>{item.key}</Text>}/>
        </View>
    );
}