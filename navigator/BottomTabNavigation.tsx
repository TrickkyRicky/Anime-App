import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { MyTabsAnime, MyTabsManga } from './TopTabNavigation';
import { Ionicons } from '@expo/vector-icons';
import { getHeaderTitle } from '@react-navigation/elements';
import { Dimensions, View, Image } from 'react-native';
import { Text } from 'native-base';

const screenWidth = Dimensions.get('window').width;
const screenHeight = Dimensions.get('window').height;

const Tab = createBottomTabNavigator();

type Props = {
	name: keyof typeof Ionicons.glyphMap;
};

const CustomHomeHeader = () => {
	return (
		<View
			style={{
				flex: 1,
				flexDirection: 'row',
				justifyContent: 'center',
				alignItems: 'center'
			}}
		>
			<Image
				source={{
					uri: 'https://aux.iconspalace.com/uploads/117428211619219278.png'
				}}
				style={{
					width: 30,
					height: 30,
					resizeMode: 'cover'
				}}
			/>

			<Text fontSize='3xl' fontFamily={'mont-extrabold'} color='#CCC'>
				AniManga
			</Text>
		</View>
	);
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
				tabBarActiveBackgroundColor: '#52376A',
				tabBarInactiveBackgroundColor: '#52376A',
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
				tabBarLabelPosition: 'beside-icon',
				headerTitle: CustomHomeHeader,
				headerStyle: {
					backgroundColor: '#52376A',
					shadowColor: '#52376A',
					elevation: 0
				}
			})}
		>
			<Tab.Screen name='Anime' component={MyTabsAnime} />
			<Tab.Screen name='Manga' component={MyTabsManga} />
		</Tab.Navigator>
	);
};

export default BottomTabNavigation;
