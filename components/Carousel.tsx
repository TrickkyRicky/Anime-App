import React, { useRef } from 'react';
import { Box, Center, Text } from 'native-base';
import * as Haptics from 'expo-haptics';
import {
	Dimensions,
	FlatList,
	View,
	Image,
	TouchableOpacity,
	Animated
} from 'react-native';
import { useDispatch } from 'react-redux';
import { getAnimeDetails } from '../store/Anime/Anime-Actions';
import { ListingItem } from '../types/types';
import { TopAirNavProps } from '../types/types';

const { width, height } = Dimensions.get('window');
const ITEM_SIZE = width * 0.55;
const SPACING = 12;

interface CarouselProps {
	animeTop5: any[];
	nav: TopAirNavProps;
	getDetails: (data: number) => void;
}

const Carousel = ({ animeTop5, nav, getDetails }: CarouselProps) => {
	const dispatch = useDispatch();
	const scrollX = useRef(new Animated.Value(0)).current;
	// console.log(animeTop5);
	return (
		<View>
			<Animated.FlatList
				data={animeTop5}
				horizontal={true}
				keyExtractor={(item: ListingItem['item']) => item.node.id.toString()}
				contentContainerStyle={{ alignItems: 'center' }}
				// snapToInterval={200}
				decelerationRate={0}
				bounces={false}
				onScroll={Animated.event(
					[{ nativeEvent: { contentOffset: { x: scrollX } } }],
					{ useNativeDriver: true }
				)}
				scrollEventThrottle={16}
				renderItem={({ item }) => {
					const anime = item.node;
					// const inputRange = [(index - 1) * ITEM_SIZE];
					return (
						<TouchableOpacity
							key={item.node.id}
							activeOpacity={0.4}
							style={{ marginHorizontal: SPACING }}
							onPress={() => {
								dispatch(getDetails(item.node.id));
								nav.navigate('Details', { anime });
								Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Heavy);
							}}
						>
							<View style={{ height: 300, width: ITEM_SIZE, marginBottom: 20 }}>
								<Image
									style={{ width: '100%', height: '100%' }}
									source={{ uri: item.node.main_picture.large }}
								/>
							</View>
						</TouchableOpacity>
					);
				}}
			/>
		</View>
	);
};

export default Carousel;
