import React from 'react';
import { StyleSheet, View } from 'react-native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { DefaultTheme, NavigationContainer } from '@react-navigation/native';
import GrantPermissionPatient from './GrantPermissionPatient';
import AddPermissionsPatient from './AddPermissionsPatient';

const Stack = createNativeStackNavigator();
const AddPermissionPatient = () => {

  return (
    <NavigationContainer independent={true}>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name='AddPermissionsPatient' component={AddPermissionsPatient} />
        <Stack.Screen name='GrantPermissionPatient' component={GrantPermissionPatient} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};


export default AddPermissionPatient;
