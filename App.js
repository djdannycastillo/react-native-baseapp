import React from 'react';
import { NavigationContainer } from "@react-navigation/native";
import { NativeBaseProvider, StatusBar } from 'native-base';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';

// Config
import store, { persistor } from '@store';
import theme from '@utils/constants/theme';
import interceptors from '@services/api/interceptors'

// Components
import Navigation from "@navigation/Navigation";

export default function App() {	
	return (
		<NavigationContainer>
			<Provider store={store}>
				<PersistGate persistor={persistor}>
					<NativeBaseProvider theme={theme}>
						<StatusBar translucent={true} backgroundColor={theme.colors.primary['500']} barStyle={'light-content'} />
						<Navigation />
					</NativeBaseProvider>
				</PersistGate>
			</Provider>
		</NavigationContainer>
	)
}

interceptors(store);