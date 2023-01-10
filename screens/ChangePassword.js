import { useState, useEffect } from 'react';
import {
	Text,
	View,
	TouchableOpacity,
	StyleSheet,
	TextInput,
} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';

import { onValue, ref } from 'firebase/database';
import { db } from '../firebase';
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function ChangePassword({ navigation }) {
	const [user, setUser] = useState('');
	const [old, setOld] = useState('');
	const [newP, setNewP] = useState('');
	const [newC, setNewC] = useState('');
	const [err, setErr] = useState('');
	const getData = async () => {
		const value = await AsyncStorage.getItem('!!userId');
		console.log(value);
		return onValue(ref(db, '/users/' + value), snapshot => {
			setUser(snapshot.toJSON());
		});
	};

	const main = () => {
		if (old === '' || newP === '' || newC === '') {
			setErr('All fields must be filled');
			return;
		}
		if (old !== user.password) {
			setErr('Wrong Password Entered');
			return;
		}
		if (newP !== newC) {
			setErr('Passwords doesnot match');
			return;
		}
		navigation.navigate('Settings');
	};

	useEffect(() => {
		getData();
	}, []);
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
						style={{ ...styles.input, color: 'black' }}
						value={old}
						onChangeText={setOld}
						secureTextEntry
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
						style={{ ...styles.input, color: 'black' }}
						value={newP}
						onChangeText={setNewP}
						secureTextEntry
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
						style={{ ...styles.input, color: 'black' }}
						value={newC}
						onChangeText={setNewC}
						secureTextEntry
					/>

					<TouchableOpacity
						style={styles.button11}
						onPress={() => main()}>
						<Text style={styles.text12}>Update Password </Text>
					</TouchableOpacity>
				</View>
			</View>
			<Text
				style={{
					color: 'darkred',
					fontSize: 18,
					fontWeight: 'bold',
					alignSelf: 'center',
					margin: 5,
				}}>
				{err}
			</Text>
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
