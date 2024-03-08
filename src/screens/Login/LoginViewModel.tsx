import AsyncStorage from "@react-native-community/async-storage";
import { useContext, useEffect, useState } from "react";
import { Alert, Keyboard } from "react-native";
import { AuthContext } from "../../context/AuthContext";
import strings from "../../utils/strings";

function useLoginViewModel({navigation}){
    const [value, setValue] = useState('');
    const [email, setEmail] = useState('');
    const [loginWithEmail, setLoginWithEmail] = useState(false);
    const [isEnabled, setIsEnabled] = useState(true);
    const [password, setPassword] = useState("");
    const [hidePassWord, setHidePassWord] = useState(true);
    const [hideConfirmPassWord, setHideConfirmPassWord] = useState(true);
    const {setIsLoggedIn} = useContext(AuthContext);

    useEffect(() => {
        value.length === 10 && Keyboard.dismiss();
      }, [value]);

      function toggleLoginWithEmail() {
        setLoginWithEmail(!loginWithEmail);
      }
    
      function sendOtpOnPress() {
        if (value && value.length == 10) {
          navigation.navigate(strings.verifyOtp.screenTitle, {
            mobileNumber: value,
          });
        } else if (value && value.length < 10) {
          Alert.alert('', 'Please enter valid mobile number');
        }
      }
      
      function onLogin(){
        if(isEnabled == true){
          if(loginWithEmail == true && email){
              navigation.navigate(strings.verifyOtp.screenTitle, {
                email: email,
              });
          } else if(loginWithEmail == false && value){
            navigation.navigate(strings.verifyOtp.screenTitle, {
              mobileNumber: value,
            });
          } else if(loginWithEmail == true && !email){
            Alert.alert('', 'Please enter email');
          } else if(loginWithEmail == false && !value){
            Alert.alert('', 'Please enter mobile number');
          }  
        } else {
          if (loginWithEmail == true && email && password){
            AsyncStorage.setItem('email', email);
            setIsLoggedIn(true);
          } else if(loginWithEmail == false && value && password){
            AsyncStorage.setItem('mobileNumber', value);
            setIsLoggedIn(true);
          } else if(loginWithEmail == true && !email && password){
            Alert.alert('', 'Please enter email');
          } else if(loginWithEmail == false && !value && password){
            Alert.alert('', 'Please enter mobile number');
          } else if(loginWithEmail == true && email && !password){
            Alert.alert('', 'Please enter password');
          } else if(loginWithEmail == false && value && !password){
            Alert.alert('', 'Please enter password');
          }
        }
      }

      const onHidePassword=()=>{
        setHidePassWord(!hidePassWord)
    }

    const toggleSwitch = () => setIsEnabled(previousState => !previousState);

      return {value, setValue, sendOtpOnPress, email, setEmail, loginWithEmail, toggleLoginWithEmail, isEnabled, toggleSwitch, password, setPassword, hidePassWord, hideConfirmPassWord, onHidePassword, onLogin};
}

export default useLoginViewModel;