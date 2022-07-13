import React from "react";
import { View, Image } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import { NavigationContainer} from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { AboutScreenNavigator, ScreenNavigator,NewFileScreenNavigator } from "./navigation/ScreenNav";
import { createStackNavigator } from "@react-navigation/stack";
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Foundation from 'react-native-vector-icons/Foundation';
import NoteS from "./screens/NotePage";
import EditS from "./screens/EditPage";

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

const CustomTabBarButton = ({ children, onPress }) => (
  <TouchableOpacity
    style={{
      top: -35,
      justifyContent: 'center',
      alignItems: 'center',
      shadowColor: '#000000',
      shadowOffset: {
        width: 0,
        height: 10,
      },
      shadowOpacity: 0.25,
      shadowRadius: 3.5,
      borderRadius: 37.5,
    }}
    onPress={onPress}
  >
    <View style={{
      width: 75,
      height: 75,
      borderRadius: 37.5,
      backgroundColor: '#EAD772'
    }}>
      {children}
    </View>
  </TouchableOpacity>
);

function BottomTab() {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarShowLabel: false,
        headerShown: false,
        tabBarActiveTintColor: '#ffff', tabBarInactiveTintColor: '#353643',
        tabBarStyle: {
          position: 'absolute',
          bottom: 25,
          left: 20,
          right: 20,
          backgroundColor: '#7E78D2',
          borderRadius: 15,
          height: 90,
          shadowColor: '#000000',
          shadowOffset: {
            width: 0,
            height: 10,
          },
          shadowOpacity: 0.25,
          shadowRadius: 3.5,
          elevation: 5,
        }
      }}>
      <Tab.Screen name="Home" component={ScreenNavigator}
        options={{
          tabBarLabel: 'Home',
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="home" color={color} size={35} />
          ),
        }} />


      <Tab.Screen name="New" component={NewFileScreenNavigator}
        options={{
          tabBarIcon: ({ focused }) => (
            <Image source={require('./assets/plus.png')} resizeMode='contain' style={{ width: 45, height: 45, tintColor: '#fff' }} />
          ),
          tabBarButton: (props) => (
            <CustomTabBarButton {...props} />
          )
        }}
      />


      <Tab.Screen name="About" component={AboutScreenNavigator}
        options={{
          tabBarLabel: 'About',
          tabBarIcon: ({ color, size }) => (
            <Foundation name="info" color={color} size={35} />
          ),
        }} />

    </Tab.Navigator>
  );
}

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Tab"
          component={BottomTab}
          options={{ headerShown: false }}
        />
        <Stack.Screen name="Note"  options={{ headerShown: false }} component={NoteS} />
        <Stack.Screen name="Edit"  options={{ headerShown: false }} component={EditS} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;