import React from 'react';
import { StyleSheet  } from 'react-native';
import { DefaultTheme, NavigationContainer} from '@react-navigation/native';
import AppNavigator from './app/Navigation/AppNavigator';
// import {Provider as IpfsProvider} from 'ipfs-http-client';
// import {Provider as PaperProvider} from 'react-native-paper';



const App = () => {

  return(
  
    <NavigationContainer theme={{...DefaultTheme, colors:{...DefaultTheme.colors}}}>
      <AppNavigator />
    
</NavigationContainer>

  );

};

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'blue',
  },

});

export default App;
