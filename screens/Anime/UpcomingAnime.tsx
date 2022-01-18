import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Text } from 'native-base';
import { TouchableOpacity, FlatList, View, Dimensions } from 'react-native';
import * as Haptics from 'expo-haptics';
import { getAnimeData, getAnimeDetails } from '../../store/Anime/Anime-Actions';
import { RootState } from '../../store/index';
import { ListingItem, TopAirNavProps } from '../../types/types';
import { useNavigation } from '@react-navigation/native';
import TopUpcomingCard from '../../components/TopUpcomingCard';
import UpcomingHeader from '../../components/UpcomingHeader';

const screenWidth = Dimensions.get('window').width;
const screenHeight = Dimensions.get('window').height;

const UpcomingAnime = () => {
	const dispatch = useDispatch();
	const navigation = useNavigation<TopAirNavProps>();
	const [refresh, setRefresh] = useState(false);

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
				data={topUpcoming.anime}
				keyExtractor={(item: ListingItem['item']) => item.node.id.toString()}
				showsVerticalScrollIndicator={false}
				horizontal={false}
				numColumns={1}
				renderItem={({ item }) => {
					const anime = item.node;
					return (
						<TouchableOpacity
							activeOpacity={0.5}
							key={anime.id}
							style={{ alignItems: 'center', justifyContent: 'center' }}
							onPress={() => {
								dispatch(getAnimeDetails(anime.id));
								navigation.navigate('Details', { anime });
								Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Heavy);
							}}
						>
							<TopUpcomingCard
								title={anime.title}
								image={anime?.main_picture?.large}
							/>
						</TouchableOpacity>
					);
				}}
				ListHeaderComponent={() => (
					<>
						<Text
							color='#fff'
							textAlign='center'
							fontSize='3xl'
							fontWeight={700}
							my={1}
							fontFamily={'mont-extrabold'}
						>
							Coming Soon
						</Text>

						<UpcomingHeader
							animeTop5={topUpcoming.anime5}
							nav={navigation}
							getDetails={getAnimeDetails}
						/>
					</>
				)}
			/>
		</View>
	);
};

export default UpcomingAnime;
