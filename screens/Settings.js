import React, { useState } from 'react';
import { Text, View, TouchableOpacity, StyleSheet } from 'react-native';
import { Switch } from 'react-native-paper';
import Ionicons from 'react-native-vector-icons/Ionicons';
import MatericalIcons from 'react-native-vector-icons/MaterialIcons';
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function Settings({ navigation }) {
	const [isEnabled, setIsEnabled] = React.useState(false);
	const [isSwitchOn, setIsSwitchOn] = React.useState(false);
	const onToggleSwitch = () => setIsEnabled(!isEnabled);
	const onToggleSwitch1 = () => setIsSwitchOn(!isSwitchOn);

	const logout = async () => {
		try {
			await AsyncStorage.clear();
			navigation.popToTop();
		} catch (e) {
			console.log(e);
		}
	};

	return (
		<View>
			<View style={styles.menubar}>
				<TouchableOpacity
					style={[styles.icon1, { width: '10%' }]}
					onPress={() => navigation.navigate('TabNavigator')}>
					<Ionicons
						name='arrow-back-outline'
						color={'white'}
						size={25}
						style={{ marginLeft: 'auto', marginRight: 'auto' }}
					/>
				</TouchableOpacity>
				<Text
					style={{
						color: 'white',
						fontSize: 18,
						fontWeight: 'bold',
						marginLeft: 'auto',
						marginRight: 'auto',
					}}>
					Personal Settings
				</Text>
				<TouchableOpacity style={[styles.icon1, { width: '10%' }]}>
					<Ionicons
						name='paper-plane-outline'
						color={'white'}
						size={25}
						style={{ marginLeft: 'auto', marginRight: 'auto' }}
					/>
				</TouchableOpacity>
			</View>

			<View style={styles.midview}>
				<View style={styles.partView7}>
					<View style={styles.button11}>
						<View style={{ width: '15%' }}>
							<Ionicons
								name='person'
								color={'#020D28'}
								size={25}
								style={{
									marginLeft: 'auto',
									marginRight: 'auto',
								}}
							/>
						</View>
						<Text style={[styles.text12, { width: '55%' }]}>
							Free Agent
						</Text>
						<View style={{ width: '30%' }}>
							<Switch
								style={{
									marginLeft: 'auto',
									marginRight: 'auto',
								}}
								trackColor={{
									false: 'lightgray',
									true: '#020D28',
								}}
								thumbColor={isEnabled ? 'white' : '#020D28'}
								onValueChange={onToggleSwitch}
								value={isEnabled}
							/>
						</View>
					</View>
					<View style={styles.button11}>
						<View style={{ width: '15%' }}>
							<Ionicons
								name='chatbubble-ellipses'
								color={'#020D28'}
								size={25}
								style={{
									marginLeft: 'auto',
									marginRight: 'auto',
								}}
							/>
						</View>
						<View style={{ width: '55%' }}>
							<Text style={styles.text25}>Who can text you</Text>
							<Text style={{ fontSize: 12, color: '#020D28' }}>
								Everyone
							</Text>
						</View>
						<View style={{ width: '30%' }}>
							<Switch
								style={{
									marginLeft: 'auto',
									marginRight: 'auto',
								}}
								trackColor={{
									false: 'lightgray',
									true: '#020D28',
								}}
								thumbColor={isSwitchOn ? 'white' : '#020D28'}
								onValueChange={onToggleSwitch1}
								value={isSwitchOn}
							/>
						</View>
					</View>
					<TouchableOpacity
						style={styles.button11}
						onPress={() => navigation.navigate('EditProfile')}>
						<View style={{ width: '15%' }}>
							<Ionicons
								name='settings-sharp'
								color={'#020D28'}
								size={25}
								style={{
									marginLeft: 'auto',
									marginRight: 'auto',
								}}
							/>
						</View>
						<Text style={styles.text12}>Basics</Text>
					</TouchableOpacity>
					<TouchableOpacity
						style={styles.button11}
						onPress={() => navigation.navigate('ChangePassword')}>
						<View style={{ width: '15%' }}>
							<Ionicons
								name='lock-closed-sharp'
								color={'#020D28'}
								size={25}
								style={{
									marginLeft: 'auto',
									marginRight: 'auto',
								}}
							/>
						</View>
						<Text style={styles.text12}>Change password</Text>
					</TouchableOpacity>
					<TouchableOpacity
						style={styles.button11}
						onPress={() => navigation.navigate('Location')}>
						<View style={{ width: '15%' }}>
							<Ionicons
								name='location-sharp'
								color={'#020D28'}
								size={25}
								style={{
									marginLeft: 'auto',
									marginRight: 'auto',
								}}
							/>
						</View>
						<Text style={styles.text12}>Change location</Text>
					</TouchableOpacity>
					<TouchableOpacity style={styles.button11}>
						<View style={{ width: '15%' }}>
							<Ionicons
								name='document-text-sharp'
								color={'#020D28'}
								size={25}
								style={{
									marginLeft: 'auto',
									marginRight: 'auto',
								}}
							/>
						</View>
						<Text style={styles.text12}>Terms and conditions</Text>
					</TouchableOpacity>
					<TouchableOpacity style={styles.button11}>
						<View style={{ width: '15%' }}>
							<Ionicons
								name='shield-checkmark-sharp'
								color={'#020D28'}
								size={25}
								style={{
									marginLeft: 'auto',
									marginRight: 'auto',
								}}
							/>
						</View>
						<Text style={styles.text12}>Privacy Policy</Text>
					</TouchableOpacity>
					<TouchableOpacity style={styles.button11} onPress={logout}>
						<View style={{ width: '15%' }}>
							<MatericalIcons
								name='logout'
								color={'#020D28'}
								size={25}
								style={{
									marginLeft: 'auto',
									marginRight: 'auto',
								}}
							/>
						</View>
						<Text style={styles.text12}>Logout</Text>
					</TouchableOpacity>
				</View>
			</View>
		</View>
	);
}

const styles = StyleSheet.create({
	menubar: {
		flexDirection: 'row',
		height: 110,
		backgroundColor: '#020D28',
		borderBottomLeftRadius: 15,
		borderBottomRightRadius: 15,
		marginBottom: 20,
		alignItems: 'center',
	},

	icon1: {
		marginRight: 20,
		alignSelf: 'center',
	},

	midview: {},

	partView7: { width: '90%', marginLeft: 'auto', marginRight: 'auto' },
	text12: {
		color: '#020D28',
		justifyContent: 'center',
		alignSelf: 'center',
		marginTop: 'auto',
		marginBottom: 'auto',
		fontWeight: 'bold',
		fontSize: 14,
	},
	text25: { color: '#020D28', fontWeight: 'bold', fontSize: 14 },

	button11: {
		flexDirection: 'row',
		alignItems: 'center',
		backgroundColor: 'white',
		marginTop: 5,
		marginBottom: 5,
		borderRadius: 12,
		height: 60,
		shadowColor: '#171717',
		shadowOffset: { width: -2, height: 4 },
		shadowOpacity: 0.2,
		shadowRadius: 3,
		elevation: 10,
	},
});
