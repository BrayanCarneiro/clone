import React from "react";
import {Image, Text, View, style } from "react-native"





export default function NavBar(){

    return(
    <View style={{heigth:400,width:"100%" ,alignItems:"center",marginTop:20}}>

        <Image style={{width:80, height:40}} source={require('../../assets/riotcertatlg.png')} />

    </View>

    );



}