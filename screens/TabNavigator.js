import HomeScreen from './HomeScreen';
import AthletePage from './AthletePage';
import SearchTeam from './SearchTeam';
import MatchesScreen from './MatchesScreen';
import MemberProfile from './MemberProfile';

import Ionicons from 'react-native-vector-icons/Ionicons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

const Tab = createBottomTabNavigator();

export default function TabNavigator() {
	return (
		<Tab.Navigator
			screenOptions={{
				tabBarStyle: {
					height: 60,
					backgroundColor: '#020D28',
				},
				headerShown: false,
				tabBarActiveTintColor: 'white',
				tabBarLabelStyle: { fontSize: 12, paddingBottom: 5 },
			}}>
			<Tab.Screen
				name='Home'
				component={HomeScreen}
				options={{
					tabBarIcon: ({ color, size }) => (
						<Ionicons
							name={'home-outline'}
							color={color}
							size={size}
						/>
					),
				}}
			/>
			<Tab.Screen
				name='Athletes'
				component={AthletePage}
				options={{
					tabBarIcon: ({ color, size }) => (
						<Ionicons
							name={'ios-people-sharp'}
							color={color}
							size={size}
						/>
					),
				}}
			/>
			<Tab.Screen
				name='Teams'
				component={SearchTeam}
				options={{
					tabBarIcon: ({ color, size }) => (
						<Ionicons
							name={'list-outline'}
							color={color}
							size={size}
						/>
					),
				}}
			/>
			<Tab.Screen
				name='MatchesScreen'
				component={MatchesScreen}
				options={{
					tabBarLabel: 'Matches',
					tabBarIcon: ({ color, size }) => (
						<MaterialCommunityIcons
							name='soccer-field'
							color={color}
							size={size}
						/>
					),
				}}
			/>
			<Tab.Screen
				name='MemberProfile'
				component={MemberProfile}
				options={{
					tabBarLabel: 'Profile',
					tabBarIcon: ({ color, size }) => (
						<MaterialCommunityIcons
							name='account'
							color={color}
							size={size}
						/>
					),
				}}
			/>
		</Tab.Navigator>
	);
}
