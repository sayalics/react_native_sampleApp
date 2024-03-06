import React, {useContext, useEffect, useState} from 'react';
import {
  View,
  Text,
  Button,
  SafeAreaView,
  StyleSheet,
  Image,
  TextInput,
  KeyboardAvoidingView,
  Dimensions,
  TouchableOpacity,
  Alert,
  Keyboard,
} from 'react-native';
import {Images} from '../../assets/images';
import {CustomStatusBar} from '../../components/StatusBar';
import {ThemeContext} from '../../context/ThemeContext';
import strings from '../../utils/strings';
import CountryPicker from 'rn-country-picker';

export default function AuthScreen({navigation}) {
  const theme = useContext(ThemeContext);
  const [countryCode, setCountryCode] = useState<string>('91');
  const [value, setValue] = useState('');
  const selectedValue = (value: string) => {
    setCountryCode(value);
  };

  useEffect(() => {
    value.length === 10 && Keyboard.dismiss();
  }, [value]);

  function sendOtpOnPress() {
    if (value && value.length == 10) {
      navigation.navigate(strings.verifyOtp.screenTitle, {
        mobileNumber: value,
      });
    } else if (value && value.length < 10) {
      Alert.alert('', 'Please enter valid mobile number');
    }
  }
  return (
    <SafeAreaView style={styles(theme).container}>
      <CustomStatusBar />
      <KeyboardAvoidingView
        enabled
        style={styles(theme).mainView}
        behavior="padding">
        <Image
          style={{width: 300, height: 300}}
          source={Images.AuthImg}
          resizeMode="contain"
        />
        <Text style={styles(theme).loginText}>
          {strings.auth.loginToYourAccount}
        </Text>
        <View style={styles(theme).mobileTextInputView}>
          <CountryPicker
            disable={false}
            animationType={'slide'}
            language="en"
            containerStyle={styles(theme).pickerStyle}
            pickerTitleStyle={styles(theme).pickerTitleStyle}
            dropDownImage={Images.DropDownArrow}
            selectedCountryTextStyle={styles(theme).selectedCountryTextStyle}
            countryNameTextStyle={styles(theme).countryNameTextStyle}
            pickerTitle={'Country Picker'}
            searchBarPlaceHolder={'Search......'}
            hideCountryFlag={true}
            hideCountryCode={false}
            searchBarStyle={styles(theme).searchBarStyle}
            // backButtonImage={<Icon name="angle-left" size={24} color={theme.white} />}
            // searchButtonImage={<Icon name="angle-left" size={24} color={theme.white} />}
            countryCode={countryCode}
            selectedValue={selectedValue}
          />
          <TextInput
            value={value.replace(/[^0-9]/g, '')}
            maxLength={10}
            onChangeText={e => setValue(e)}
            keyboardType="numeric"
            placeholder="Mobile Number"
            placeholderTextColor={theme.white}
            style={styles(theme).textInput}
          />
        </View>
        <TouchableOpacity
          onPress={() =>
            value.length > 0
              ? sendOtpOnPress()
              : Alert.alert('Please enter Mobile Number')
          }
          style={[
            styles(theme).buttonStyle,
            {backgroundColor: value ? theme.secondary : theme.primary2},
          ]}>
          <Text style={styles(theme).buttonText}>{strings.auth.sendOtp}</Text>
        </TouchableOpacity>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
}

const styles = theme =>
  StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: theme.primary,
    },
    mainView: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
    },
    loginText: {
      fontSize: 20,
      fontFamily: 'poppins-semibold',
      color: theme.white,
      lineHeight: 32,
      marginBottom: 30,
    },
    pickerTitleStyle: {
      justifyContent: 'center',
      flexDirection: 'row',
      alignSelf: 'center',
      fontWeight: 'bold',
    },
    pickerStyle: {
      height: 48,
      width: '25%',
      marginVertical: 10,
      borderColor: theme.white,
      alignItems: 'center',
      marginRight: 10,
      padding: 10,
      borderRadius: 5,
      borderWidth: 1,
      fontSize: 16,
    },
    selectedCountryTextStyle: {
      paddingLeft: 5,
      color: theme.white,
      textAlign: 'right',
    },

    countryNameTextStyle: {
      paddingLeft: 10,
      color: 'black',
      textAlign: 'right',
    },

    searchBarStyle: {
      flex: 1,
    },
    mobileTextInputView: {
      width: '80%',
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'center',
    },
    textInput: {
      width: '70%',
      height: 48,
      borderWidth: 1,
      borderColor: theme.white,
      borderRadius: 5,
      paddingHorizontal: 10,
      color: theme.white,
    },
    buttonStyle: {
      width: Dimensions.get('screen').width - 40,
      height: 48,
      backgroundColor: theme.secondary,
      borderRadius: 12,
      marginTop: 20,
      alignItems: 'center',
      justifyContent: 'center',
    },
    buttonText: {
      fontFamily: 'poppins-bold',
      fontSize: 16,
      color: theme.white,
    },
  });
