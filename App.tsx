import React, { useState } from 'react';
import { NativeBaseProvider } from 'native-base';
import { NavigationContainer } from '@react-navigation/native';
import BottomTabNavigation from './navigator/BottomTabNavigation';
import { CombinedStack } from './navigator/StackNavigation';
import { Provider } from 'react-redux';
import store from './store/index';
import AppLoading from 'expo-app-loading';
import * as Font from 'expo-font';

const fetchFonts = () => {
	return Font.loadAsync({
		mont: require('./assets/fonts/Montserrat-Regular.ttf'),
		'mont-extralight': require('./assets/fonts/Montserrat-ExtraLight.ttf'),
		'mont-light': require('./assets/fonts/Montserrat-Light.ttf'),
		'mont-medium': require('./assets/fonts/Montserrat-Medium.ttf'),
		'mont-semibold': require('./assets/fonts/Montserrat-SemiBold.ttf'),
		'mont-bold': require('./assets/fonts/Montserrat-Bold.ttf'),
		'mont-extrabold': require('./assets/fonts/Montserrat-ExtraBold.ttf')
	});
};

const App = () => {
	const [loaded, setLoaded] = useState(false);

	return (
		<>
			{!loaded ? (
				<AppLoading
					startAsync={fetchFonts}
					onFinish={() => setLoaded(true)}
					onError={console.warn}
				/>
			) : (
				<Provider store={store}>
					<NavigationContainer>
						<NativeBaseProvider>
							<BottomTabNavigation />
							{/* <CombinedStack /> */}
						</NativeBaseProvider>
					</NavigationContainer>
				</Provider>
			)}
		</>
	);
};

export default App;
