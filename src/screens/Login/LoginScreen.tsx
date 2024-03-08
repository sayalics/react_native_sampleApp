import React, { useContext, useEffect, useState } from "react";
import {
  View,
  Text,
  SafeAreaView,
  Image,
  TextInput,
  KeyboardAvoidingView,
  Alert,
  Keyboard,
  ScrollView,
  Platform,
  TouchableOpacity,
  Switch,
} from "react-native";
import { Images } from "../../assets/images";
import { CustomStatusBar } from "../../components/StatusBar";
import { ThemeContext } from "../../context/ThemeContext";
import strings from "../../utils/strings";
import Button from "../../components/Button";
import CountryPicker from "../../components/CountryPicker";
import { styles } from "./styles";
import Input from "../../components/TextInput";
import useLoginViewModel from "./LoginViewModel";

export default function AuthScreen({ navigation }) {
  const theme = useContext(ThemeContext);
  const {
    value,
    setValue,
    sendOtpOnPress,
    email,
    setEmail,
    loginWithEmail,
    toggleLoginWithEmail,
    isEnabled,
    toggleSwitch,
    password,
    setPassword,
    hidePassWord,
    onHidePassword,
    onLogin,
  } = useLoginViewModel({ navigation });

  return (
    <SafeAreaView style={styles(theme).container}>
      <CustomStatusBar />
      <KeyboardAvoidingView
        enabled
        behavior={"padding"}
        keyboardVerticalOffset={Platform.OS === "ios" ? 64 : 40}
      >
        <ScrollView
          contentContainerStyle={styles(theme).mainView}
          keyboardShouldPersistTaps="handled"
        >
          <Image
            style={{ width: 200, height: 200 }}
            source={Images.SignupImg}
            resizeMode="contain"
          />
          <Text style={styles(theme).loginText}>
            {strings.login.loginToYourAccount}
          </Text>
          <View style={styles(theme).loginToggleView}>
            <TouchableOpacity
              onPress={toggleLoginWithEmail}
              style={[
                styles(theme).toggleSubView,
                {
                  backgroundColor:
                    loginWithEmail == true ? theme.secondary : theme.primary2,
                  borderTopLeftRadius: 10,
                  borderBottomStartRadius: 10,
                },
              ]}
            >
              <Text style={{ color: theme.white, fontSize: 14 }}>
                {"Email"}
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={toggleLoginWithEmail}
              style={[
                styles(theme).toggleSubView,
                {
                  backgroundColor:
                    loginWithEmail == false ? theme.secondary : theme.primary2,
                  borderTopRightRadius: 10,
                  borderBottomRightRadius: 10,
                },
              ]}
            >
              <Text style={{ color: theme.white, fontSize: 14 }}>
                {"Mobile Number"}
              </Text>
            </TouchableOpacity>
          </View>
          {loginWithEmail == true ? (
            <Input
              value={email}
              onChangeText={(e) => setEmail(e)}
              keyboardType="email-address"
              placeholder="Email"
              maxLength={255}
              style={{ marginVertical: 20 }}
            />
          ) : (
            <View style={styles(theme).mobileTextInputView}>
              <View style={{ flex: 0.3 }}>
                <CountryPicker />
              </View>
              <View style={{ flex: 0.7 }}>
                <Input
                  value={value.replace(/[^0-9]/g, "")}
                  onChangeText={(e) => setValue(e)}
                  keyboardType="numeric"
                  placeholder="Mobile Number"
                  maxLength={10}
                  style={{ marginVertical: 20, width: "100%" }}
                />
              </View>
            </View>
          )}
          {!isEnabled && (
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
          )}
          <View style={styles(theme).otpToggleView}>
            <Text style={{ color: theme.white, fontSize: 12, marginRight:10 }}>
              {"Login with OTP"}
            </Text>
            <Switch
              style={{ alignSelf: "flex-end"}}
              trackColor={{ false: theme.primary2, true: theme.secondary }}
              thumbColor={isEnabled ? theme.white : theme.white}
              ios_backgroundColor="#3e3e3e"
              onValueChange={toggleSwitch}
              value={isEnabled}
            />
          </View>
          <View style={styles(theme).dontHaveAccount}>
            <Text style={styles(theme).dontHaveAccountText}>
              {"Don't have an account?"}{" "}
              <Text
                onPress={() => navigation.navigate(strings.signup.screenTitle)}
                style={{ color: theme.secondary }}
              >
                {"SignUp"}
              </Text>
            </Text>
          </View>
          <Button
            onPress={onLogin}
            buttonText={
              !isEnabled
                ? strings.login.loginToYourAccount
                : strings.login.sendOtp
            }
            disabled={
              loginWithEmail == true
                ? email.length == 0
                  ? true
                  : isEnabled == false && password.length == 0
                  ? true
                  : false
                : value.length == 0
                ? true
                : isEnabled == false && password.length == 0
                ? true
                : false
            }
            // disabled={(value.length == 0 || email.length == 0) && isEnabled ? true : false}
          />
        </ScrollView>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
}
