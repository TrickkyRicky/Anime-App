import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Box, HStack, Text, VStack } from 'native-base';
import { getAnimeData } from '../../store/Anime/Anime-Actions';

import Product from '../../components/Product';
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
	};
}
const data = [
	{
		id: 1,
		image: 'https://api-cdn.myanimelist.net/images/anime/6/44297.jpg',
		name: 'One Piece'
	},
	{
		id: 2,
		image: 'https://api-cdn.myanimelist.net/images/anime/1259/110227.jpg',
		name: 'Holo no Graffiti'
	},
	{
		id: 3,
		image: 'https://api-cdn.myanimelist.net/images/anime/6/44297.jpg',
		name: 'One Piece'
	},
	{
		id: 4,
		image: 'https://api-cdn.myanimelist.net/images/anime/1259/110227.jpg',
		name: 'Holo no Graffiti'
	},
	{
		id: 5,
		image: 'https://api-cdn.myanimelist.net/images/anime/6/44297.jpg',
		name: 'One Piece'
	},
	{
		id: 6,
		image: 'https://api-cdn.myanimelist.net/images/anime/1259/110227.jpg',
		name: 'Holo no Graffiti'
	},
	{
		id: 7,
		image: 'https://api-cdn.myanimelist.net/images/anime/6/44297.jpg',
		name: 'One Piece'
	},
	{
		id: 8,
		image: 'https://api-cdn.myanimelist.net/images/anime/1259/110227.jpg',
		name: 'Holo no Graffiti'
	}
];

const TopAiringAnime = () => {
	const dispatch = useDispatch();
	const topAiring = useSelector(
		(state: RootState) => state.Anime.topAiring.anime
	);
	console.log(topAiring.length);
	useEffect(() => {
		dispatch(AnimeActions.setTopAiringReset());
		dispatch(getAnimeData('airing'));
	}, []);

	return (
		<Box flex={1} bg='#3730a3' p={2}>
			<VStack mb={12} alignItems='center'>
				{/* <Text
					color='#fff'
					textAlign='center'
					fontSize='3xl'
					fontWeight={700}
					mb={2}
					fontFamily={'mont-bold'}
				>
					Top Airing Anime
				</Text> */}

				<FlatList
					data={topAiring}
					keyExtractor={(item: ListingItem['item']) => item.node.id.toString()}
					renderItem={({ item }) => {
						const anime = item.node;
						return (
							<TouchableOpacity
								onPress={() => console.log(`${anime.title} pressed`)}
							>
								<Product
									name={anime.title}
									image={anime?.main_picture?.medium}
								/>
							</TouchableOpacity>
						);
					}}
					horizontal={false}
					ListHeaderComponent={() => <Carousel />}
					// showsVerticalScrollIndicator={false}
					showsHorizontalScrollIndicator={false}
					numColumns={2}
					ItemSeparatorComponent={() => (
						<View style={{ paddingHorizontal: 2 }} />
					)}
				/>
			</VStack>
		</Box>
	);
};

export default TopAiringAnime;
