// import * as React from 'react';
// import { BottomNavigation, Text } from 'react-native-paper';
// import More from '../More';
// import HomePatient from './HomePatient';
// import PatientPermission from './PatientPermission';
// import { useNavigation } from '@react-navigation/native';
// import ProfilePatient from './ProfilePatient';
// import { Alert, BackHandler } from 'react-native';
// import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';



// const HomeRoute = () => <HomePatient />;

// const PermissionsRoute = () => <PatientPermission />;

// const ProfileRoute = () => <ProfilePatient />;

// const MoreRoute = () => <More />;

// const MainPatient = () => {

//   const navigation = useNavigation();

//   React.useEffect(() => {
//     const backAction = () => {
//         if (navigation.isFocused()) {
//           Alert.alert(
//             'Exit App',
//             'Exiting the application', 
//             [
//               {
//                 text: 'Cancel',
//                 onPress: () =>{
      
//                 },
//                 style: 'cancel'
//               }, 
//               {
//                 text: 'Ok',
//                 onPress: () =>{
//                   BackHandler.exitApp();
//                 }
//               }
//             ]
//           );
//             return true;
//         }

//     };
//     const backHandler = BackHandler.addEventListener("hardwareBackPress", backAction);
//     return () => backHandler.remove();
// }, [])

 

//   const [index, setIndex] = React.useState(0);
//   const [routes] = React.useState([
//     { key: 'home', title: 'Home', focusedIcon: require('../../images/focusedhome.png') , unfocusedIcon: require('../../images/home.png') },
//     { key: 'permissions', title: 'My Permissions', focusedIcon: require('../../images/focusedpermission.png'), unfocusedIcon: require('../../images/permission.png') },
//     { key: 'profile', title: 'Profile', focusedIcon: require('../../images/focusedprofile.png'), unfocusedIcon: require('../../images/profile.png') },
//     { key: 'more', title: 'More', focusedIcon: require('../../images/focusedmenu.png'), unfocusedIcon: require('../../images/menu.png') },
//   ]);


//   // const [routes] = React.useState([
//   //   { key: 'home', title: 'Home', focusedIcon: require('../../images/home.png')},
//   //   { key: 'permissions', title: 'My Permissions', focusedIcon: require('../../images/permission.png') },
//   //   { key: 'profile', title: 'Profile', focusedIcon: require('../../images/profile.png') },
//   //   { key: 'more', title: 'More', focusedIcon: require('../../images/menu.png') },
//   // ]);

//   // const [routes] = React.useState([
//   //   { key: 'home', title: 'Home'},
//   //   { key: 'permissions', title: 'My Permissions' },
//   //   { key: 'profile', title: 'Profile'},
//   //   { key: 'more', title: 'More' },
//   // ]);

//   const renderScene = BottomNavigation.SceneMap({
//     home: HomeRoute,
//     permissions: PermissionsRoute,
//     profile: ProfileRoute,
//     more: MoreRoute,
//   });

 

//   return (


//     <BottomNavigation
//       activeColor='blue'
      
//       navigationState={{ index, routes }}
//       onIndexChange={setIndex}
//       renderScene={renderScene}
      
      
//     />
//   );
// };

// export default MainPatient;

import * as React from 'react';
import { BottomNavigation, Text } from 'react-native-paper';
import More from '../More';
import HomePatient from './HomePatient';
import PatientPermission from './PatientPermission';
import { useNavigation } from '@react-navigation/native';
import ProfilePatient from './ProfilePatient';
import { Alert, BackHandler, Image } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

const Tab = createBottomTabNavigator();
const MainPatient = () => {

  
  const navigation = useNavigation();

  React.useEffect(() => {
    const backAction = () => {
        if (navigation.isFocused()) {
          Alert.alert(
            'Exit App',
            'Exiting the application', 
            [
              {
                text: 'Cancel',
                onPress: () =>{
      
                },
                style: 'cancel'
              }, 
              {
                text: 'Ok',
                onPress: () =>{
                  BackHandler.exitApp();
                }
              }
            ]
          );
            return true;
        }

    };
    const backHandler = BackHandler.addEventListener("hardwareBackPress", backAction);
    return () => backHandler.remove();
}, [])

 
return(
  <Tab.Navigator
  screenOptions={{
    tabBarActiveBackgroundColor: 'slateblue',
    tabBarActiveTintColor: 'white',
    tabBarInactiveTintColor: 'white',
    headerTintColor: 'white',
    headerTitleAlign: 'center',
    headerStyle: {
      backgroundColor: 'royalblue',
      
    },
     tabBarStyle:{
           //  backgroundColor: '#b0e0e6',
           backgroundColor: 'royalblue',
           height: 65,
        
      }}}
      >
      <Tab.Screen name="Home" component={HomePatient} options={{
          tabBarLabel: 'Home',
          tabBarIcon: ({ focused, color }) => (
           
                <Image source={ focused ? require('../../images/whitehome.png'): require('../../images/whitehome.png')}
                style={{flex: 1,
                  width: 30,
                  height: 30,
                  resizeMode: 'contain'}} />
            
            
          ),
        }}/>
      <Tab.Screen name="Permissions" component={PatientPermission} options={{
          tabBarLabel: 'My Permissions',
          tabBarIcon: ({focused, color}) => (
            <Image source={focused ? require('../../images/whitepermission.png'): require('../../images/whitepermission.png')}
            style={{flex: 1,
              width: 30,
              height: 30,
              resizeMode: 'contain'}}/>
          ),
        
        }}/>
      <Tab.Screen name="Profile" component={ProfilePatient} options={{
          tabBarLabel: 'My Profile',
          tabBarIcon: ({focused, color}) => (
            <Image source={focused ? require('../../images/whiteprofile.png') : require('../../images/whiteprofile.png') } 
            style={{flex: 1,
              width: 30,
              height: 30,
              resizeMode: 'contain'}}/>
          ),
      }} />
      <Tab.Screen name="More" component={More} options={{
        tabBarLabel: 'More',
        tabBarIcon: ({focused, color}) => (
          <Image source={focused ? require('../../images/whitemore.png') : require('../../images/whitemore.png') } 
          style={{flex: 1,
            width: 30,
            height: 30,
            resizeMode: 'contain'}}/>
        ),
      }} />

  </Tab.Navigator>
);

}


export default MainPatient;