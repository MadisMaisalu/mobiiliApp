import React from 'react';
import {StyleSheet, SafeAreaView, Text, View} from "react-native";

function Filter() {



    return (
        <SafeAreaView>
            <View style={styles.tutorial}>
                <Text style={styles.tutorialStep}>1. Put the filter in the brewer and rinse the paper</Text>
                <Text style={styles.tutorialStep}>2. Pour out the water from the cup and grind 16g of coarse coffee powder</Text>
                <Text style={styles.tutorialStep}>3. Pour 50ml of water and wait for 30 seconds.</Text>
                <Text style={styles.tutorialStep}>4. After 30 seconds pour 150ml water more. Give it a small swirl.</Text>
                <Text style={styles.tutorialStep}>5. After the rest of coffee has gone through filter, pour in the rest of the water</Text>
                <Text style={styles.tutorialStep}>6. Give a small swirl after pouring the last bit of water and wait until it finishes. Coffee is now ready</Text>
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
        marginTop: '8%',
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

export default Filter;