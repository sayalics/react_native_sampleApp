import AsyncStorage from '@react-native-community/async-storage';
import * as React from 'react';
import {Button, View, Text} from 'react-native';
import { CustomStatusBar } from '../../components/StatusBar';
import {AuthContext} from '../../context/AuthContext';
import {ThemeContext} from '../../context/ThemeContext';
import strings from '../../utils/strings';

function HomeScreen({navigation}) {
  const theme = React.useContext(ThemeContext);
  const [user, setUser] = React.useState('');
  const {setIsLoggedIn} = React.useContext(AuthContext);
  React.useEffect(() => {
    getData();
  });
  async function getData() {
    const mobile = await AsyncStorage.getItem('mobileNumber');
    const email = await AsyncStorage.getItem('email');
    if(mobile){
      setUser(mobile);
    } else if (email){
      setUser(email)
    }
  }

  async function onLogOut() {
    await AsyncStorage.removeItem('mobileNumber');
    await AsyncStorage.removeItem('email');
    setIsLoggedIn(false);
    // navigation.navigate(strings.login.screenTitle);
  }

  return (
    <View
      style={{
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: theme.primary,
      }}>
        <CustomStatusBar/>
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
        }}>{`Welcome to Home Screen ${user}`}</Text>
      <Button title="Log Out" onPress={() => onLogOut()} />
    </View>
  );
}

export default HomeScreen;
