import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Login from '../screens/Login';
import Register from '../screens/Register';
import ForgotPass from '../screens/ForgotPass';
import ProfileSetup1 from '../screens/ProfileSetup1';
import ProfileSetup2 from '../screens/ProfileSetup2';
import ProfileSetupTeam from '../screens/ProfileSetupTeam';
import Otp from '../screens/Otp';

const Stack = createNativeStackNavigator();

export default ProfilingModule = () => {
	return (
		<Stack.Navigator screenOptions={{ headerShown: false }}>
			<Stack.Screen name='Login' component={Login}></Stack.Screen>
			<Stack.Screen name='Register' component={Register}></Stack.Screen>
			<Stack.Screen
				name='ProfileSetup1'
				component={ProfileSetup1}></Stack.Screen>
			<Stack.Screen
				name='ProfileSetup2'
				component={ProfileSetup2}></Stack.Screen>
			<Stack.Screen
				name='ForgotPass'
				component={ForgotPass}></Stack.Screen>
			<Stack.Screen
				name='ProfileSetupTeam'
				component={ProfileSetupTeam}></Stack.Screen>
			<Stack.Screen name='Otp' component={Otp}></Stack.Screen>
		</Stack.Navigator>
	);
};
