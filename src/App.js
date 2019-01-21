import React, { Component } from 'react';
import FireBase from 'firebase';
import { View } from 'react-native';
import { Header } from './components/common';
import SignInForm from './components/SignInForm';

class App extends Component {
  componentWillMount() {
    FireBase.initializeApp({
      apiKey: 'AIzaSyA8BAICzc64u8zXrVvzpZf8qPSQwxiaGPo',
      authDomain: 'authentication-970ef.firebaseapp.com',
      databaseURL: 'https://authentication-970ef.firebaseio.com',
      projectId: 'authentication-970ef',
      storageBucket: 'authentication-970ef.appspot.com',
      messagingSenderId: '420894330650'
    });
  }

  render() {
    return (
      <View>
        <Header />
        <SignInForm />
      </View>
    );
  }
}

export default App;
