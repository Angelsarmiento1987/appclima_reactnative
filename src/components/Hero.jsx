import React, { useState, useEffect } from 'react';
import { View, Text, Button, TouchableOpacity, FlatList, TextInput, StyleSheet, Image } from 'react-native'; //tengo q recordar poner todo los imports de los componentes q agrego como Text, View, etc

const Hero = ({ respuestaBase, respuestaMain, respuestaWeather}) => {

  const urlIcono = `http://openweathermap.org/img/wn/${respuestaWeather.icon}@2x.png`
  


    return(
        <View style={styles.container}>

          <View style={styles.contDato}>
            <Text style={styles.nameDato}>Pais/Ciudad:</Text>
               <Text style={{ fontSize: 15, fontWeight: 'bold', margin: 20,fontFamily:'serif',color:'white' }}>
                {respuestaBase.name}
                </Text>
          </View>

          <View style={styles.contDato}>
          <Text style={styles.nameDato}>Temperatura ºC:</Text>
                   <Text style={{ fontSize: 15, fontWeight: 'bold', margin: 20,fontFamily:'serif',color:'white' }}>
                    {respuestaMain.temp}
                   </Text>

          </View>
          <View style={styles.contDato}>
          <Text style={styles.nameDato}>Sens.Termica ºC:</Text>
                   <Text style={{ fontSize: 15, fontWeight: 'bold', margin: 20,fontFamily:'serif',color:'white' }}>
                    {respuestaMain.feels_like}
                   </Text>

          </View>
          <View style={styles.contDato}>
          <Text style={styles.nameDato}>Humedad %:</Text>
                   <Text style={{ fontSize: 15, fontWeight: 'bold', margin: 20,fontFamily:'serif',color:'white' }}>
                    {respuestaMain.humidity}
                   </Text>

          </View>
          <View style={styles.contDato}>
          <Text style={styles.nameDato}>Presion hPa:</Text>
                   <Text style={{ fontSize: 15, fontWeight: 'bold', margin: 20,fontFamily:'serif',color:'white' }}>
                    {respuestaMain.pressure}
                   </Text>

          </View>
          
          
        
        <View style={styles.contDato}>
        <Text style={styles.nameDato}>Estado:</Text>
            <View style={styles.contIcon}>
            <Image source ={{uri:urlIcono}} style={styles.icon }/>
              <Text style={{ fontSize:15, fontWeight: 'bold', margin: 20,fontFamily:'serif',color:'white' }}>
               {respuestaWeather.description}
               </Text>
              
              </View>
        </View>
        
       
    
     
        
     
      </View>
    )
}

const styles = StyleSheet.create({
  container:{
    flex:0.5,
    
    width:'90%',
    margin:20
  },
  contDato:{
    borderWidth:1,
    borderRadius:30,
    flexDirection:'row',
    alignItems:'center',
    justifyContent:'space-between',
    paddingHorizontal:10,
    margin:10,
    borderColor:'white',
    backgroundColor:'#26387C'
  },
  nameDato:{
    color:'#F7D524'
  },
  icon:{
    width:50,
    height:50
  },
  contIcon:{
    flexDirection:'row',
    alignItems:'center',
   
    
  }
})

export { Hero }