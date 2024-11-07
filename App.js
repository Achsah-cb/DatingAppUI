import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import SignUpScreen from './screens/signupScreen';
import BasicInformation from './screens/basicInfoScreen';
import RelationshipDetails from './screens/relationshipGoalsScreen';
import LoginScreen from './screens/loginScreen';

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="SignUp">
        <Stack.Screen name="SignUp" component={SignUpScreen} options={{ title: 'Sign Up' }} />
        <Stack.Screen name="Login" component={LoginScreen} options={{ title: 'Login' }} />
        <Stack.Screen name="BasicInformation" component={BasicInformation} options={{ title: 'Basic Information' }} />
        <Stack.Screen name="RelationshipDetails" component={RelationshipDetails} options={{ title: 'Relationship Details' }} />

      </Stack.Navigator>
    </NavigationContainer>
  );
}
