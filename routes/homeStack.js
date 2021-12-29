import { createStackNavigator } from 'react-navigation-stack';
import { createAppContainer } from "react-navigation";
import HomeScreen from '../app/screens/HomeScreen';
import How from "../app/screens/How";
import CoffeeTypes from "../app/screens/CoffeeTypes";
import Press from "../app/screens/HowPress"
import Filter from "../app/screens/Filter"
import americano from "../app/screens/coffeeTypes/americano";
import blackCoffee from "../app/screens/coffeeTypes/blackCoffee";
import cappuccino from "../app/screens/coffeeTypes/cappuccino";
import espresso from "../app/screens/coffeeTypes/espresso";
import latte from "../app/screens/coffeeTypes/latte";

const screens = {
    Home: {
        screen: HomeScreen
    },
    How: {
        screen: How,
        navigationOptions: {
            title: 'Choose style',
        }
    },
    Press: {
        screen: Press,
        navigationOptions: {
            title: 'French Press coffee',
        }
    },
    Filter: {
        screen: Filter,
        navigationOptions: {
            title: 'Pour over filter coffee',
        }
    },
    CoffeeTypes: {
        screen: CoffeeTypes,
        navigationOptions: {
            title: 'Coffee types'
        }
    },
    blackCoffee: {
        screen: blackCoffee,
        navigationOptions: {
            title: 'Black coffee'
        }
    },
    americano: {
        screen: americano,
        navigationOptions: {
            title: 'Americano'
        }
    },
    cappuccino: {
        screen: cappuccino,
        navigationOptions: {
            title: 'Cappuccino'
        }
    },
    latte: {
        screen: latte,
        navigationOptions: {
            title: 'Latte'
        }
    },
    espresso: {
        screen: espresso,
        navigationOptions: {
            title: 'Espresso'
        }
    }
}


const HomeStack = createStackNavigator(screens, {
    defaultNavigationOptions: {
        headerTitleStyle: {
            color: '#fff'
        },
        headerTintColor: '#fff',
        headerStyle: {
            backgroundColor: '#3D1700',

        },
        cardStyle: {
            backgroundColor: '#fff',
        },
    }
});

export default createAppContainer(HomeStack);