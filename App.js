import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Navigator from './routes/homeStack';
const Stack = createNativeStackNavigator();

const App = () => {
    return (
        <Navigator/>
    );
};

export default App;


