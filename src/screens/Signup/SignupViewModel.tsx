import { useState } from "react";
import { Alert } from "react-native";
import strings from "../../utils/strings";

function useSignupViewModel({navigation}) {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [mobileNumber, setMobileNumber] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [hidePassWord, setHidePassWord] = useState(true);
    const [hideConfirmPassWord, setHideConfirmPassWord] = useState(true);

    const onHidePassword=()=>{
        setHidePassWord(!hidePassWord)
    }

    const onHideConfirmPassword=()=>{
        setHideConfirmPassWord(!hideConfirmPassWord)
    }

    const onSignup = () => {
        if (name == "") {
            Alert.alert("", "Please enter name");
        } else if (email == "" && mobileNumber == "") {
            Alert.alert("", "Please enter email or mobile number");
        } else if (password == "") {
            Alert.alert("", "Please enter password");
        } else if (confirmPassword == "") {
            Alert.alert("", "Please enter confirm password");
        } else if (password !== confirmPassword) {
            Alert.alert("", "Password and confirm password does not match");
        } else if(name && (email || mobileNumber) && password && confirmPassword){
            navigation.navigate(strings.login.screenTitle);
        } 
    }

    return {
        name,
        setName,
        email,
        setEmail,
        mobileNumber,
        setMobileNumber,
        password,
        setPassword,
        confirmPassword,
        setConfirmPassword,
        onSignup,
        hidePassWord,
        hideConfirmPassWord,
        onHidePassword,
        onHideConfirmPassword
    };
}
export default useSignupViewModel