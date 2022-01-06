import React from 'react';
import { Box, Text } from 'native-base';

const TopAiringAnime = () => {
	return (
		<Box flex={1} justifyContent='center' alignItems='center'>
			<Box position='absolute' top={0} left={0}>
				<Text fontSize='3xl'>Top Airing Anime</Text>
			</Box>
		</Box>
	);
};

export default TopAiringAnime;
