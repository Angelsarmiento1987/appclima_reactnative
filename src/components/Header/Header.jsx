
import React, { useEffect, useState } from 'react';
import { View, Image, Text, StyleSheet } from 'react-native';




const Header = () => {

  

 
  

    return(
        <View style={styles.container}>
            <View>

                <Text style={styles.titulo} >CLIM-APP</Text>

            </View>
            <View>
            <Image source={require('../../../assets/icon.png')} style={styles.image}/>
            </View>

        </View>
    )
}



const styles = StyleSheet.create({

    container:{
        flex:0.1,
        flexDirection:'row',
        alignItems:'center',
        
        width:'95%',
        justifyContent:'space-between',
        borderWidth:2,
        paddingVertical:5,
        paddingHorizontal:10,
        borderColor:'#F7D524',
        borderRadius:20,
        marginTop:50,
    
        

    },
    image:{
        width:50,
        height: 50
    },
    titulo:{
        fontSize:25,
        fontWeight:'bold',
        fontFamily:'serif',
        color:'white'
       
        
       
    }



})

export { Header }