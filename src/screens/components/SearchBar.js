import React from "react";
import {View,TextInput,StyleSheet} from "react-native"
import { Feather } from '@expo/vector-icons';

<<<<<<< HEAD
const SearchBar = ( {term , onTermChange , onTermSubmit}) => {
=======
const SearchBar = ( {term , onTermChange}) => {
>>>>>>> 85cb698f18fbd1f5fe183a44731bee8ec54c7773

    return <View style = {styles.backgroundStyle}>
        <Feather name = "search" style = {styles.iconStyle}/>
        <TextInput
            autoCapitalize= "none"
            autoCorrect = {false}
            style = {styles.inputStyle}
            placeholder="Search"
            value={term}
<<<<<<< HEAD
            onChangeText={onTermChange}
            onEndEditing={onTermSubmit}
        /> 
=======
            onChangeText={ newTerm => onTermChange(newTerm)}
        />
>>>>>>> 85cb698f18fbd1f5fe183a44731bee8ec54c7773
    </View>
}

const styles = StyleSheet.create({
    backgroundStyle:{
        marginTop : 10,
        /// hex code for color ==>  #F0EEEE == rgb(240,240,240)
        backgroundColor: '#F0EEEE',
        height:50,
        borderRadius:5,
        marginHorizontal:15,
        flexDirection: 'row'
    }, 
    inputStyle : {
        flex : 1,
        fontSize : 18
    },
    iconStyle:{
        fontSize : 35,
        alignSelf : 'center',
        marginHorizontal : 15
    }

});

export default SearchBar;