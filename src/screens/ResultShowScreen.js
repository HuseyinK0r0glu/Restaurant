import React , {useState,useEffect} from "react";
import {Text,View,StyleSheet,FlatList,Image} from 'react-native';
import yelp from "./api/yelp";

const ResultsShowScreen = ({ navigation }) => {

    // when we are using useState we have to provide default value 
    // for arrays it was empty array like "[]" and for objects it is null 

    const [result,setResult] = useState(null);
    const id = navigation.getParam('id');

    const getResult = async (id) => {
        const response = await yelp.get(`${id}`);
        setResult(response.data);
    };

    useEffect(() => {
        getResult(id);
    },[]);

    if(!result){
        return null;
    }

    return <View>

        {/*Photos are empty so I could not render them on the screen instead I showed some infos about the restaurant.*/}
        <Text style = {styles.name}>{result.name}</Text>
        <Image style = {styles.image} source = {{uri : result.image_url}}/>
        <Text style = {styles.phone} > Phone Number: {result.display_phone}</Text>
        <Text style = {styles.address}>Adress: {result.location.address1}</Text>

    </View>
}

const styles = StyleSheet.create({
    image: {
        height : 200,
        width : 300,
        marginLeft : 15
    },
    name : {
        fontSize : 18,
        fontWeight : 'bold',
        marginLeft : 15
    },
    phone : {
        fontSize : 18,
        fontStyle : 'bold',
        marginLeft : 15
    },
    image:{
        width:250,
        height:120,
        borderRadius:4,
        marginBottom:5,
        marginLeft : 15
    },
    address:{
        fontSize : 18,
        fontStyle : 'bold',
        marginLeft : 16
    }
});

export default ResultsShowScreen;