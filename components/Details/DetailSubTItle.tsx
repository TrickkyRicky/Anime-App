import React from 'react';
import { View } from 'react-native';
import { Box, Text } from 'native-base';

type Props = {
	title: string;
	info: string;
	colorScheme: string | null | undefined;
};

const DetailSubTitle = ({ colorScheme, title, info }: Props) => {
	return (
		<Box flexDirection='row'>
			<Text
				mb={1}
				fontFamily={'mont-bold'}
				color={colorScheme === 'dark' ? '#654582' : '#52376A'}
				fontSize='sm'
			>
				{title}
			</Text>
			<Text
				fontFamily={'mont-bold'}
				color={colorScheme === 'dark' ? '#8e8e8e' : '#414141'}
				fontSize='sm'
				pl={1.5}
			>
				{info}
			</Text>
		</Box>
	);
};

export default DetailSubTitle;
