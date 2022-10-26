import * as React from 'react';
import { ScrollView, Text, View, StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import AppBar from '../AppBar';
import ViewPermissionPatient from './ViewPermissionPatient';
import AddPermissionPatient from './AddPermissionPatient';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import GrantPermissionPatient from './GrantPermissionPatient';


function ViewPermissions () {
  console.log('View')
  return(
  <ViewPermissionPatient />);
};


function AddPermissions(){
  console.log('Add')
  return(
  <AddPermissionPatient />);
};


const Tab = createMaterialTopTabNavigator();
const Stack = createNativeStackNavigator();

export default function PatientPermission() {
  
  return (
    <NavigationContainer independent={true}>
    
      {/* <AppBar message={"My Permissions"} /> */}
      <Tab.Navigator screenOptions={{
         tabBarActiveTintColor: 'white',
          tabBarStyle:{
                //  backgroundColor: '#b0e0e6',
                backgroundColor: 'royalblue'
           },
           
         }} >
        <Tab.Screen name="View Permissions" component={ViewPermissions} />
        <Tab.Screen name="Add Permissions" component={AddPermissions} />
      </Tab.Navigator>
    </NavigationContainer>
  
  );
}

const styles = StyleSheet.create({
    container: {
      // backgroundColor: '#b0e0e6',
      backgroundColor: 'cornflowerblue',
      height: '100%'
    },
    
  
  });

