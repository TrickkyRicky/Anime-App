import React from 'react';
import { Box, Text } from 'native-base';
import { SafeAreaView } from 'react-native-safe-area-context';

const PopularAnime = () => {
	return (
		<Box flex={1} justifyContent='center' alignItems='center'>
			<Text fontSize='xl'>Popular Anime</Text>
		</Box>
	);
};

export default PopularAnime;
