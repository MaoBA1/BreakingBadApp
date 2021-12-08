import React, { useState, useEffect } from 'react';
import {View, Text, TouchableOpacity, StyleSheet, FlatList, Image, ScrollView} from 'react-native';
import { Switch } from 'react-native-gesture-handler';
import Styles from '../../../Utility/appStyle';



const CharactersScreen = props => {

    const [characters,setCharacters] = useState([]);
    const url = 'https://www.breakingbadapi.com/api/characters';

    const GetDataFromServer = async () =>{
        const response = await fetch(url,
            {
                method: 'GET'
            }
        )
        
        const data = await response.json();
        setCharacters(data);
         console.log('Data:'+JSON.stringify(data));
    };

    useEffect(() => {
        GetDataFromServer();
    },[]);

    const characterStatus = status => {
        switch(status){
            case 'Alive':
                return'#34d90b';
            case 'Unknown':
                return '#eff700';
            case 'Deceased':
                return '#f70000';
            case 'Presumed dead':
                return '#d95a0b';
        }
    }

    return(
        <View style = { Styles.container }>
            
                <FlatList
                    style = { Styles.scrollerStyle }
                    data = { characters }
                    keyExtractor = { item => item.char_id }
                    renderItem = { 
                        charcter =>
                        <View style={{alignItems: 'center'}}> 
                            <TouchableOpacity style={Styles.btnSyle} onPress={() => props.navigation.navigate('CharacterDetails',{charcterDetails:charcter.item})}>
                                <View style={Styles.txtView}>
                                    <Text style={ { fontSize:25, fontFamily: 'AppleSDGothicNeo-Bold'} }>{charcter.item.name},</Text>
                                    <Text style={ { fontSize:20, fontFamily: 'AppleSDGothicNeo-Bold'} }>{charcter.item.nickname},</Text>
                                    <Text style={ { fontSize:15, fontFamily: 'AppleSDGothicNeo-Bold'} }>{charcter.item.occupation}</Text>
                                    {
                                        charcter.item.birthday == 'Unknown' ?
                                        ( 
                                            <Text style={ { fontSize:15, fontFamily: 'AppleSDGothicNeo-Bold'} }>Unknown birthday</Text>
                                        )
                                        :
                                        (
                                            <Text style={ { fontSize:15, fontFamily: 'AppleSDGothicNeo-Bold'} }>{charcter.item.birthday}</Text>
                                        )
                                    }
                                </View>
                                <View style={Styles.imgView}>
                                    <View style = {{backgroundColor:characterStatus(charcter.item.status), width:'7%', height:150, marginLeft:20}}></View>
                                    <Image
                                        style = { { width: 100, height: 150, borderBottomRightRadius:10, borderTopRightRadius:10 } } 
                                        source = { { uri:charcter.item.img } }
                                    />
                                </View>
                            </TouchableOpacity>
                        </View>
                    }
                />
               
        </View>
        
    )

}

export const ScreenOptions = navData =>{

    return{
        
        headerTitle: 'Characters'
        
    }
};

export default CharactersScreen;