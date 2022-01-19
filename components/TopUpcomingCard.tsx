import React from 'react';
import { Box, HStack, Text, VStack, PresenceTransition } from 'native-base';
import { Dimensions, Image, View } from 'react-native';
import * as Animatable from 'react-native-animatable';

const screenWidth = Dimensions.get('window').width;
const screenHeight = Dimensions.get('window').height;

interface ProductProps {
	title: string;
	image: string;
}

const Product = ({ title, image }: ProductProps) => {
	return (
		<Animatable.View animation='fadeInUp' delay={1000}>
			<VStack my={3} justifyContent={'center'}>
				<Image
					source={{
						uri: image
					}}
					
					style={{
						borderRadius: 15,
						width: screenWidth * 0.9,
						height: 180,
						resizeMode: 'cover'
					}}
				/>

				<View
					style={{
						backgroundColor: '#000',
						opacity: 0.6,
						height: 25,
						width: 55,
						borderRadius: 15,
						padding: 2,
						justifyContent: 'center',
						alignItems: 'center',
						position: 'absolute',
						left: 20,
						bottom: 40
					}}
				>
					<Text color='#fff'>Anime</Text>
				</View>

				<Text
					color='#fff'
					fontWeight={500}
					fontFamily={'mont-medium'}
					fontSize='lg'
					numberOfLines={1}
					mt={1}
					width={screenWidth * 0.85}
				>
					{title}
				</Text>
			</VStack>
		</Animatable.View>
	);
};

export default Product;