import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Text } from 'native-base';
import {
	ScrollView,
	TouchableOpacity,
	FlatList,
	View,
	Dimensions
} from 'react-native';
import * as Haptics from 'expo-haptics';
import { getAnimeData, getAnimeDetails } from '../../store/Anime/Anime-Actions';
import { RootState } from '../../store/index';
import { ListingItem, TopAirNavProps } from '../../types/types';
import { useNavigation } from '@react-navigation/native';
import TopAiringCard from '../../components/TopAiringCard';

const screenWidth = Dimensions.get('window').width;
const screenHeight = Dimensions.get('window').height;

const UpcomingAnime = () => {
	const dispatch = useDispatch();
	const navigation = useNavigation<TopAirNavProps>();

	const topUpcoming = {
		anime: useSelector((state: RootState) => state.Anime.topUpcoming.anime),
		anime5: useSelector((state: RootState) => state.Anime.topUpcoming.anime5)
	};
	useEffect(() => {
		dispatch(getAnimeData('upcoming'));
	}, []);

	return (
		<View style={{ width: '100%', backgroundColor: '#52376A', flex: 1 }}>
			<FlatList
				data={topUpcoming.anime5}
				keyExtractor={(item: ListingItem['item']) => item.node.id.toString()}
				showsVerticalScrollIndicator={false}
				horizontal={false}
				numColumns={3}
				renderItem={({ item }) => {
					const anime = item.node;
					return (
						<TouchableOpacity
							activeOpacity={0.5}
							key={anime.id}
							style={{ width: '33.333%', paddingHorizontal: 10 }}
							onPress={() => {
								dispatch(getAnimeDetails(anime.id));
								navigation.navigate('Details', { anime });
								Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Heavy);
							}}
						>
							<TopAiringCard
								title={anime.title}
								image={anime?.main_picture?.medium}
								rank={item?.ranking?.rank}
							/>
						</TouchableOpacity>
					);
				}}
				ListHeaderComponent={() => (
					<Text
						color='#fff'
						textAlign='center'
						fontSize='3xl'
						fontWeight={700}
						mb={2}
						fontFamily={'mont-bold'}
					>
						Upcoming Anime
					</Text>
				)}
			/>
		</View>
	);
};

export default UpcomingAnime;
