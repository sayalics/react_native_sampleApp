import React = require("react");
import {
  Image,
  KeyboardAvoidingView,
  Platform,
  SafeAreaView,
  ScrollView,
  Text,
  View,
} from "react-native";
import { Images } from "../../assets/images";
import Button from "../../components/Button";
import CountryPicker from "../../components/CountryPicker";
import { CustomStatusBar } from "../../components/StatusBar";
import Input from "../../components/TextInput";
import { ThemeContext } from "../../context/ThemeContext";
import { SCREEN_SIZE } from "../../utils/screenSize";
import strings from "../../utils/strings";
import useSignupViewModel from "./SignupViewModel";
import { styles } from "./styles";

function Signup({ navigation }) {
  const theme = React.useContext(ThemeContext);
  const {
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
    onHideConfirmPassword,
    onHidePassword,
  } = useSignupViewModel({ navigation });

  return (
    <SafeAreaView style={styles(theme).container}>
      <CustomStatusBar />
      <KeyboardAvoidingView
        enabled
        behavior={"padding"}
        keyboardVerticalOffset={Platform.OS === "ios" ? 64 : 40}
      >
        <ScrollView
          keyboardShouldPersistTaps="handled"
          contentContainerStyle={styles(theme).mainView}
        >
          <Image
            source={Images.SignupImg}
            resizeMode="contain"
            style={{ width: 100, height: 100, marginVertical: 10 }}
          />
          <Input
            value={name}
            onChangeText={(e) => setName(e)}
            placeholder="Full Name"
            maxLength={70}
            style={{ marginVertical: 20 }}
          />
          <Input
            value={email}
            onChangeText={(e) => setEmail(e)}
            keyboardType="email-address"
            placeholder="Email"
            maxLength={255}
            style={{ marginVertical: 20 }}
          />
          <View style={{ flexDirection: "row", alignItems: "center" }}>
            <View
              style={{ flex: 1, height: 1, backgroundColor: theme.white }}
            />
            <View>
              <Text
                style={{ width: 120, textAlign: "center", color: theme.white }}
              >
                {"Email OR Mobile"}
              </Text>
            </View>
            <View
              style={{ flex: 1, height: 1, backgroundColor: theme.white }}
            />
          </View>
          <View style={styles(theme).mobileTextInputView}>
            <View style={{ flex: 0.3 }}>
              <CountryPicker />
            </View>
            <View style={{ flex: 0.7 }}>
              <Input
                value={mobileNumber}
                onChangeText={(e) => setMobileNumber(e)}
                keyboardType="numeric"
                placeholder="Mobile Number"
                maxLength={10}
                style={{ marginVertical: 20, width: "100%" }}
              />
            </View>
          </View>
          <Input
            value={password}
            onChangeText={(e) => setPassword(e)}
            placeholder="Password"
            maxLength={10}
            style={{ marginVertical: 20 }}
            secureTextEntry={hidePassWord}
            rightIcon={true}
            onRightIconPress={onHidePassword}
          />
          <Input
            value={confirmPassword}
            onChangeText={(e) => setConfirmPassword(e)}
            placeholder="Confirm Password"
            maxLength={10}
            style={{ marginVertical: 20 }}
            secureTextEntry={hideConfirmPassWord}
            rightIcon={true}
            onRightIconPress={onHideConfirmPassword}
          />
          <Button
            disabled={
              name && (email || mobileNumber) && password && confirmPassword
                ? false
                : true
            }
            buttonText="Sign Up"
            onPress={() => onSignup()}
          />
          <View style={styles(theme).alreadyHaveAccount}>
            <Text style={styles(theme).alreadyHaveAccountText}>
              {"Already have an account?"}{" "}
              <Text
                onPress={() => navigation.navigate(strings.login.screenTitle)}
                style={{ color: theme.secondary }}
              >
                {"Login"}
              </Text>
            </Text>
          </View>
        </ScrollView>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
}

export default Signup;
