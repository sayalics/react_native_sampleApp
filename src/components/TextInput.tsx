import React = require("react")
import { StyleSheet, TextInput, TouchableOpacity, View } from "react-native"
import { ThemeContext } from "../context/ThemeContext";
import RightIcon from "react-native-vector-icons/FontAwesome";
import { SCREEN_SIZE } from "../utils/screenSize";

function Input({value, onChangeText, keyboardType, placeholder, maxLength, style, secureTextEntry, rightIcon, onRightIconPress}) {
    const theme = React.useContext(ThemeContext);
    return (
        <View style={{flexDirection:'row', alignItems:'center', justifyContent:'space-between'}}>
            <TextInput 
                value={value}
                maxLength={maxLength}
                onChangeText={onChangeText}
                keyboardType={keyboardType ? keyboardType : "default"}
                placeholder={placeholder}
                placeholderTextColor={theme.white}
                style={[styles(theme).textInput, style]}
                secureTextEntry={secureTextEntry}
            />
            {rightIcon &&
            <TouchableOpacity style={styles(theme).rightIconStyle} onPress={() => onRightIconPress()}>
                <RightIcon name={secureTextEntry == true ? "eye-slash" : "eye" } color={theme.white} size={20}  />
            </TouchableOpacity>
            }
        </View>
    )
}

Input.prototype={
    value: String,
    onChangeText: Function,
    keyboardType: String,
    placeholder: String,
    maxLength: Number,
    secureTextEntry: Boolean,
    rightIcon: Boolean,
    onRightIconPress: Function
}

export default Input;

Input.defaultProps = {
    keyboardType: "default",
    maxLength: Infinity,
    style: {},
    value:"",
    placeholder:"",
    onChangeText: () => {},
    secureTextEntry: false,
    rightIcon: false,
    onRightIconPress: () => {},
}
const styles = (theme) => StyleSheet.create({
    textInput: {
        width: SCREEN_SIZE.width - 40,
        height: 48,
        borderWidth: 1,
        borderColor: theme.white,
        borderRadius: 5,
        paddingHorizontal: 10,
        color: theme.white,
      },
      rightIconStyle:{
        right:15,
        position:'absolute'
      }
})