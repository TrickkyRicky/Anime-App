import React from 'react';
import { NativeBaseProvider } from 'native-base';
import { NavigationContainer } from '@react-navigation/native';
import BottomTabNavigation from './navigator/BottomTabNavigation';
import { Provider } from 'react-redux';

const App = () => {
	return (
		// <Provider></Provider>
		<NavigationContainer>
			<NativeBaseProvider>
				<BottomTabNavigation />
			</NativeBaseProvider>
		</NavigationContainer>
	);
};

export default App;
