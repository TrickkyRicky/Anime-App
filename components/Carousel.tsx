import React, { useState, useRef, useEffect } from 'react';
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
const SPACING = 10;
const SPACER_ITEM_SIZE = (width - ITEM_SIZE) / 2;

interface CarouselProps {
	animeTop5: any[];
	nav: TopAirNavProps;
	getDetails: (data: number) => void;
}
interface ITop5 {
	top5: any[];
}

const Carousel = ({ animeTop5, nav, getDetails }: CarouselProps) => {
	const dispatch = useDispatch();
	const [top5, setTop5] = useState<ITop5[]>([]);
	const scrollX = useRef(new Animated.Value(0)).current;

	useEffect(() => {
		setTop5([
			{ node: { id: 'left' } },
			...animeTop5,
			{ node: { id: 'right' } }
		]);
	}, []);

	return (
		<View>
			<Animated.FlatList
				data={top5}
				horizontal={true}
				showsHorizontalScrollIndicator={false}
				keyExtractor={(item: ListingItem['item']) => item.node.id.toString()}
				contentContainerStyle={{ alignItems: 'center' }}
				snapToInterval={ITEM_SIZE}
				decelerationRate={0}
				bounces={false}
				onScroll={Animated.event(
					[{ nativeEvent: { contentOffset: { x: scrollX } } }],
					{ useNativeDriver: true }
				)}
				scrollEventThrottle={16}
				renderItem={({ item, index }) => {
					if (!item.node.main_picture) {
						return <View style={{ width: SPACER_ITEM_SIZE }}></View>;
					}
					const anime = item.node;
					const inputRange = [
						(index - 2) * ITEM_SIZE,
						(index - 1) * ITEM_SIZE,
						index * ITEM_SIZE
					];
					const translateY = scrollX.interpolate({
						inputRange,
						outputRange: [0, -50, 0]
					});
					return (
						<TouchableOpacity
							key={item.node.id}
							activeOpacity={0.4}
							style={{
								marginTop: SPACING * 5,
								width: ITEM_SIZE
								// key
								// height: "60%",
							}}
							onPress={() => {
								dispatch(getDetails(item.node.id));
								nav.navigate('Details', { anime });
								Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Heavy);
							}}
						>
							<Animated.View
								style={{
									marginBottom: 20,
									marginHorizontal: SPACING,
									transform: [{ translateY }]
								}}
							>
								<Image
									style={{
										width: '100%',
										height: ITEM_SIZE * 1.35,
										resizeMode: 'cover',
										borderRadius: 10
									}}
									source={{ uri: item.node.main_picture.large }}
								/>
								<View>{/* Put stuff here later */}</View>
							</Animated.View>
						</TouchableOpacity>
					);
				}}
			/>
		</View>
	);
};

export default Carousel;
