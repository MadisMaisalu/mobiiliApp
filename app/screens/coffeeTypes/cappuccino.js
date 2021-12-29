import React from 'react';
import {StyleSheet, SafeAreaView, Text, View} from "react-native";

function cappuccino() {
    
    return (
        <SafeAreaView>
            <View style={styles.explanation}>
                <Text style={styles.explanationText}>Cappuccino is a latte,
                that is made with more foam than steamed milk. It often has many
                choices on how you want it made.</Text>
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

export default cappuccino