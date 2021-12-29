import React from 'react';
import {StyleSheet, SafeAreaView, Image, Text, View, Button, TouchableOpacity} from "react-native";

function How({ navigation }) {


        const pressHandlerPress = () => {
            navigation.navigate('Press');
        }

    const pressHandlerFilter = () => {
        navigation.navigate('Filter');
    }


    return (



        <SafeAreaView>
            <View style={styles.bothIcons}>
                <TouchableOpacity   onPress={pressHandlerPress}>
                    <Image style={styles.icon} source={require('../assets/coffeepress.png')} />
                </TouchableOpacity>
                <Text style={{marginBottom: '20%'}}>French Press</Text>

                <TouchableOpacity onPress={pressHandlerFilter}>
                    <Image style={styles.icon} source={require('../assets/coffeecup.png')} />
                </TouchableOpacity>
                <Text style={{marginBottom: '20%'}}>Pour over filter</Text>
            </View>

        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    tekst: {
        fontSize: 20,
    },
    icon: {
      width: 120,
        height: 153,
    },
    bothIcons: {
        marginTop: '20%',
        alignItems: 'center',
        justifyContent: 'center',
    }
})

export default How;