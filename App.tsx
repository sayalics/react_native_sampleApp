// In App.js in a new project

import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import MainNavigator from './src/navigation/MainNavigator';
import ThemeProvider from './src/context/ThemeContext';
import { AuthProvider } from './src/context/AuthContext';

function App() {
  return (
    <AuthProvider>
    <ThemeProvider>
      <NavigationContainer>
        <MainNavigator/>
      </NavigationContainer>
    </ThemeProvider>
    </AuthProvider>
  );
}

export default App;