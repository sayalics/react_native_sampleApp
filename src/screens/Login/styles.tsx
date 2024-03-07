import { StyleSheet } from "react-native";
import { SCREEN_SIZE } from "../../utils/screenSize";

export const styles = (theme) =>
  StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: theme.primary,
      alignItems: "center",
      justifyContent: "center",
    },
    mainView: {
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
    },
    loginText: {
      fontSize: 20,
      fontFamily: "poppins-semibold",
      color: theme.white,
      lineHeight: 32,
      marginBottom: 30,
    },
    mobileTextInputView: {
      width: SCREEN_SIZE.width - 40,
      flexDirection: "row",
      alignItems: "center",
      justifyContent: "center",
    },
    textInput: {
      width: "70%",
      height: 48,
      borderWidth: 1,
      borderColor: theme.white,
      borderRadius: 5,
      paddingHorizontal: 10,
      color: theme.white,
    },
    dontHaveAccount: {
      justifyContent: "center",
      alignItems: "center",
    },
    dontHaveAccountText: {
      color: theme.white,
      fontFamily: "poppins-regular",
      fontSize: 16,
    },
    loginToggleView: {
      flexDirection: "row",
      marginBottom: 50,
      alignItems: "center",
      justifyContent: "space-between",
    },
    toggleSubView: {
      height: 43,
      width: 120,
      alignItems: "center",
      justifyContent: "center",
    },
    otpToggleView: {
      flexDirection: "row",
      alignItems: "center",
      marginBottom: 30,
      justifyContent: "center",
      alignSelf: "flex-end",
    },
  });
