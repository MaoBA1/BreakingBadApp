import React, { useState, useEffect } from 'react';
import {View, Text, TouchableOpacity, StyleSheet, FlatList, Image} from 'react-native';
import Styles from '../../../Utility/appStyle';


const QuotesScreen = props => {

    const [quotes,setQuotes] = useState([]);
    const url = 'https://www.breakingbadapi.com/api/quotes';

    const GetDataFromServer = async () =>{
        const response = await fetch(url,
            {
                method: 'GET'
            }
        )
        
        const data = await response.json();
        setQuotes(data);
        console.log('Data:'+JSON.stringify(data));

    };

    useEffect(() => {
        GetDataFromServer();
    },[]);

    return(
        <View style={Styles.container}>
            <FlatList
                style = { Styles.scrollerStyle }
                data = { quotes }
                keyExtractor = { item => item.quote_id }
                renderItem = { 
                    quote => 
                    <View style={{alignItems: 'center'}}>
                        <View style={Styles.btnSyleEpisodesQuotes} >
                            <View style={{width:'100%', marginBottom:10}}>
                                <Text style={ { fontSize:18, fontFamily: 'AppleSDGothicNeo-Bold', fontWeight: 'bold', color:'#fff'} }>{quote.item.quote}</Text>
                            </View>
                            <View style={{flexDirection:'column'}}>
                                <Text style={ { fontSize:15, fontFamily: 'AppleSDGothicNeo-Bold', fontWeight: 'bold', color:'#807d75', width:'100%', marginBottom:10} }>{quote.item.author}</Text>
                                <Text style={ { fontSize:15, fontFamily: 'AppleSDGothicNeo-Bold', fontWeight: 'bold', color:'#807d75', width:'100%'} }>{quote.item.series}</Text>
                            </View>
                        </View>
                    </View>
                }
            />
        </View>
    )

}

export const ScreenOptions = navData =>{

    return{
        headerTitle: 'Quotes'
    }
};

export default QuotesScreen;