import React from 'react';
import { useSelector } from 'react-redux';
import { Heading, Text, HStack } from 'native-base';
import {
	View,
	Dimensions,
	Image,
	ScrollView,
	Appearance,
	useColorScheme
} from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import DetailsCarousel from '../components/Details/DetailsCarousel';

import { DetailNavProps } from '../types/types';
import { RootState } from '../store/index';
import * as Haptics from 'expo-haptics';
import * as Animatable from 'react-native-animatable';

const { height: screenHeight } = Dimensions.get('window');
const { width: screenWidth } = Dimensions.get('window');

type studio = {
	id: number;
	name: string;
};

const DetailScreen = ({ navigation, route }: DetailNavProps) => {
	const animeDetails = {
		details: useSelector(
			(state: RootState) => state.Anime.animeDetails.details
		),
		loader: useSelector(
			(state: RootState) => state.Anime.animeDetails.detailLoader
		)
	};

	const { anime } = route.params;

	let spacing: number = 23;
	let colorScheme = useColorScheme();

	return (
		<View style={{ flex: 1, backgroundColor: '#52376A' }}>
			<AntDesign
				name='leftcircle'
				size={28}
				color='#825aa5'
				onPress={() => {
					navigation.goBack();
					Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Heavy);
				}}
				style={{
					padding: 12,
					position: 'absolute',
					top: spacing * 2,
					left: spacing,
					zIndex: 2
				}}
			/>
			<DetailsCarousel animeDetails={animeDetails} />
			<View
				style={{
					backgroundColor: colorScheme === 'dark' ? '#121212' : '#ffffff',
					position: 'absolute',
					width: screenWidth,
					height: screenHeight,
					transform: [{ translateY: screenHeight / 2 }],
					borderRadius: 32,
					padding: spacing,
					paddingTop: 32
				}}
			>
				<Animatable.View animation='fadeInUp' delay={200}>
					<Heading
						size='xl'
						fontFamily={'mont-bold'}
						color={colorScheme === 'dark' ? '#654582' : '#52376A'}
						numberOfLines={2}
						mb={1}
					>
						{anime.title}
					</Heading>

					<HStack justifyContent='space-between' alignItems='flex-start'>
						<Text
							mb={2}
							fontFamily={'mont-bold'}
							color={colorScheme === 'dark' ? '#654582' : '#52376A'}
							fontSize='sm'
						>
							Airing Date:{' '}
							<Text fontFamily={'mont-bold'} color='#414141' fontSize='sm'>
								{!animeDetails?.details?.start_date
									? 'No Date Available'
									: animeDetails?.details?.start_date}
							</Text>
						</Text>

						{animeDetails?.details?.studios?.map((studio: studio) => (
							<Text
								key={studio.id}
								fontSize='sm'
								fontFamily={'mont-medium'}
								color={colorScheme === 'dark' ? '#654582' : '#52376A'}
							>
								{studio.name}
							</Text>
						))}
					</HStack>

					<ScrollView
						showsVerticalScrollIndicator={false}
						style={{ height: screenHeight * 0.28 }}
						alwaysBounceVertical={true}
						bounces={true}
					>
						<Text
							fontSize='sm'
							fontFamily={'mont'}
							color={colorScheme === 'dark' ? '#654582' : '#52376A'}
							textAlign='justify'
						>
							{animeDetails?.details?.synopsis != ''
								? animeDetails?.details?.synopsis
								: 'No Description Available'}
						</Text>
					</ScrollView>
					<View style={{ height: 5 }} />
				</Animatable.View>
			</View>
		</View>
	);
};

// genres []
// broadcast ---> broadcast {}
// related anime []
// recommendations []
// rating
// num_episodes
export default DetailScreen;
