import React, { useState, useEffect } from 'react';
import {View, Text, TouchableOpacity, StyleSheet, FlatList, Image, ScrollView} from 'react-native';
import Styles from '../../../Utility/appStyle';


const CharacterDetailsScreen = props => {
    console.log('Data:'+JSON.stringify(props.route.params.charcterDetails));
    const char = props.route.params.charcterDetails

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

    const charAppearance = app => {
        let fullAppearance  = '';
        [...app].forEach(element => {
           fullAppearance += element + ' '; 
        });
        return fullAppearance;
    }

    return(
        <View style={Styles.charPageContainer}>
            <View style={{width: '100%',flexDirection:'row'}}>
                <View style={{width:'50%', marginLeft:30,marginTop:30}}>
                        <Text style={ { fontSize:30, fontFamily: 'AppleSDGothicNeo-Bold', fontWeight: 'bold', color:'#dedad7'} }>{char.name}</Text>
                        <Text style={ { fontSize:30, fontFamily: 'AppleSDGothicNeo-Bold', fontWeight: 'bold', color:'#dedad7', marginBottom:30} }>{char.nickname}</Text> 
                        <Text style={ { fontSize:20, fontFamily: 'AppleSDGothicNeo-Bold', fontWeight: 'bold', color:'#dedad7'} }>Occupation: {'\n'+char.occupation}</Text>
                        <Text style={ { fontSize:20, fontFamily: 'AppleSDGothicNeo-Bold', fontWeight: 'bold', color:'#dedad7'} }>BirthDay: {char.birthday}</Text>
                        <Text style={ { fontSize:20, fontFamily: 'AppleSDGothicNeo-Bold', fontWeight: 'bold', color:characterStatus(char.status) } }>Status: {char.status}</Text>
                        <Text style={ { fontSize:20, fontFamily: 'AppleSDGothicNeo-Bold', fontWeight: 'bold', color:'#dedad7'} }>Appearance: {charAppearance(char.appearance)}</Text>
                        <Text style={ { fontSize:20, fontFamily: 'AppleSDGothicNeo-Bold', fontWeight: 'bold', color:'#dedad7'} }>Portrayed: {char.portrayed}</Text>               
                </View>
                <View style = {{backgroundColor:characterStatus(char.status), width:'2%', height:'100%', alignItems:'center',marginLeft:60}}></View>
                <View style={{width: '25%', height:'100%'}}>
                    <Image
                    style = { { width: '100%', height: '100%' } } 
                    source = { { uri:char.img } }
                    />
                </View>
            </View>
        </View>
    )
}

export const ScreenOptions = navData =>{
    return{
        headerTitle: navData.route.params.charcterDetails.name
    }
};

export default CharacterDetailsScreen;