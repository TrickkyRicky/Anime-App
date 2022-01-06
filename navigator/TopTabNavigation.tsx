import React from 'react';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import TopAiringAnime from '../screens/Anime/TopAiringAnime';
import UpcomingAnime from '../screens/Anime/UpcomingAnime';
import SeasonalAnime from '../screens/Anime/SeasonalAnime';
import AnimeMovies from '../screens/Anime/AnimeMovies';
import PopularAnime from '../screens/Anime/PopularAnime';

import TopManga from '../screens/Manga/TopManga';
import TopNovels from '../screens/Manga/TopNovels';
import TopManhua from '../screens/Manga/TopManhua';
import TopManhwa from '../screens/Manga/TopManhwa';
import PopularManga from '../screens/Manga/PopularManga';

const Tab = createMaterialTopTabNavigator();

const options = {
	// tabBarLabelStyle: { fontSize: 12 },
	// tabBarItemStyle: { width: 100 },
	tabBarStyle: { backgroundColor: '#3730a3' },
	tabBarBounces: true,
	tabBarScrollEnabled: true,
	tabBarPressOpacity: 0.5,
	tabBarActiveTintColor: '#818cf8',
	tabBarInactiveTintColor: '#fff'
};
export const MyTabsAnime = () => {
	return (
		<Tab.Navigator screenOptions={options}>
			<Tab.Screen name='Top Airing Anime' component={TopAiringAnime} />
			<Tab.Screen name='Top Upcoming' component={UpcomingAnime} />
			<Tab.Screen name='Seasonal Anime' component={SeasonalAnime} />
			<Tab.Screen name='Top Movies' component={AnimeMovies} />
			<Tab.Screen name='Most Popular' component={PopularAnime} />
		</Tab.Navigator>
	);
};
export const MyTabsManga = () => {
	return (
		<Tab.Navigator screenOptions={options}>
			<Tab.Screen name='Top Manga' component={TopManga} />
			<Tab.Screen name='Top Novels' component={TopNovels} />
			<Tab.Screen name='Top Manhua' component={TopManhua} />
			<Tab.Screen name='Top Manhwa' component={TopManhwa} />
			<Tab.Screen name='Most Popular' component={PopularManga} />
		</Tab.Navigator>
	);
};