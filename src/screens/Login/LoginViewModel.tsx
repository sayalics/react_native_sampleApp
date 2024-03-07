import { useEffect, useState } from "react";
import { Alert, Keyboard } from "react-native";
import strings from "../../utils/strings";

function useLoginViewModel({navigation}){
    const [value, setValue] = useState('');
    const [email, setEmail] = useState('');
    const [loginWithEmail, setLoginWithEmail] = useState(false);
    const [isEnabled, setIsEnabled] = useState(true);
    const [password, setPassword] = useState("");
    const [hidePassWord, setHidePassWord] = useState(true);
    const [hideConfirmPassWord, setHideConfirmPassWord] = useState(true);
  
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
                mobileNumber: email,
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
            navigation.navigate(strings.verifyOtp.screenTitle, {
              mobileNumber: email,
            });
          } else if(loginWithEmail == false && value && password){
            navigation.navigate(strings.verifyOtp.screenTitle, {
              mobileNumber: value,
            });
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