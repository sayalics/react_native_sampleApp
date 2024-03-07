import { StyleSheet } from "react-native";

export const styles = theme =>
  StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: theme.primary,
      alignItems: 'center',
      justifyContent: 'flex-start',
    },
    mainView: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'flex-start',
      marginHorizontal: 20,
    },
    enterOtpText: {
      fontSize: 20,
      fontFamily: 'poppins-semibold',
      color: theme.white,
      lineHeight: 32,
      marginTop: 30,
    },

    inputsContainer: {
      flexDirection: 'row',
      flex: 1,
      justifyContent: 'center',
      marginTop: 40,
    },
    codeContainer: {
      borderWidth: 1,
      borderRadius: 12,
      borderColor: theme.primary2,
      height: 48,
      width: 48,
      margin: 5,
      justifyContent: 'center',
      alignItems: 'center',
    },
    codeText: {
      fontSize: 20,
      color: theme.border,
    },
    hiddenInput: {
      ...StyleSheet.absoluteFillObject,
      opacity: 0.01,
    },
    stick: {
      width: 2,
      height: 30,
      backgroundColor: theme.border,
    },
    activePinCodeContainer: {
      tintColor: theme.white,
      borderColor: theme.border,
    },
    resendOtpText: {
      fontSize: 16,
      fontFamily: 'poppins-regular',
      color: theme.secondary,
      marginTop: 30,
    },
    buttonStyle: {
      bottom: 0,
      position: 'absolute',
      marginBottom: 30,
    },
  });