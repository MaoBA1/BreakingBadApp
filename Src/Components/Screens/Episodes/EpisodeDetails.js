import React, { useState, useEffect } from 'react';
import {View, Text, TouchableOpacity, StyleSheet, FlatList, Image, ScrollView} from 'react-native';
import Styles from '../../../Utility/appStyle';


const EpisodeDetailsScreen = props => {
    console.log('Data:'+JSON.stringify(props.route.params.EpisodeDetails));
    const episodeDetails = props.route.params.EpisodeDetails;
    const episodeCharcters = (chars) => {
        let char = '';
        [...chars].forEach(item => {
            char += `${item}\n`
        });
        console.log(char);
        return char;
        
    }

    return(
        <View style={Styles.containerEpisodeDetails}>
            <View style={{width:'100%', height:180, backgroundColor:'#015222', alignItems:'center', justifyContent: 'center'}}>
                    <Text style={ { fontSize:50, fontFamily: 'Sarpanch-ExtraBold', fontWeight: 'bold', color:'#fff'} }>{episodeDetails.title}</Text>
            </View>
            <View style={{width:'100%', height:70, backgroundColor:'#0b996a', alignItems:'center', justifyContent: 'center'}}>
                <Text style={ { fontSize:20, fontFamily: 'Sarpanch-ExtraBold', fontWeight: 'bold', color:'#fff'} }>Characters</Text>
            </View>
            <View style={{width: '100%', alignItems:'center', justifyContent: 'center',marginTop:20, marginBottom:40}}>
                    <Text style={ { fontSize:20, fontFamily: 'Sarpanch-ExtraBold', fontWeight: 'bold', color:'#fff'} }>{episodeCharcters(episodeDetails.characters)}</Text>
            </View>
        </View>
    )
}
//props.route.params.EpisodeDetails
//episode
//title
export const ScreenOptions = navData =>{

    return{
        headerTitle: `Season ${navData.route.params.EpisodeDetails.season} | Episode ${navData.route.params.EpisodeDetails.episode}`
    }
};

export default EpisodeDetailsScreen;