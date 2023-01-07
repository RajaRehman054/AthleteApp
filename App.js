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
import Notifications from './screens/Notifications';
import EditProfile from './screens/EditProfile';
import Location from './screens/Location';
import LookingForAthlete from './screens/LookingForAthlete';
import MessageChat from './screens/MessageChat';

const Stack = createNativeStackNavigator();

export default App = () => {
	useEffect(() => {
		setTimeout(() => {
			SplashScreen.hide();
		}, 100);
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
				<Stack.Screen
					name='Notifications'
					component={Notifications}></Stack.Screen>
				<Stack.Screen
					name='EditProfile'
					component={EditProfile}></Stack.Screen>
				<Stack.Screen
					name='Location'
					component={Location}></Stack.Screen>
				<Stack.Screen
					name='LookingForAthlete'
					component={LookingForAthlete}></Stack.Screen>
				<Stack.Screen
					name='MessageChat'
					component={MessageChat}></Stack.Screen>
			</Stack.Navigator>
		</NavigationContainer>
	);
};
