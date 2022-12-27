import { useEffect } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import SplashScreen from 'react-native-splash-screen';
import TabNavigator from './screens/TabNavigator';
import ProfilingModule from './screens/ProfilingModule';
import MatchNow from './screens/MatchNow';
import Tournament from './screens/Tournament';
import EditingTeam from './screens/EditingTeam';
import Settings from './screens/Settings';
import ChangePassword from './screens/ChangePassword';
import Messages from './screens/Messages';

const Stack = createNativeStackNavigator();

export default App = () => {
	useEffect(() => {
		SplashScreen.hide();
	}, []);

	return (
		<NavigationContainer>
			<Stack.Navigator screenOptions={{ headerShown: false }}>
				<Stack.Screen
					name='ProfilingModule'
					component={ProfilingModule}></Stack.Screen>
				<Stack.Screen
					name='TabNavigator'
					component={TabNavigator}></Stack.Screen>
				<Stack.Screen
					name='MatchNow'
					component={MatchNow}></Stack.Screen>
				<Stack.Screen
					name='Tournament'
					component={Tournament}></Stack.Screen>
				<Stack.Screen
					name='EditingTeam'
					component={EditingTeam}></Stack.Screen>
				<Stack.Screen
					name='Settings'
					component={Settings}></Stack.Screen>
				<Stack.Screen
					name='ChangePassword'
					component={ChangePassword}></Stack.Screen>
				<Stack.Screen
					name='Messages'
					component={Messages}></Stack.Screen>
			</Stack.Navigator>
		</NavigationContainer
	);
};
