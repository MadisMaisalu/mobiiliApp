import React from 'react';
import {StyleSheet, SafeAreaView, Text, View} from "react-native";

function americano() {
    
    return (
        <SafeAreaView>
            <View style={styles.explanation}>
                <Text style={styles.explanationText}>Similar flavor to black coffee,
                the americano consists of an espresso shot diluted in hot water.</Text>
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

export default americano