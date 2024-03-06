import AsyncStorage from '@react-native-community/async-storage';
import * as React from 'react';
import {Button, View, Text} from 'react-native';
import {AuthContext} from '../../context/AuthContext';
import {ThemeContext} from '../../context/ThemeContext';
import strings from '../../utils/strings';

function HomeScreen({navigation}) {
  const theme = React.useContext(ThemeContext);
  const [mobileNumber, setMobileNumber] = React.useState('');
  const {setIsLoggedIn} = React.useContext(AuthContext);
  React.useEffect(() => {
    getData();
  });
  async function getData() {
    const userMobile = await AsyncStorage.getItem('mobileNumber');
    setMobileNumber(userMobile);
  }

  async function onLogOut() {
    await AsyncStorage.removeItem('mobileNumber');
    setIsLoggedIn(false);
    // navigation.navigate(strings.auth.screenTitle);
  }

  return (
    <View
      style={{
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: theme.primary,
      }}>
      <Text
        numberOfLines={2}
        style={{
          marginHorizontal: 30,
          color: theme.white,
          fontSize: 20,
          fontFamily: 'Poppins-SemiBold',
          lineHeight: 32,
          textAlign: 'center',
          marginBottom: 30,
        }}>{`Welcome to Home Screen ${mobileNumber}`}</Text>
      <Button title="Log Out" onPress={() => onLogOut()} />
    </View>
  );
}

export default HomeScreen;
