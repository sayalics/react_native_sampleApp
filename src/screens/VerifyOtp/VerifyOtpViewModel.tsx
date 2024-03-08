import AsyncStorage from "@react-native-community/async-storage";
import { useContext, useEffect, useState } from "react";
import { Keyboard } from "react-native";
import { AuthContext } from "../../context/AuthContext";

function useVerifyOtpViewModel({navigation, route}) {
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
      if (value && value.length == 6) {
        if(route.params.mobileNumber){
          AsyncStorage.setItem('mobileNumber', route.params.mobileNumber);
          setIsLoggedIn(true);  
        } else if (route.params.email){
          AsyncStorage.setItem('mobileNumber', route.params.email);
          setIsLoggedIn(true);
        }
      }
    }

    return {
        value, setValue, onVerifyOtp, count
    }
}

export default useVerifyOtpViewModel;