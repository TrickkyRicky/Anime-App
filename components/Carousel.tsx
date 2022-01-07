import React from 'react';
import { Box, Center, Text } from 'native-base';
import { Dimensions } from 'react-native';

const screenWidth = Dimensions.get('window').width;
const screenHeight = Dimensions.get('window').height;

const Carousel = () => {
	return (
		<Center alignItems='center' justifyContent='flex-start'>
			<Box
				bg='blue.700'
				height={200}
				width={screenWidth * 0.9}
				borderRadius={20}
				mb={5}
			>
				<Text textAlign='center'>Carousel</Text>
			</Box>
		</Center>
	);
};

export default Carousel;
