import React, { useState } from 'react'
import { View,Text, TextInput, Button,TouchableOpacity } from 'react-native'
import { AntDesign } from '@expo/vector-icons';


export default function Login(){

    const[text,setText] = React.useState('');


    function clicado() {
      return(
       
        alert("Usuario ou senha invalidos")

      )
    }
    return(
        
        <View > 
        <View style={{heigth:400,width:"100%" ,alignItems:"center",marginTop:20}}>
              <Text style={{fontWeight:"900" , fontSize:"29px" }} >Sign In</Text>
               <TextInput key="nome"style={{borderRadius:5,fontWeight:"bold",marginTop:60, height:"65px",width:"95%",backgroundColor:"#e3e3e3"}}
               underlineColorAndroid = "#e3e3e3"
               placeholder= "    USERNAME"
               placeholderTextColor = "#353839"
               autoCapitalize = "none"
               
              />
               <TextInput key="senha"style={{borderRadius:5,fontWeight:"bold",marginTop:10, height:"65px",width:"95%",backgroundColor:"#e3e3e3"}}
               underlineColorAndroid = "#e3e3e3"
               placeholder= "    PASSWORD"
               placeholderTextColor = "#353839"
               autoCapitalize = "none"
              />
             
        </View>
                <View style={{height:"80%",width:"100%",alignItems:"center",marginTop:"40%"}}>
                  <TouchableOpacity onPress={()=>{clicado()}} style={{borderStyle:"solid",borderWidth:"2px",borderColor:"#e3e3e3",borderRadius:20,padding:20}}><AntDesign name="arrowright" size={26} color="#e3e3e3" /></TouchableOpacity>
                </View>

        </View>

    )


}