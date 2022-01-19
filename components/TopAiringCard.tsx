import React from 'react';
import { Box, Text, VStack } from 'native-base';
import { Dimensions, Image, View } from 'react-native';
import * as Animatable from 'react-native-animatable';

const screenWidth = Dimensions.get('window').width;
const screenHeight = Dimensions.get('window').height;

interface ProductProps {
	title: string;
	image: string;
	rank: number;
}

const TopAiringCard = ({ title, image, rank }: ProductProps) => {
	return (
		<Animatable.View animation='fadeInUp' delay={1000}>
			<Image
				source={{
					uri: image
				}}
				style={{
					borderRadius: 10,
					width: '100%',
					height: 175,
					resizeMode: 'cover'
				}}
			/>

			<Text
				color='#fff'
				fontWeight={500}
				fontFamily={'mont-bold'}
				fontSize='md'
				numberOfLines={1}
				mt={1}
			>
				{title}
			</Text>

			<View
				style={{
					flexDirection: 'row',
					alignItems: 'center',
					marginBottom: 20
				}}
			>
				<Text color='#fff' fontFamily={'mont-light'} fontSize='md'>
					Rank:
				</Text>

				<View
					style={{
						width: 35,
						borderRadius: 15,
						backgroundColor: '#A17CFE',
						justifyContent: 'center',
						alignItems: 'center',
						marginLeft: 5
					}}
				>
					<Text
						color='#000'
						fontFamily={'mont-bold'}
						fontSize={12}
						numberOfLines={1}
					>
						{rank}
					</Text>
				</View>
			</View>
		</Animatable.View>
	);
};

export default TopAiringCard;
