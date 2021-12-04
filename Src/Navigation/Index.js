import React from 'react';
import { createStackNavigator, HeaderStyleInterpolators } from '@react-navigation/stack';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import MaterialCommunetyIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Ionicons from 'react-native-vector-icons/Ionicons';
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons';
// import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
// import Entypo from 'react-native-vector-icons/Entypo';

import CharactersScreen, { ScreenOptions as CharactersScreenOptions } from '../Components/Screens/Characters/Index';
import CharacterDetailsScreen , { ScreenOptions as CharacterDetailsScreenOptions } from '../Components/Screens/Characters/CharacterDetails';

import EpisodesScreen, { ScreenOptions as EpisodesScreenOptions } from '../Components/Screens/Episodes/Index';
import EpisodeDetailsScreen , { ScreenOptions as EpisodeDetailsScreenOptions } from '../Components/Screens/Episodes/EpisodeDetails';

import QuotesScreen, { ScreenOptions as QuotesScreenOptions } from '../Components/Screens/Quotes/Index';
import QuoteDetailsScreen, { ScreenOptions as QuoteDetailsScreenOptions } from '../Components/Screens/Quotes/QuoteDetails';


const CharactersStackNavigator = createStackNavigator();

export const CharactersStack = () => {
    return(
        <CharactersStackNavigator.Navigator screenOptions={{
            headerStyle: {
              backgroundColor: '#0b996a'
            },
            headerTintColor: '#fff',
            headerTitleStyle: {
              fontWeight: 'bold'
              
            },
            headerTitleAlign:'center'
          }}>
            <CharactersStackNavigator.Screen 
                    name = 'Characters'
                    component = { CharactersScreen }
                    options= { { CharactersScreenOptions} }

                    
            />
            <CharactersStackNavigator.Screen 
                name = 'CharacterDetails'
                component = { CharacterDetailsScreen }
                options = { CharacterDetailsScreenOptions }
            />
          
        </CharactersStackNavigator.Navigator>
    )
};

const EpisodesStackNavigator = createStackNavigator();

export const EpisodesStack = () => {
    return(
        <EpisodesStackNavigator.Navigator screenOptions={{
            headerStyle: {
              backgroundColor: '#0b996a'
            },
            headerTintColor: '#fff',
            headerTitleStyle: {
              fontWeight: 'bold'
              
            },
            headerTitleAlign:'center'
          }}>
            <EpisodesStackNavigator.Screen 
                name = 'Episodes'
                component = { EpisodesScreen }
                options = { EpisodesScreenOptions }
        />
        <EpisodesStackNavigator.Screen 
                name = 'EpisodeDetails'
                component = { EpisodeDetailsScreen }
                options = { EpisodeDetailsScreenOptions }
        />
        </EpisodesStackNavigator.Navigator>
    )
};

const QuotesStackNavigator = createStackNavigator();

export const QuotesStack = () => {
    return(
        <QuotesStackNavigator.Navigator screenOptions={{
            headerStyle: {
              backgroundColor: '#0b996a'
            },
            headerTintColor: '#fff',
            headerTitleStyle: {
              fontWeight: 'bold'
              
            },
            headerTitleAlign:'center'
          }}>
            <QuotesStackNavigator.Screen
                name = 'Quotes'
                component = { QuotesScreen }
                options = { QuotesScreenOptions }
        />
        <QuotesStackNavigator.Screen 
                name = 'QuoteDetails'
                component = { QuoteDetailsScreen }
                options = { QuoteDetailsScreenOptions }
        />
        </QuotesStackNavigator.Navigator>
    )
};

const AppBottomBarNavigator = createMaterialBottomTabNavigator();

export const AppBottomBar = () =>{
    return(
        <AppBottomBarNavigator.Navigator activeColor='#d3dedb' inactiveColor='#515755' barStyle={{backgroundColor:'#a3ccc0'}}>
            <AppBottomBarNavigator.Screen 
                options = {
                    {
                        tabBarLabel:'Characters',
                        tabBarIcon:({focused,color,size}) => {

                            const iconShape = focused? 'ios-people-sharp' : 'people-outline'
                            const iconColor = focused? '#fff' : '#000'
                            const iconSzie = focused? 30 : 24
                            return(
                            <Ionicons name={iconShape} color={iconColor} size={iconSzie}  />
                            )

                        } 
                    }
                } 
                name='Characters'
                component={CharactersStack}
            />
             <AppBottomBarNavigator.Screen 
                options = {
                    {
                        tabBarLabel:'Episodes',
                        tabBarIcon:({focused,color,size}) => {

                            const iconShape = focused? 'screen-desktop' : 'screen-desktop'
                            const iconColor = focused? '#fff' : '#000'
                            const iconSzie = focused? 30 : 24
                            return(
                            <SimpleLineIcons name={iconShape} color={iconColor} size={iconSzie} />
                            )

                        } 
                    }
                } 
                name='Episodes'
                component={EpisodesStack}
            />
             <AppBottomBarNavigator.Screen 
                options = {
                    {
                        tabBarLabel:'Quotes',
                        tabBarIcon:({focused,color,size}) => {

                            const iconShape = focused? 'format-quote-close' : 'format-quote-close-outline'
                            const iconColor = focused? '#fff' : '#000'
                            const iconSzie = focused? 30 : 24
                            return(
                            <MaterialCommunetyIcons name={iconShape} color={iconColor} size={iconSzie} />
                            )

                        } 
                    }
                } 
                name='Quotes'
                component={QuotesStack}
            />
        </AppBottomBarNavigator.Navigator>
    )

};