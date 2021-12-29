import React from 'react';
import {StyleSheet, SafeAreaView, Text, View} from "react-native";

function latte() {
    
    return (
        <SafeAreaView>
            <View style={styles.explanation}>
                <Text style={styles.explanationText}>As the most popular coffee drink,
                the latte is made from a shot of espresso with steamed milk and
                just a bit of foam. It can usually be ordered as plain or
                with a flavor.</Text>
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
        marginTop: '45%',
        maxWidth: '80%',
        marginLeft: '8%',

    },
    explanationText: {
        fontSize: 20,
        textAlign: "center",
        lineHeight: 40
    }
})

export default latte