import React, {useContext} from 'react';
import {
  View,
  Text,
  SafeAreaView,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import {ThemeContext} from '../context/ThemeContext';
import Icon from 'react-native-vector-icons/FontAwesome';
import {CustomStatusBar} from './StatusBar';

export default function Header({navigation, leftIcon, headerTitle}) {
  const theme = useContext(ThemeContext);
  return (
    <SafeAreaView style={styles(theme).container}>
      <CustomStatusBar />
      <View style={styles(theme).mainView}>
        <View style={styles(theme).View1}>
          {leftIcon && (
            <TouchableOpacity
              onPress={() => navigation.goBack()}
              style={styles(theme).leftIconView}>
              <Icon name="angle-left" size={24} color={theme.white} />
            </TouchableOpacity>
          )}
        </View>
        <View style={styles(theme).View2}>
          {headerTitle && (
            <Text
              style={{
                color: theme.white,
                fontSize: 16,
                fontFamily: 'Poppins-SemiBold',
                textAlign: 'center',
                lineHeight: 24,
                letterSpacing: 0.2,
              }}>
              {headerTitle}
            </Text>
          )}
        </View>
        <View style={styles(theme).View3}></View>
      </View>
    </SafeAreaView>
  );
}

const styles = theme =>
  StyleSheet.create({
    cointainer: {
      flex: 1,
      backgroundColor: theme.primary,
    },
    mainView: {
      flexDirection: 'row',
      backgroundColor: theme.primary,
      height: 60,
    },
    View1: {
      flex: 0.15,
      alignItems: 'center',
      justifyContent: 'center',
    },
    View2: {
      flex: 0.7,
      alignItems: 'center',
      justifyContent: 'center',
    },
    View3: {
      flex: 0.15,
      alignItems: 'center',
      justifyContent: 'center',
    },
    leftIconView: {
      alignItems: 'center',
      justifyContent: 'center',
      width: 30,
      height: 30,
      backgroundColor: theme.primary2,
      borderRadius: 15,
    },
  });
