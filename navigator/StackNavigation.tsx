import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import DetailScreen from "../screens/DetailScreen";
import DetailScreen2 from "../screens/DetailScreen2";
import BottomTabNavigation from "./BottomTabNavigation";
import MangaDetailScreen from "../screens/MangaDetailScreen";

const Stack = createStackNavigator();

const MyStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Home"
        component={BottomTabNavigation}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Details"
        component={DetailScreen}
        options={{
          cardOverlayEnabled: true,
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="Details2"
        component={DetailScreen2}
        options={{
          cardOverlayEnabled: true,
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="MangaDetails"
        component={MangaDetailScreen}
        options={{
          cardOverlayEnabled: true,
          headerShown: false,
        }}
      />
    </Stack.Navigator>
  );
};

export default MyStack;
