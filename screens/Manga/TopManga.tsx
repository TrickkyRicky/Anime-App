import React from 'react';
import { Box, HStack, ScrollView, Text, VStack } from 'native-base';
import { Dimensions } from 'react-native';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const TopManga = () => {
	return <Box flex={1} alignItems='center'></Box>;
};

export default TopManga;
