import React from "react";
import {
    StyleSheet,
    SafeAreaView,
    View,
    TouchableOpacity,
    Text,
} from 'react-native';



function HomeScreen({ navigation }) {

    const pressHandlerHow = () => {
        navigation.navigate('How');
    }

    const pressHandlerCoffeeTypes = () => {
        navigation.navigate('CoffeeTypes');
    }

    return(
        <SafeAreaView>

            <View style={styles.buttons}>
                    <TouchableOpacity  style={{marginBottom: '40%',}} onPress={pressHandlerHow}>
                        <Text style={styles.textButton}>How to make coffee</Text>
                    </TouchableOpacity>
                <TouchableOpacity  onPress={pressHandlerCoffeeTypes}>
                    <Text style={styles.textButton}>Coffee types</Text>
                </TouchableOpacity>
            </View>

        </SafeAreaView>

    )
}


    const styles = StyleSheet.create({
        container: {
            flex: 1,
            backgroundColor: '#fff',
            alignItems: 'center',
            justifyContent: 'center',
        },
        clock: {
            width: 100,
            height: 94,
            marginTop: '10%',

        },
        buttons: {
            marginTop: '40%',
            alignItems: 'center',
            justifyContent: 'center',
        },
        backbutton: {
            width: 100,
            height: 100,
        },
        welcome: {
            marginLeft: '5%',
            marginTop: '5%',
            color: '#707070',
            fontSize: 20,
        },
        textButton: {
          fontSize: 30,
            fontWeight: "bold",
            color: '#000',
        },
    });

export default HomeScreen;











