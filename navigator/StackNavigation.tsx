import React from 'react';
import { View, Text } from 'react-native';
// import { createSharedElementStackNavigator } from 'react-navigation-shared-element';
import { createStackNavigator } from '@react-navigation/stack';

import TopAiringAnime from '../screens/Anime/TopAiringAnime';
import DetailScreen from '../screens/DetailScreen';
import BottomTabNavigation from './BottomTabNavigation';

const Stack = createStackNavigator();

export const DemoStacks = () => {
	return (
		<Stack.Navigator initialRouteName='demo'>
			<Stack.Screen name='demo' component={DetailScreen} />
		</Stack.Navigator>
	);
};
// export const TopAiringStackNavigation = () => {
// 	return (
// 		<Stack.Navigator initialRouteName='TopAiring'>
// 			<Stack.Screen name='TopAiring' component={TopAiringAnime} />
// 			<Stack.Screen name='DetailScreen' component={DetailScreen} />
// 		</Stack.Navigator>
// 	);
// };

// export const CombinedStack = () => {
// 	return (
// 		<Stack.Navigator>
// 				<Stack.Screen name='DetailScreen' component={BottomTabNavigation} />
// 		</Stack.Navigator>
// 	);
// };

// sharedElements={(route, otherRoute, showing) => {
// 	const { anime } = route.params;
// 	return [`anime.${anime.id}.main_picture.medium`];
// }}
