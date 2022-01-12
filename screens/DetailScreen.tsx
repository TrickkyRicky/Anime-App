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
// import { SharedElement } from 'react-navigation-shared-element';
import { AntDesign } from '@expo/vector-icons';
import * as Animatable from 'react-native-animatable';
import { DetailNavProps } from '../types/types';
import { RootState } from '../store/index';
import { BlurView } from 'expo-blur';
import * as Haptics from 'expo-haptics';

const { height: screenHeight } = Dimensions.get('window');
const { width: screenWidth } = Dimensions.get('window');

type studio = {
	id: number;
	name: string;
};

const DetailScreen = ({ navigation, route }: DetailNavProps) => {
	const animeDetails = useSelector(
		(state: RootState) => state.Anime.animeDetails.details
	);
	const { anime } = route.params;
	console.log(animeDetails);

	let spacing: number = 23;
	let colorScheme = useColorScheme();

	return (
		<View style={{ flex: 1 }}>
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

			<Image
				source={{ uri: anime?.main_picture?.large }}
				resizeMethod='resize'
				style={{
					width: screenWidth,
					height: screenHeight * 0.6,
					resizeMode: 'cover',
					position: 'absolute',
					top: 0
				}}
			/>
			<BlurView
				intensity={0}
				tint='dark'
				style={{
					height: screenHeight * 0.6
				}}
			/>

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
								{animeDetails?.start_date}
							</Text>
						</Text>

						{animeDetails?.studios?.map((studio: studio) => (
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
							{animeDetails?.synopsis != ''
								? animeDetails?.synopsis
								: 'No Description Available'}
						</Text>
					</ScrollView>
					<View style={{ height: 5 }} />
				</Animatable.View>
			</View>
		</View>
	);
};

export default DetailScreen;
