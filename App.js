import { StatusBar } from 'expo-status-bar';
import {  StyleSheet, Text, View, TextInput, TouchableOpacity, SafeAreaView, KeyboardAvoidingView } from 'react-native';
import {Hero} from '../prueba/src/components/Hero'
import fetchApiFuncion from './src/components/utilidades/fetch';
import { useEffect, useState } from 'react';
import { Header } from './src/components/Header/Header';

export default function App() {

  const [respuestaBase, setRespuestaBase] = useState([])
  const [respuestaMain, setRespuestaMain] = useState([])
  const [respuestaWeather, setRespuestaWeather] = useState([])
  const [valorBusqueda, setValorBusqueda] = useState('argentina')
  const [activarBusqueda, setActivarBusqueda] = useState(1)
  
const funcionBuscar = () => {

  if(activarBusqueda == 1){
    setActivarBusqueda(2)
  }else{
    setActivarBusqueda(1)
  }

 }

  useEffect(()=>{



    fetchApiFuncion(valorBusqueda) //importo la funcion y le paso el parametro que quiero
            .then(data => { //tomo la respuesta a la peticion 
                console.log("Datos del clima:", data);

                if(data.main.temp != undefined){
                  setRespuestaBase(data)//guardo los datos de la peticion en respuesta con el uso del hook useState
                
                  setRespuestaMain(data.main)
                  setRespuestaWeather(data.weather[0])
                  // Realiza aquí las acciones con los datos del clima

                }
               
            })
            .catch(error => {
                // console.error("Error al obtener datos del clima:", error);
                console.error("Lugar no encontrado, intente nuevamente!")

            });

        


  },[activarBusqueda])

 


  return (
   
    
    
    <View style={styles.container}>
      
     
      <StatusBar style="light" />

     
     <Header/>
     <View style={styles.contInput}>
     <TextInput 
     style={ styles.input}
     placeholder="Ingresa una locacion"
     placeholderTextColor={'gray'}
     value={valorBusqueda}
     onChangeText={text =>{setValorBusqueda(text)}}
     
     />

<TouchableOpacity onPress={funcionBuscar} style={styles.touchable}>
        <Text style={styles.textBuscar}>BUSCAR</Text>
     </TouchableOpacity>

    </View>
      
      <Hero respuestaBase = {respuestaBase} respuestaMain = {respuestaMain} respuestaWeather = {respuestaWeather} />
      
     
    </View>

   
   
  );
} //utilizo el spread operator ...respuesta para pasar los datos de respuesta al componente que quiero

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#3C55AE',
    alignItems: 'center',
    justifyContent: 'flex-start',
    

  },
 
  touchable:{
    paddingTop:5
  },
  input:{
   
    borderColor:'white',
    marginTop:10,
     padding: 10,
     width:'70%',
     textAlign:'center',
    color:'white'


  },
  contInput:{
    width:'90%',
    flexDirection:'row',
    alignItems:'center',
    justifyContent:'space-evenly',
    borderBottomWidth:1,
    borderColor:'white',
    
    
  },
  textBuscar:{
    color:'#F7D524'
  }
});
