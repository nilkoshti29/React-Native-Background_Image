import React,{Component } from 'react';
import { Platform,StyleSheet,View,Image} from 'react-native';

export default class App extends Component{
  render(){
    return(
      <View style={styles.MainContainer}>
        <View style={{width:100,height:100,backgroundColor:'#000',opacity:2,marginBottom:15}}/>
        <Image
            source={{uri:'https://reactnativecode.com/wp-content/uploads/2017/10/Guitar.jpg'}}
            style={{width:200,height:300, resizeMode:'center',opacity:2}}
          />
      </View>
    )
  }
}

const styles=StyleSheet.create({
  MainContainer:{
    justifyContent:'center',
    alignItems:'center',
    flex:1,
    padding: (Platform.OS === 'android ') ? 20 : 0
  }
});