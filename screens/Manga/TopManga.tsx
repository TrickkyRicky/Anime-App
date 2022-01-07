import React from 'react';
import { Box, HStack, ScrollView, Text, VStack } from 'native-base';
import { Dimensions } from 'react-native';

const screenWidth = Dimensions.get('window').width;
const screenHeight = Dimensions.get('window').height;

const TopManga = () => {
	return <Box flex={1} bg='#3730a3' p={2}></Box>;
};

export default TopManga;
