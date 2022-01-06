import React from 'react';
import { StyleSheet } from 'react-native';
import { NativeBaseProvider, Text, Box, Heading } from 'native-base';

const App = () => {
	return (
		<NativeBaseProvider>
			<Box flex={1} alignItems='center' justifyContent='center'>
				<Heading size='3xl'>Anime App</Heading>
				<Text fontSize='xl'>Hello Anime App</Text>
			</Box>
		</NativeBaseProvider>
	);
};

export default App;

const styles = StyleSheet.create({});
