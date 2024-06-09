import { Text, View, StatusBar } from 'react-native'
import React, { Component } from 'react'
import { NavigationContainer } from '@react-navigation/native'

import Router from './src/router/index'
const App = () => {
    return (
        <NavigationContainer>
          <StatusBar backgroundColor="rgba(0, 0, 0, 0)" barStyle="dark-content" translucent/>
          <Router />
        </NavigationContainer>
    )
}

export default App;