import React from 'react';
import {StyleSheet, SafeAreaView, Text, View} from "react-native";

function blackCoffee() {

    return (
        <SafeAreaView>
            <View style={styles.explanation}>
                <Text style={styles.explanationText}>Simplest form of coffee.
                    Only hot water with ground coffee beans. Usually without sugar.
                </Text>
            </View>

        </SafeAreaView>
    );
}

const styles = StyleSheet.create({

    icon: {
        width: 120,
        height: 153,
    },
    explanation: {
        marginTop: '50%',
        maxWidth: '80%',
        marginLeft: '8%',

    },
    explanationText: {
        fontSize: 20,
        textAlign: "center",
        lineHeight: 40
    }
})

export default blackCoffee