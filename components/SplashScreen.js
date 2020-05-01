import React, {Component} from 'react';
import {View, Text, Image, StyleSheet} from 'react-native';
class Splash extends Component{
    componentDidMount(){
        this.checkMain();
    }

    checkMain = () => {
         setTimeout(() => {
             this.props.navigation.navigate('Main');
        },1000);
    };

    render(){
        return (
            <View style={styles.container}>
                <View>
                    <Image source={require('./images/logo.png')}/>
                </View>
                <View style={styles.x}>
                    <Text style={{size:"50"}}> Ristornate Confusion</Text>
                    <Text style={{size:"12"}}>
                        Created by: Ajay 
                    </Text>
                </View>
            </View>
        );
    }
}
const styles = StyleSheet.create({
    container: {
      flex: 1,
      alignItems: 'center',
      margin: 10,
      justifyContent: 'center',
      marginBottom: 10,
    },
    x:{
        alignItems: 'center',
        justifyContent: 'center',
        marginBottom: 10,
    },
  })

export default Splash;