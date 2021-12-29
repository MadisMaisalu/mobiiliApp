import React from 'react';
import {StyleSheet, SafeAreaView, Image, Text, TouchableOpacity} from "react-native";

function Settings({ navigation }) {

    const pressHandlerBlackCoffee = () => {
        navigation.navigate('blackCoffee');
    }
    const pressHandlerAmericano = () => {
        navigation.navigate('americano');
    }
    const pressHandlerCappuccino = () => {
        navigation.navigate('cappuccino');
    }
    const pressHandlerEspresso = () => {
        navigation.navigate('espresso');
    }
    const pressHandlerLatte = () => {
        navigation.navigate('latte');
    }


    return (
        <SafeAreaView>
            <TouchableOpacity style={styles.box} onPress={pressHandlerBlackCoffee}>
            <Text style={styles.tekst}>Black coffee</Text>
            <Text style={styles.currentlyDisabled}>Regular coffee without milk</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.box} onPress={pressHandlerLatte}>
                <Text style={styles.tekst}>Latte</Text>
                <Text style={styles.currentlyDisabled}>Shot of espresso with steamed milk</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.box} onPress={pressHandlerCappuccino}>
                <Text style={styles.tekst}>Cappuccino</Text>
                <Text style={styles.currentlyDisabled}>A latte with more foam than steamed milk</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.box} onPress={pressHandlerAmericano}>
                <Text style={styles.tekst}>Americano</Text>
                <Text style={styles.currentlyDisabled}>Espresso shot diluted in hot water</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.box} onPress={pressHandlerEspresso}>
                <Text style={styles.tekst}>Espresso</Text>
                <Text style={styles.currentlyDisabled}>A strong coffee shot, can be used as foundation</Text>
            </TouchableOpacity>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    tekst: {
        marginTop: '5%',
        marginLeft: '5%',
        fontSize: 20,
        color: '#000',
    },
    currentlyDisabled: {
        marginLeft: '5%',
        fontSize: 13,
        color: '#909090',
        marginBottom: '4%'
    },
    box: {
        borderBottomWidth: 0.3,
        borderBottomColor: '#909090'
    }

})

export default Settings;