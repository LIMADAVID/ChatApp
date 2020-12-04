import React, { useState } from 'react';
import { StyleSheet, SafeAreaView } from 'react-native';
import { Container } from 'native-base';
import { StatusBar } from 'expo-status-bar';
import Constants from 'expo-constants'
import * as Font from 'expo-font';
import Login from './src/screens/Login';
import Chat from './src/screens/Chat';

export default function App(){
  const [userName, setUserName] = useState(null);

  return (
    <Container style={styles.container}>
        <StatusBar style="auto" />
        {!userName ? (
          <Login />
        ) : (
          <Chat />
        )}
    </Container>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#16202b',
    paddingTop: Constants.statusBarHeight
  },
});
