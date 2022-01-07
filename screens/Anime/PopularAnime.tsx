import React from 'react';
import { Box, Text } from 'native-base';
import { SafeAreaView } from 'react-native-safe-area-context';

const PopularAnime = () => {
	return (
		<Box flex={1} bg='#3730a3' p={2}>
			<Text fontSize='xl'>Popular Anime</Text>
		</Box>
	);
};

export default PopularAnime;
