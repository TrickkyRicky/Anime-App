import React, { useEffect } from 'react';
import { StackNavigationProp } from '@react-navigation/stack';

import { useSelector, useDispatch } from 'react-redux';
import { Box, Heading, HStack, Text, VStack } from 'native-base';
import { getAnimeData } from '../../store/Anime/Anime-Actions';

import TopAiringCard from '../../components/TopAiringCard';
import Carousel from '../../components/Carousel';
import { ScrollView, TouchableOpacity, FlatList, View } from 'react-native';
import { AnimeActions } from '../../store/Anime/Anime-Slice';
import { RootState } from '../../store/index';
import { useNavigation } from '@react-navigation/native';

interface ListingItem {
	item: {
		node: {
			id: number;
			main_picture: {
				large: string;
				medium: string;
			};
			title: string;
		};
		ranking: {
			rank: number;
		};
	};
}

type navList = {
	DetailScreen: {
		anime: ListingItem['item']['node'];
	};
};

type navProps = StackNavigationProp<navList, 'DetailScreen'>;

const TopAiringAnime = () => {
	const dispatch = useDispatch();
	const navigation = useNavigation<navProps>();
	// console.log(navigation.getState());
	const topAiring = useSelector(
		(state: RootState) => state.Anime.topAiring.anime
	);
	useEffect(() => {
		dispatch(AnimeActions.setTopAiringReset());
		dispatch(getAnimeData('airing'));
	}, []);

	return (
		<View style={{ width: '100%', backgroundColor: '#52376A' }}>
			<FlatList
				data={topAiring}
				keyExtractor={(item: ListingItem['item']) => item.node.id.toString()}
				renderItem={({ item }) => {
					const anime = item.node;
					return (
						<TouchableOpacity
							activeOpacity={0.4}
							style={{ width: '33.333%', paddingHorizontal: 10 }}
							onPress={() => navigation.navigate('DetailScreen', { anime })}
						>
							<TopAiringCard
								title={anime.title}
								image={anime?.main_picture?.medium}
								rank={item?.ranking?.rank}
							/>
						</TouchableOpacity>
					);
				}}
				horizontal={false}
				ListHeaderComponent={() => (
					<>
						<Text
							color='#fff'
							textAlign='center'
							fontSize='3xl'
							fontWeight={700}
							mb={2}
							fontFamily={'mont-bold'}
						>
							Top Airing Anime
						</Text>
						<Carousel />
					</>
				)}
				showsHorizontalScrollIndicator={false}
				numColumns={3}
			/>
		</View>
	);
};

export default TopAiringAnime;
