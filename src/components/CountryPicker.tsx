import React, { useContext, useState } from "react";
import { View, StyleSheet } from "react-native";
import CountrySelect from 'rn-country-picker';
import { Images } from "../assets/images";
import { ThemeContext } from "../context/ThemeContext";

export default function CountryPicker() {
    const theme = useContext(ThemeContext);
    const [countryCode, setCountryCode] = useState<string>('91');
    const selectedValue = (value: string) => {
      setCountryCode(value);
    };
  
    return (
            <CountrySelect
            disable={false}
            animationType={'slide'}
            language="en"
            containerStyle={styles(theme).pickerStyle}
            pickerTitleStyle={styles(theme).pickerTitleStyle}
            dropDownImage={Images.DropDownArrow}
            selectedCountryTextStyle={styles(theme).selectedCountryTextStyle}
            countryNameTextStyle={styles(theme).countryNameTextStyle}
            pickerTitle={'Country Picker'}
            searchBarPlaceHolder={'Search......'}
            hideCountryFlag={false}
            hideCountryCode={false}
            countryFlagStyle={styles(theme).countryFlagStyle}
            searchBarStyle={styles(theme).searchBarStyle}
            // backButtonImage={<Icon name="angle-left" size={24} color={theme.white} />}
            // searchButtonImage={<Icon name="angle-left" size={24} color={theme.white} />}
            countryCode={countryCode}
            selectedValue={selectedValue}
          />
    )
}

const styles = (theme) => StyleSheet.create({
    pickerTitleStyle: {
        justifyContent: 'center',
        flexDirection: 'row',
        alignSelf: 'center',
        fontWeight: 'bold',
      },
      pickerStyle: {
        height: 48,
        width: '90%',
        alignSelf:'center',
        marginVertical: 10,
        borderColor: theme.white,
        alignItems: 'center',
        marginRight: 10,
        padding: 10,
        borderRadius: 5,
        borderWidth: 1,
        fontSize: 16,
      },
      selectedCountryTextStyle: {
        paddingLeft: 5,
        color: theme.white,
        textAlign: 'right',
      },
  
      countryNameTextStyle: {
        paddingLeft: 10,
        color: 'black',
        textAlign: 'right',
      },
  
      searchBarStyle: {
        flex: 1,
      },
      countryFlagStyle: {
        width: 20,
        height: 20,
        borderRadius:2
      },
})