import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { MyTabsAnime, MyTabsManga } from './TopTabNavigation';
import { Ionicons } from '@expo/vector-icons';

import { Dimensions } from 'react-native';

const screenWidth = Dimensions.get('window').width;
const screenHeight = Dimensions.get('window').height;
console.log(screenWidth);

const Tab = createBottomTabNavigator();

type Props = {
	name: keyof typeof Ionicons.glyphMap;
};

const BottomTabNavigation = () => {
	return (
		<Tab.Navigator
			initialRouteName='Anime'
			screenOptions={({ route }) => ({
				tabBarIcon: ({ focused, color, size }) => {
					let iconName;

					if (route.name === 'Manga') {
						iconName = focused ? 'book' : 'book-outline';
					} else if (route.name === 'Anime') {
						iconName = focused ? 'tv' : 'tv-outline';
					}
					return <Ionicons name={iconName} size={size} color={color} />;
				},
				tabBarActiveTintColor: '#CCC',
				tabBarInactiveTintColor: '#fff',
				tabBarActiveBackgroundColor: '#3730a3',
				tabBarInactiveBackgroundColor: '#3730a3',
				tabBarStyle: {
					borderTopWidth: 0,
					elevation: 0,
					paddingBottom: 0
					// marginBottom: 0,
					// height: 60
				},
				tabBarItemStyle: {
					paddingBottom: screenWidth < 400 ? 0 : 20
				},
				// tabBarLabelPosition: 'beside-icon',
				headerTitle: 'Anime App'
				// headerShown: false
			})}
		>
			<Tab.Screen name='Anime' component={MyTabsAnime} />
			<Tab.Screen name='Manga' component={MyTabsManga} />
		</Tab.Navigator>
	);
};

export default BottomTabNavigation;
