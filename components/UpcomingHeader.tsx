import React from 'react';
import {
	Dimensions,
	Image,
	View,
	FlatList,
	TouchableOpacity
} from 'react-native';
import { Text } from 'native-base';
import { useDispatch } from 'react-redux';
import { ListingItem, TopAirNavProps } from '../types/types';
import * as Animatable from 'react-native-animatable';
import * as Haptics from 'expo-haptics';

interface CarouselProps {
	animeTop5: any[];
	nav: TopAirNavProps;
	getDetails: (data: number) => void;
}

const screenWidth = Dimensions.get('window').width;
const screenHeight = Dimensions.get('window').height;

const UpcomingHeader = ({ animeTop5, nav, getDetails }: CarouselProps) => {
	const dispatch = useDispatch();
	// console.log(animeTop5);
	return (
		<>
			<FlatList
				data={animeTop5}
				keyExtractor={(item: ListingItem['item']) => item.node.id.toString()}
				horizontal={true}
				showsHorizontalScrollIndicator={false}
				renderItem={({ item }) => {
					const anime = item.node;
					return (
						<Animatable.View animation='fadeInUp' delay={1000}>
							<TouchableOpacity
								activeOpacity={0.5}
								style={{ width: '33.333%', paddingHorizontal: 10 }}
								onPress={() => {
									dispatch(getDetails(anime.id));
									nav.navigate('Details', { anime });
									Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Heavy);
								}}
							>
								<Image
									source={{
										uri: anime?.main_picture?.large
									}}
									style={{
										borderRadius: 10,
										width: screenWidth * 0.25,
										height: 170,
										resizeMode: 'cover',
										marginTop: 5
									}}
								/>
								<Text
									color='#fff'
									fontWeight={500}
									fontFamily={'mont'}
									fontSize='md'
									numberOfLines={2}
									my={2}
									width={screenWidth * 0.25}
								>
									{anime?.title}
								</Text>
							</TouchableOpacity>
						</Animatable.View>
					);
				}}
			/>
		</>
	);
};

export default UpcomingHeader;
