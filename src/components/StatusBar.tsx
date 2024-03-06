import React, {useContext} from 'react';
import {Platform, View, StatusBar} from 'react-native';
import {ThemeContext} from '../context/ThemeContext';
export const CustomStatusBar = () => {
  const theme = useContext(ThemeContext);
  return <StatusBar backgroundColor={theme.primary} barStyle="light-content" />;
};
