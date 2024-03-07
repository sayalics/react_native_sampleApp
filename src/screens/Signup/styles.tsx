import { StyleSheet } from "react-native";
import { SCREEN_SIZE } from "../../utils/screenSize";

export const styles = (theme) => StyleSheet.create({
    container:{
        flex: 1,
        backgroundColor: theme.primary,
        alignItems: 'center',
        justifyContent: 'center',
    },
    mainView:{
        display:"flex",
        alignItems: 'center',
        justifyContent: 'center',
    },
    mobileTextInputView: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
      },
      alreadyHaveAccount: {
        justifyContent: "center",
        alignItems: "center",
        marginTop:20
      },
      alreadyHaveAccountText: {
        color: theme.white,
        fontFamily: "poppins-regular",
        fontSize: 16,
      },
})