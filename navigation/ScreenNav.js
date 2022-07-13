import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import HomeS from "../screens/HomePage";
import AboutS from "../screens/AboutPage";
import NewNote from "../screens/NewPage";

const Stack = createStackNavigator();

const ScreenNavigator = () => {
  return (
    <Stack.Navigator screenOptions={{
      headerShown: false
    }}>
      <Stack.Screen name="Home" component={HomeS} />
    </Stack.Navigator>
  );
}

const AboutScreenNavigator = () => {
  return (
    <Stack.Navigator screenOptions={{
      headerShown: false
    }}>
      <Stack.Screen name="About" component={AboutS} />
    </Stack.Navigator>
  );
}


const NewFileScreenNavigator = () => {
  return (
    <Stack.Navigator screenOptions={{
      headerShown: false
    }}>
      <Stack.Screen name="NewFile" component={NewNote} />
    </Stack.Navigator>
  );
}

export { ScreenNavigator, AboutScreenNavigator, NewFileScreenNavigator };
