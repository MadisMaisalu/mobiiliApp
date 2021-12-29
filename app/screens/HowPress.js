import React from 'react';
import {StyleSheet, SafeAreaView, Text, View} from "react-native";

function Press() {



    return (
        <SafeAreaView>
            <View style={styles.tutorial}>
                <Text style={styles.tutorialStep}>1. Preheat the Press</Text>
                <Text style={styles.tutorialStep}>2. Grind 16 grams of coffee beans for 250ml cup</Text>
                <Text style={styles.tutorialStep}>3. Boil the water and wait 30 seconds after. The perfect temperature should be around 80°C</Text>
                <Text style={styles.tutorialStep}>4. Pour the water on coffee powder and wait 4 minutes</Text>
                <Text style={styles.tutorialStep}>5. After 4 minutes, press down slowly on the press. The coffee is now ready.</Text>
            </View>

        </SafeAreaView>
    );
}

const styles = StyleSheet.create({

    icon: {
      width: 120,
        height: 153,
    },
    tutorial: {
        marginTop: '25%',
        alignItems: 'center',
        justifyContent: 'center',
        maxWidth: '80%',
        marginLeft: 'auto',
        marginRight: 'auto'

    },
    tutorialStep: {
        marginBottom: '8%',
        fontSize: 20,
        fontWeight: 'bold',
        textAlign: "center",
    }
})

export default Press;