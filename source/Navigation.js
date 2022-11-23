import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { Provider } from 'react-redux';
//Custom Component
import AddProduct from './product/AddProduct';
import ViewProduct from './product/ViewProduct';
import ProductRating from './product/ProductRating';
import Home from './Home';
import Colors from './asset/Colors';
import Font from './asset/Font';



const Stack = createStackNavigator()
export default function NavigationScreen() {
    return (

        <NavigationContainer>
            <Stack.Navigator initialRouteName='Home'>
                <Stack.Screen name='Home' component={Home} options={{ title: 'ADD PRODUCT', headerShown: false}} />
                <Stack.Screen name='AddProduct' component={AddProduct} 
                options={{ title: 'ADD PRODUCT', headerTitleStyle: { fontWeight: "bold", fontSize:Font.TITLE }, headerStyle: { backgroundColor: Colors.primaryColour }}} />

                <Stack.Screen name='ViewProduct' component={ViewProduct}
                    options={{ title: 'VIEW PRODUCT', headerTitleStyle: { fontWeight: "bold", fontSize: 24 }, headerStyle: { backgroundColor: Colors.primaryColour } }} />

                <Stack.Screen name='ProductRating' component={ProductRating} options={{ title: 'PRODUCTS RATING', headerTitleStyle: { fontWeight: "bold", fontSize: 24 }, headerStyle: { backgroundColor: Colors.primaryColour } }} />

            </Stack.Navigator>
        </NavigationContainer>

    )
}

/*import { createStackNavigator } from "@react-navigation/stack";
import {createAppContainer} from 'react-navigation'

//Custom Component
import ViewShipx from './components/shipxComponents/ViewShipx';
import ViewShipxDetails from './components/shipxComponents/ViewShipDetails';


const screens ={
    ViewShipx: {
        screen: ViewShipx
    },
    ViewShipxDetails:{
        screen: ViewShipxDetails,
    }
}

const Stack = createStackNavigator({screens})

export default createAppContainer(Stack)*/
