import React from "react";
import {Text, View,TouchableOpacity} from "react-native"



export default function Footer(){

    return(

        <View style={{alignItems:"center",justifyContent:"flex-end",marginTop:50}}>
            <TouchableOpacity><Text style={{fontSize:12,fontWeight:"bold",color:"#696969"}}>CAN´T SIGN IN?</Text></TouchableOpacity>
            <TouchableOpacity><Text style={{marginTop:5,fontWeight:"bold",color:"#696969"}}>CREATE ACCOUNT</Text></TouchableOpacity>
        </View>


    )


}