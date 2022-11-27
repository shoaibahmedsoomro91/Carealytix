import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Home, Entries, AddEntry } from '../screens';

const Stack = createNativeStackNavigator();

export function RootStack() {
  return (
    <Stack.Navigator 
      initialRouteName="Home"
      screenOptions={{
        headerStyle: {
          backgroundColor: '#f4511e',
        },
        headerTintColor: '#fff',
        headerTitleStyle: {
          fontWeight: 'bold',
        },
      }}
    >
      <Stack.Screen
        name="Home"
        component={Home}
        options={{
          headerShown: true,
        }}
      />
      <Stack.Screen
        name="Entries"
        component={Entries}
        options={{
          headerShown: true,
          title : ''
        }}
      />
      <Stack.Screen
        name="AddEntry"
        component={AddEntry}
        options={{
          headerShown: true,
        }}
      />      
    </Stack.Navigator>
  );
}
