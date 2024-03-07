import React,{ useContext } from "react";
import { StyleSheet, Text, TouchableOpacity } from "react-native";
import { ThemeContext } from "../context/ThemeContext";
import { SCREEN_SIZE } from "../utils/screenSize";
import strings from "../utils/strings";

function Button({onPress,disabled, buttonText, style}) {
    const theme = useContext(ThemeContext);
    return(
        <TouchableOpacity
          onPress={onPress}
          style={[
            styles(theme).buttonStyle,
            {backgroundColor: disabled == false ? theme.secondary : theme.primary2},
            style,
          ]}>
          <Text style={styles(theme).buttonText}>{buttonText}</Text>
        </TouchableOpacity>
    )
}

Button.prototype = {
  onPress: Function,
  disabled: Boolean,
  buttonText: String,
  style: Object
}

export default Button;

Button.defaultProps = {
  disabled: false,
  style: {},
  onPress: () => {},
  buttonText:"",
}

const styles = (theme) => StyleSheet.create({
    buttonStyle: {
        width: SCREEN_SIZE.width - 40,
        height: 48,
        borderRadius: 12,
        marginTop: 20,
        alignItems: 'center',
        justifyContent: 'center',
      },
      buttonText: {
        fontFamily: 'poppins-bold',
        fontSize: 16,
        color: theme.white,
      },
})