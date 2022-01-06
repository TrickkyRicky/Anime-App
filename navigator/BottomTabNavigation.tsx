import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { MyTabsAnime, MyTabsManga } from './TopTabNavigation';
import { Ionicons } from '@expo/vector-icons';

const Tab = createBottomTabNavigator();

type Props = {
	name: keyof typeof Ionicons.glyphMap;
};

const BottomTabNavigation = () => {
	return (
		<Tab.Navigator
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
				tabBarActiveTintColor: '#312e81',
				tabBarInactiveTintColor: 'gray'
				// headerShown: false
			})}
		>
			<Tab.Screen name='Anime' component={MyTabsAnime} />
			<Tab.Screen name='Manga' component={MyTabsManga} />
		</Tab.Navigator>
	);
};

export default BottomTabNavigation;
