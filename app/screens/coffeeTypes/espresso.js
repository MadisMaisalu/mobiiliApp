import React from 'react';
import {StyleSheet, SafeAreaView, Text, View} from "react-native";

function espresso() {
    
    return (
        <SafeAreaView>
            <View style={styles.explanation}>
                <Text style={styles.explanationText}>A very strong shot of coffee,
                that is usually used a a base for other drinks or just drank
                plain.</Text>
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

export default espresso