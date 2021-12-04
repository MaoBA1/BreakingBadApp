import { StyleSheet } from 'react-native';

export default StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#1c1f1e',
        alignItems: 'center',
        justifyContent: 'center',
      },
      containerEpisodeDetails: {
        flex: 1,
        backgroundColor: '#1c1f1e',
      },
      charPageContainer: {
        flex: 1,
        backgroundColor: '#1c1f1e',
        flexDirection:'row',
        
        //alignItems: 'center',
        // justifyContent: 'center',
      },
    scrollerStyle:{
      width:'100%',
    },
    btnSyle:{
      alignItems:'center',
      justifyContent: 'center',
      backgroundColor:'#83c7b1',
      height:200,
      margin:20,
      width:370,
      borderRadius:10,
      borderWidth:3,
      borderColor: '#cee0db',
      flexDirection: 'row',
      padding:50
    },
    txtView:{
      marginLeft:50,
      width:'70%',
      
    },
    webTitleView:{
      alignItems: 'center',
      height:180,
      backgroundColor:'#1c1f1e',
      padding:30
    },
    imgView:{
      flexDirection: 'row',
      width:200,
      borderRadius:10
    },
    btnSyleEpisodesQuotes:{
      justifyContent: 'center',
      backgroundColor:'#83c7b1',
      height:150,
      margin:20,
      width:350,
      borderRadius:10,
      borderWidth:3,
      borderColor: '#cee0db',
      padding:40
    },
    
});