import { useNavigation } from '@react-navigation/native';
import React, { useState } from 'react';
import {
	Text,
	View,
	TouchableOpacity,
	StyleSheet,
	TextInput,
} from 'react-native';

import Ionicons from 'react-native-vector-icons/Ionicons';

export default function ChangePassword({ navigation }) {
	return (
		<View>
			<View style={styles.menubar}>
				<TouchableOpacity
					style={[styles.icon1, { width: '10%' }]}
					onPress={() => navigation.navigate('Settings')}>
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
					Update Password
				</Text>
				<View style={{ width: '10%', marginRight: 10 }}></View>
			</View>

			<View style={styles.midview}>
				<View style={styles.partView7}>
					<Text
						style={{
							color: '#020D28',
							fontSize: 18,
							fontWeight: 'bold',
						}}>
						Old Password
					</Text>
					<TextInput
						placeholder='Password'
						placeholderTextColor='gray'
						style={styles.input}
					/>
					<Text
						style={{
							color: '#020D28',
							fontSize: 18,
							fontWeight: 'bold',
						}}>
						New Password
					</Text>
					<TextInput
						placeholder='Password'
						placeholderTextColor='gray'
						style={styles.input}
					/>
					<Text
						style={{
							color: '#020D28',
							fontSize: 18,
							fontWeight: 'bold',
						}}>
						Re-enter Password
					</Text>
					<TextInput
						placeholder='Password'
						placeholderTextColor='gray'
						style={styles.input}
					/>

					<TouchableOpacity style={styles.button11}>
						<Text style={styles.text12}>Update Password </Text>
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
		marginLeft: 10,
		alignSelf: 'center',
	},

	midview: {},

	partView7: { width: '80%', marginLeft: 'auto', marginRight: 'auto' },
	text12: {
		color: 'white',
		justifyContent: 'center',
		alignSelf: 'center',
		marginTop: 'auto',
		marginBottom: 'auto',
		padding: 8,
		fontWeight: 'bold',
		fontSize: 14,
	},

	input: {
		borderWidth: 1,
		height: 46,
		borderRadius: 12,
		padding: 15,
		marginBottom: 10,
		marginTop: 5,
	},
	button11: {
		backgroundColor: '#020D28',
		marginTop: 5,
		marginBottom: 5,
		borderRadius: 12,
		height: 55,
	},
});
