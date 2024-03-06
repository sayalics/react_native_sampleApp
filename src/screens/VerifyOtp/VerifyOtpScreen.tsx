import React, {useContext, useEffect, useState} from 'react';
import {
  View,
  Text,
  SafeAreaView,
  StyleSheet,
  TouchableOpacity,
  Dimensions,
  Alert,
  Keyboard,
} from 'react-native';
import Header from '../../components/Header';
import {ThemeContext} from '../../context/ThemeContext';
import strings from '../../utils/strings';
import {OtpInput} from 'react-native-otp-entry';
import AsyncStorage from '@react-native-community/async-storage';
import {AuthContext} from '../../context/AuthContext';
export default function VerifyOtpScreen({route, navigation}) {
  const theme = useContext(ThemeContext);
  const [count, setCount] = useState(60);
  const [value, setValue] = useState('');
  const {setIsLoggedIn} = useContext(AuthContext);

  useEffect(() => {
    const intervel = setTimeout(() => {
      if (count > 0) {
        setCount(count - 1);
      }
    }, 1000);
    return () => clearInterval(intervel);
  }, [count]);

  useEffect(() => {
    value.length === 6 && Keyboard.dismiss();
  }, [value]);

  function onVerifyOtp() {
    console.log(route.params.mobileNumber);
    if (value && value.length == 6) {
      AsyncStorage.setItem('mobileNumber', route.params.mobileNumber);
      setIsLoggedIn(true);
      navigation.navigate(strings.home.screenTitle);
    }
  }
  return (
    <>
      <Header
        navigation={navigation}
        leftIcon
        headerTitle={strings.verifyOtp.phoneVerification}
      />
      <SafeAreaView style={styles(theme).container}>
        <View style={styles(theme).mainView}>
          <Text style={styles(theme).enterOtpText}>
            {strings.verifyOtp.enterOtp}
          </Text>

          <OtpInput
            autoFocus
            numberOfDigits={6}
            focusColor="green"
            focusStickBlinkingDuration={500}
            onTextChange={text => setValue(text)}
            onFilled={text => console.log(`OTP is ${text}`)}
            theme={{
              inputsContainerStyle: styles(theme).inputsContainer,
              pinCodeContainerStyle: styles(theme).codeContainer,
              pinCodeTextStyle: styles(theme).codeText,
              focusStickStyle: styles(theme).stick,
              focusedPinCodeContainerStyle:
                styles(theme).activePinCodeContainer,
            }}
          />
          <TouchableOpacity>
            {count > 0 ? (
              <Text style={styles(theme).resendOtpText}>{`00:${count}`}</Text>
            ) : (
              <Text style={styles(theme).resendOtpText}>
                {strings.verifyOtp.resendOtp}
              </Text>
            )}
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() =>
              value.length === 6
                ? onVerifyOtp()
                : Alert.alert('', 'Please enter valid otp')
            }
            style={styles(theme).buttonStyle}>
            <Text style={styles(theme).buttonText}>{strings.auth.sendOtp}</Text>
          </TouchableOpacity>
        </View>
      </SafeAreaView>
    </>
  );
}

const styles = theme =>
  StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: theme.primary,
      alignItems: 'center',
      justifyContent: 'flex-start',
    },
    mainView: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'flex-start',
      marginHorizontal: 20,
    },
    enterOtpText: {
      fontSize: 20,
      fontFamily: 'poppins-semibold',
      color: theme.white,
      lineHeight: 32,
      marginTop: 30,
    },

    inputsContainer: {
      flexDirection: 'row',
      flex: 1,
      justifyContent: 'center',
      marginTop: 40,
    },
    codeContainer: {
      borderWidth: 1,
      borderRadius: 12,
      borderColor: theme.primary2,
      height: 48,
      width: 48,
      margin: 5,
      justifyContent: 'center',
      alignItems: 'center',
    },
    codeText: {
      fontSize: 20,
      color: theme.border,
    },
    hiddenInput: {
      ...StyleSheet.absoluteFillObject,
      opacity: 0.01,
    },
    stick: {
      width: 2,
      height: 30,
      backgroundColor: theme.border,
    },
    activePinCodeContainer: {
      tintColor: theme.white,
      borderColor: theme.border,
    },
    resendOtpText: {
      fontSize: 16,
      fontFamily: 'poppins-regular',
      color: theme.secondary,
      marginTop: 30,
    },
    buttonStyle: {
      width: Dimensions.get('screen').width - 40,
      height: 48,
      backgroundColor: theme.secondary,
      borderRadius: 12,
      marginTop: 20,
      alignItems: 'center',
      justifyContent: 'center',
      bottom: 0,
      position: 'absolute',
      marginBottom: 30,
    },
    buttonText: {
      fontFamily: 'poppins-bold',
      fontSize: 16,
      color: theme.white,
    },
  });
