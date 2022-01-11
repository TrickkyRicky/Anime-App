import React from 'react';
import { useSelector } from 'react-redux';
import { Heading, Text } from 'native-base';
import { View, Dimensions, Image, ScrollView } from 'react-native';
import { SharedElement } from 'react-navigation-shared-element';
import { AntDesign } from '@expo/vector-icons';
import * as Animatable from 'react-native-animatable';
import { DetailNavProps } from '../types/types';
import { RootState } from '../store/index';
import { BlurView } from 'expo-blur';
import * as Haptics from 'expo-haptics';

const { height: screenHeight } = Dimensions.get('window');
const { width: screenWidth } = Dimensions.get('window');

const DetailScreen = ({ navigation, route }: DetailNavProps) => {
	const animeDetails = useSelector(
		(state: RootState) => state.Anime.animeDetails.details
	);
	const { anime } = route.params;
	// console.log(animeDetails);

	let spacing: number = 23;

	const duration: number = 200;

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

			{/* <SharedElement id={anime?.id}> */}

			{/* </SharedElement> */}

			<View
				style={{
					backgroundColor: '#fff',
					position: 'absolute',
					width: screenWidth,
					height: screenHeight,
					transform: [{ translateY: screenHeight / 2.5 }],
					borderRadius: 32,
					padding: spacing,
					paddingTop: 32
				}}
			>
				<Animatable.View animation='fadeInUp' delay={duration}>
					<Heading
						size='2xl'
						fontFamily={'mont-bold'}
						color='#52376A'
						mb={2}
						numberOfLines={2}
					>
						{anime.title}
					</Heading>

					<ScrollView
						showsVerticalScrollIndicator={false}
						style={{ height: screenHeight * 0.45 }}
					>
						<Text
							fontSize='sm'
							fontFamily={'mont'}
							color='#52376A'
							textAlign='justify'
						>
							{animeDetails?.synopsis != ''
								? animeDetails?.synopsis
								: 'No Description Available'}
						</Text>
					</ScrollView>
				</Animatable.View>
			</View>
		</View>
	);
};

export default DetailScreen;
