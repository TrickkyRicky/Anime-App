import { Button } from 'native-base';
import React from 'react';
import { View, Text, Dimensions, Image } from 'react-native';
import { SharedElement } from 'react-navigation-shared-element';

const { height: screenHeight } = Dimensions.get('window');
const { width: screenWidth } = Dimensions.get('window');

const DetailScreen = ({ navigation, route }) => {
	// const { anime } = route.params;

	return (
		<View style={{ flex: 1, backgroundColor: '#fff' }}>
			<Text>YES</Text>
			{/* <SharedElement id={anime?.id}> */}
			{/* <Image
				source={{ uri: anime?.main_picture?.medium }}
				style={{
					width: screenWidth * 0.5,
					height: screenHeight * 0.4
				}}
				resizeMode='cover'
			/> */}
			{/* </SharedElement> */}

			{/* <Button
			onPress={() => {
				navigation.navigate.goBack();
			}}
			>
				Click me to go back
			</Button> */}
		</View>
	);
};

export default DetailScreen;
