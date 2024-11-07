import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import SignUpScreen from './screens/signupScreen';
import BasicInformation from './screens/basicInfoScreen';
import RelationshipDetails from './screens/relationshipGoalsScreen';
import LoginScreen from './screens/SignInScreen';
import ForgotPassword from './screens/ForgotPassword';
import ResetPassword from './screens/ResetPassword';

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown: false}} initialRouteName='Sign-In'>
        <Stack.Screen name='Sign-In' component={LoginScreen}/>
        <Stack.Screen name='Forgot-Password' component={ForgotPassword} />
        <Stack.Screen name='Reset-Password' component={ResetPassword}/>
        <Stack.Screen name="SignUp" component={SignUpScreen} options={{ title: 'Sign Up' }} />
        <Stack.Screen name="BasicInformation" component={BasicInformation} options={{ title: 'Basic Information' }} />
        <Stack.Screen name="RelationshipDetails" component={RelationshipDetails} options={{ title: 'Relationship Details' }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
