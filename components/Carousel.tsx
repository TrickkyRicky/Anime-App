import React from 'react';
import { Box, Text } from 'native-base';
import { Dimensions } from 'react-native';

const screenWidth = Dimensions.get('window').width;
const screenHeight = Dimensions.get('window').height;

const Carousel = () => {
	return (
		<Box
			bg='blue.700'
			height={200}
			width={screenWidth * 0.9}
			borderRadius={20}
			mb={5}
		>
			<Text textAlign='center'>Carosel</Text>
		</Box>
	);
};

export default Carousel;
