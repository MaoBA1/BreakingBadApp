import React, { useState, useEffect } from 'react';
import {View, Text, TouchableOpacity, StyleSheet, FlatList, Image} from 'react-native';
import Styles from '../../../Utility/appStyle';


const EpisodesScreen = props => {

    const [episodes,setepisodes] = useState([]);
    const url = 'https://www.breakingbadapi.com/api/episodes';

    const GetDataFromServer = async () =>{
        const response = await fetch(url,
            {
                method: 'GET'
            }
        )
        
        const data = await response.json();
        setepisodes(data);
        console.log('data:'+JSON.stringify(data));

    };

    useEffect(() => {
        GetDataFromServer();
    },[]);

    return(
        <View style={Styles.container}>
            <FlatList
                style = { Styles.scrollerStyle }
                data = { episodes }
                keyExtractor = { item => item.episode_id }
                renderItem = { 
                    episode => 
                    <View style={{alignItems: 'center'}}>
                        <TouchableOpacity onPress={() => props.navigation.navigate('EpisodeDetails',{EpisodeDetails:episode.item})} style={Styles.btnSyleEpisodesQuotes} >
                            <View style={{width:'100%', marginBottom:10}}>
                                <Text style={ { fontSize:18, fontFamily: 'AppleSDGothicNeo-Bold', fontWeight: 'bold', color:'#fff'} }>{episode.item.title}</Text>
                            </View>
                            <View style={{flexDirection:'column'}}>
                                <Text style={ { fontSize:15, fontFamily: 'AppleSDGothicNeo-Bold', fontWeight: 'bold', color:'#807d75', width:'100%', marginBottom:20} }>Season {episode.item.season} | Episode{episode.item.episode}</Text>
                                <Text style={ { fontSize:15, fontFamily: 'AppleSDGothicNeo-Bold', fontWeight: 'bold', color:'#807d75', width:'100%'} }>Air date: {episode.item.air_date}</Text>
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
        headerTitle: 'Episodes'
    }
};

export default EpisodesScreen;