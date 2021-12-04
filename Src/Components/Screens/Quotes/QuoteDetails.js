import React, { useState, useEffect } from 'react';
import {View, Text, TouchableOpacity, StyleSheet, FlatList, Image} from 'react-native';
import Styles from '../../../Utility/appStyle';


const QuoteDetailsScreen = props => {

    return(
        <View Styles={Styles.container}>
            <Text>QuoteDetails</Text>
        </View>
    )
}

export const ScreenOptions = navData =>{

    return{
        headerTitle: 'QuoteDetails'
    }
};

export default QuoteDetailsScreen;