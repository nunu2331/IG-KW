import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {Splash,Register1,Register2, Login,Feed, WelcomeAuth} from '../pages';
import Dashboard from '../pages/Dashboard';
// import LoginScreen from '../pages/Login';

const Stack = createStackNavigator();

const Router = () => {
    return (
        <Stack.Navigator>
            <Stack.Screen name="Splash" component={Splash} options={{
                headerShown: false
            }}/>
            <Stack.Screen name="Login" component={Login} options={{
                headerShown: false
            }}/>
            <Stack.Screen name="Register1" component={Register1} options={{
                headerShown: false
            }}/>
            <Stack.Screen name="Register2" component={Register2} options={{
                headerShown: false
            }}/>
            <Stack.Screen name="WelcomeAuth" component={WelcomeAuth} options={{
                headerShown: false
            }}/>
            <Stack.Screen name="Dashboard" component={Dashboard} options={{
                headerShown: false
            }}/>
        </Stack.Navigator>
    )
}

export default Router;