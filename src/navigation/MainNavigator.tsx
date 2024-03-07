import AsyncStorage from '@react-native-community/async-storage';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {
  useContext,
  useEffect,
  useState,
} from 'react';
import {AuthContext} from '../context/AuthContext';
import LoginScreen from '../screens/Login/LoginScreen';
import HomeScreen from '../screens/Home/HomeScreen';
import VerifyOtpScreen from '../screens/VerifyOtp/VerifyOtpScreen';
import strings from '../utils/strings';
import Signup from '../screens/Signup/Signup';

const Stack = createNativeStackNavigator();

export default function MainNavigator() {
  const {isLoggedIn, setIsLoggedIn} = useContext(AuthContext);

  useEffect(() => {
    const checkAuth = async () => {
      const item = await AsyncStorage.getItem('mobileNumber');
      if (item !== null) {
        setIsLoggedIn(true);
      } else {
        setIsLoggedIn(false);
      }
    };
    checkAuth();
  }, []);
  return (
    <Stack.Navigator
      initialRouteName={strings.login.screenTitle}
      screenOptions={({route, navigation}) => ({
        headerShown: false,
        gestureEnabled: true,
      })}>
      {isLoggedIn === false ? (
        <>
          <Stack.Screen
            name={strings.signup.screenTitle}
            component={Signup}
          />
          <Stack.Screen
            name={strings.login.screenTitle}
            component={LoginScreen}
          />
          <Stack.Screen
            name={strings.verifyOtp.screenTitle}
            component={VerifyOtpScreen}
          />
        </>
      ) : (
        <>
          <Stack.Screen
            name={strings.home.screenTitle}
            component={HomeScreen}
          />
        </>
      )}
    </Stack.Navigator>
  );
}
