import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Box, Heading, HStack, Text, VStack } from 'native-base';
import { getAnimeData } from '../../store/Anime/Anime-Actions';

import TopAiringCard from '../../components/TopAiringCard';
import Carousel from '../../components/Carousel';
import { ScrollView, TouchableOpacity, FlatList, View } from 'react-native';
import { AnimeActions } from '../../store/Anime/Anime-Slice';
import { RootState } from '../../store/index';

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

const TopAiringAnime = () => {
	const dispatch = useDispatch();
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
							style={{ width: '33.333%', paddingHorizontal: 10 }}
							onPress={() => console.log(`${anime.title} pressed`)}
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

				// showsVerticalScrollIndicator={false}
			/>
		</View>
	);
};

export default TopAiringAnime;
