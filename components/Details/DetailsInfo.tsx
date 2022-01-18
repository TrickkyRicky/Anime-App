import React from 'react';
import { Heading, HStack, Box, Text } from 'native-base';
import { View, ScrollView, useColorScheme } from 'react-native';
import DetailSubTitle from './DetailSubTItle';
import * as Animatable from 'react-native-animatable';

type Props = {
	width: number;
	height: number;
	spacing: number;
	animeDetails: {
		details: any;
		loader: boolean;
	};
	animeTitle: string;
};

type studio = {
	id: number;
	name: string;
};

const DetailsInfo = ({
	width,
	height,
	spacing,
	animeDetails,
	animeTitle
}: Props) => {
	const colorScheme = useColorScheme();
	return (
		<View
			style={{
				backgroundColor: colorScheme === 'dark' ? '#121212' : '#ffffff',
				position: 'absolute',
				width: width,
				height: height,
				transform: [{ translateY: height / 2 }],
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
					{animeTitle}
				</Heading>
				<ScrollView
					showsVerticalScrollIndicator={false}
					style={{ height: height * 0.35 }}
					alwaysBounceVertical={true}
					bounces={true}
				>
					<DetailSubTitle
						colorScheme={colorScheme}
						title='Airing Date:'
						info={
							!animeDetails?.details?.start_date
								? 'No Date Available'
								: animeDetails?.details?.start_date
						}
					/>

					<Box flexDirection='row'>
						<Text
							mb={1}
							fontFamily={'mont-bold'}
							color={colorScheme === 'dark' ? '#654582' : '#52376A'}
							fontSize='sm'
						>
							Studio:
						</Text>

						{!animeDetails.details.studios.length ? (
							<Text
								fontFamily={'mont-bold'}
								color={colorScheme === 'dark' ? '#8e8e8e' : '#414141'}
								fontSize='sm'
								pl={1.5}
							>
								Unknown
							</Text>
						) : (
							animeDetails?.details?.studios?.map((studio: studio) => (
								<Text
									key={studio.id}
									fontFamily={'mont-bold'}
									color={colorScheme === 'dark' ? '#8e8e8e' : '#414141'}
									fontSize='sm'
									pl={1.5}
								>
									{studio.name}
								</Text>
							))
						)}
					</Box>

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
	);
};
// genres []
// broadcast ---> broadcast {}
// related anime []
// recommendations []
// rating
// num_episodes

export default DetailsInfo;