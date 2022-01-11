import React from "react";
// import { createSharedElementStackNavigator } from 'react-navigation-shared-element';
import { createStackNavigator } from "@react-navigation/stack";

import DetailScreen from "../screens/DetailScreen";
import BottomTabNavigation from "./BottomTabNavigation";

const Stack = createStackNavigator();

// export const TopAiringStackNavigation = () => {
// 	return (
// 		<Stack.Navigator initialRouteName='TopAiring'>
// 			<Stack.Screen name='TopAiring' component={TopAiringAnime} />
// 			<Stack.Screen name='DetailScreen' component={DetailScreen} />
// 		</Stack.Navigator>
// 	);
// };

const MyStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Home"
        component={BottomTabNavigation}
        options={{ headerShown: false }}
      />
      <Stack.Screen name="Details" component={DetailScreen} options={{}} />
    </Stack.Navigator>
  );
};

// sharedElements={(route, otherRoute, showing) => {
// 	const { anime } = route.params;
// 	return [`anime.${anime.id}.main_picture.medium`];
// }}

export default MyStack;
