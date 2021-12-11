import React from 'react';
import { SafeAreaView, StatusBar, StyleSheet, Text, View } from 'react-native';
import NavBar from './src/components/Navbar';
import Footer from './src/components/Footer';
import Login from './src/components/Login';


export default function App() {
  return (

    <SafeAreaView style={styles.container} >
      <StatusBar />
      <NavBar/> 
      <Login />
      <Footer/>
    </SafeAreaView>
  );
}




const styles = StyleSheet.create({
  container: {
    flex:1,
  },
});
