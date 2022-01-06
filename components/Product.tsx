import React from 'react';
import { Text, VStack } from 'native-base';
import { Dimensions, Image } from 'react-native';

const screenWidth = Dimensions.get('window').width;
const screenHeight = Dimensions.get('window').height;

const Product = ({ name, image }) => {
	return (
		<VStack alignItems='center'>
			<Image
				source={{
					uri: image
				}}
				style={{
					borderRadius: 15,
					width: screenWidth * 0.45,
					height: screenHeight * 0.3,
					resizeMode: 'cover'
				}}
			/>

			<Text color='#fff' fontWeight={500} fontSize='lg' mb={3}>
				{name}
			</Text>
		</VStack>
	);
};

export default Product;
