import React, {useContext} from 'react';
import {
  View,
  Text,
  SafeAreaView,
  TouchableOpacity,
  Alert,
} from 'react-native';
import Header from '../../components/Header';
import {ThemeContext} from '../../context/ThemeContext';
import strings from '../../utils/strings';
import {OtpInput} from 'react-native-otp-entry';
import Button from '../../components/Button';
import { styles } from './styles';
import useVerifyOtpViewModel from './VerifyOtpViewModel';
export default function VerifyOtpScreen({route, navigation}) {
  const theme = useContext(ThemeContext);
  const {
    value,
    count,
    setValue,
    onVerifyOtp
  } = useVerifyOtpViewModel({navigation,route});
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
          
          <Button
          onPress={() =>
            value.length === 6
              ? onVerifyOtp()
              : Alert.alert('', 'Please enter valid otp')
          }
          buttonText={strings.verifyOtp.screenTitle}
          disabled={value.length === 0 ? true : false}
          style={styles(theme).buttonStyle}
          />
        </View>
      </SafeAreaView>
    </>
  );
}
