import React , {useState} from 'react';
import { View,Text,StyleSheet } from 'react-native';
import SearchBar from './components/SearchBar';

const SearchScreen = () => {
    const [term , setTerm] = useState('');

    return <View>
<<<<<<< HEAD
        <SearchBar 
            term = {term} 
            onTermChange = { newTerm => setTerm(newTerm)} 
            onTermSubmit = { () => console.log('Term was submitted')}
        />
=======
        <SearchBar term = {term} onTermChange ={ newTerm => setTerm(newTerm)}/>
>>>>>>> 85cb698f18fbd1f5fe183a44731bee8ec54c7773
        <Text>Search Screen</Text>
        <Text>{term}</Text>
    </View>
}

const styles = StyleSheet.create({

});

export default SearchScreen;