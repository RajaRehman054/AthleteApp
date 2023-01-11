import {
	TouchableOpacity,
	Text,
	View,
	ScrollView,
	TextInput,
	Alert,
} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import styles from './stylesnew';
import { useState, useEffect } from 'react';
import { ref, update, set, remove, onValue } from 'firebase/database';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { db } from '../firebase';

export default function LookingForAthlete({ navigation }) {
	const [sports, setSports] = useState('');
	const [gender, setGender] = useState('');
	const [date, setDate] = useState('');
	const [location, setLocation] = useState('');
	const [time, setTime] = useState('');
	const [description, setDescription] = useState('');
	const [range, setRange] = useState('');
	const [exist, setExist] = useState(false);
	const [id, setId] = useState('');

	const getData = async () => {
		try {
			const value = await AsyncStorage.getItem('!!userId');
			setId(value);
			onValue(ref(db, '/lookingforAthletes/' + value), snapshot => {
				if (snapshot.exists()) {
					setExist(true);
					const athlete = snapshot.val();
					setGender(athlete.gender);
					setDate(athlete.date);
					setLocation(athlete.location);
					setTime(athlete.time);
					setDescription(athlete.description);
					setRange(athlete.range);
					setSports(athlete.sports);
				}
			});
		} catch (err) {
			console.log(err);
		}
	};

	const deleteAthlete = () => {
		if (!exist) {
			Alert.alert('Please add a athlete first.');
			return;
		}
		remove(ref(db, 'lookingforAthletes/' + id))
			.then(() => {
				Alert.alert('Athlete Deleted Succesfully.');
				navigation.navigate('TabNavigator');
			})
			.catch(error => {
				console.log(error.message);
			});
	};

	const main = () => {
		if (
			description === '' ||
			sports === '' ||
			location === '' ||
			range === '' ||
			gender === '' ||
			time === '' ||
			date === ''
		) {
			Alert.alert('Please fill all the fields first.');
			return;
		}
		const obj = {
			sports,
			description,
			range,
			location,
			gender,
			time,
			date,
		};
		if (exist) {
			update(ref(db, 'lookingforAthletes/' + id), obj)
				.then(() => {
					Alert.alert('Athlete Updated Successfully.');
					navigation.navigate('TabNavigator');
				})
				.catch(error => {
					console.log(error.message);
				});
		} else {
			set(ref(db, 'lookingforAthletes/' + id), obj)
				.then(() => {
					Alert.alert('Athlete Added Succesfully.');
					navigation.navigate('TabNavigator');
				})
				.catch(error => {
					console.log(error.message);
				});
		}
	};

	useEffect(() => {
		getData();
	}, []);

	return (
		<View>
			<ScrollView>
				<View style={styles.menubar}>
					<TouchableOpacity
						style={[styles.icon1, { width: '10%', marginLeft: 10 }]}
						onPress={() => navigation.goBack()}>
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
						Looking For Athlete
					</Text>
					<View
						style={{
							width: '22%',
							flexDirection: 'row',
							marginRight: 10,
						}}>
						<TouchableOpacity
							style={[styles.icon1, { width: '55%' }]}
							onPress={() =>
								navigation.navigate('Notifications')
							}>
							<Ionicons
								name='notifications-circle'
								color={'white'}
								size={45}
								style={{
									marginLeft: 'auto',
									marginRight: 'auto',
								}}
							/>
						</TouchableOpacity>
						<TouchableOpacity
							style={[styles.icon1, { width: '45%' }]}
							onPress={() => navigation.navigate('Messages')}>
							<Ionicons
								name='paper-plane-outline'
								color={'white'}
								size={30}
								style={{
									marginLeft: 'auto',
									marginRight: 'auto',
								}}
							/>
						</TouchableOpacity>
					</View>
				</View>

				<View style={{ marginTop: 20 }}>
					<View style={styles.partView7}>
						<Text
							style={{
								color: '#020D28',
								fontSize: 18,
								fontWeight: 'bold',
							}}>
							Sports
						</Text>
						<TextInput
							placeholder='Select the Sports'
							placeholderTextColor='gray'
							style={{ ...styles.input, color: 'black' }}
							value={sports}
							onChangeText={setSports}
						/>
						<Text
							style={{
								color: '#020D28',
								fontSize: 18,
								fontWeight: 'bold',
							}}>
							Gender
						</Text>
						<TextInput
							placeholder='Gender'
							placeholderTextColor='gray'
							style={{ ...styles.input, color: 'black' }}
							value={gender}
							onChangeText={setGender}
						/>
						<Text
							style={{
								color: '#020D28',
								fontSize: 18,
								fontWeight: 'bold',
							}}>
							Location
						</Text>
						<TextInput
							placeholder='London'
							placeholderTextColor='gray'
							style={{ ...styles.input, color: 'black' }}
							value={location}
							onChangeText={setLocation}
						/>
						<Text
							style={{
								color: '#020D28',
								fontSize: 18,
								fontWeight: 'bold',
							}}>
							Date
						</Text>
						<TextInput
							placeholder='dd/mm/yyyy'
							placeholderTextColor='gray'
							style={{ ...styles.input, color: 'black' }}
							value={date}
							onChangeText={setDate}
						/>
						<Text
							style={{
								color: '#020D28',
								fontSize: 18,
								fontWeight: 'bold',
							}}>
							Time
						</Text>
						<TextInput
							placeholder='12:00'
							placeholderTextColor='gray'
							style={{ ...styles.input, color: 'black' }}
							value={time}
							onChangeText={setTime}
						/>
						<Text
							style={{
								color: '#020D28',
								fontSize: 18,
								fontWeight: 'bold',
							}}>
							Description
						</Text>
						<TextInput
							placeholderTextColor='gray'
							style={[
								styles.input,
								{ height: 130, color: 'darkblue' },
							]}
							value={description}
							onChangeText={setDescription}
						/>
						<Text
							style={{
								color: '#020D28',
								fontSize: 18,
								fontWeight: 'bold',
							}}>
							Range
						</Text>
						<TextInput
							placeholder='30 miles'
							placeholderTextColor='gray'
							style={{ ...styles.input, color: 'black' }}
							value={range}
							onChangeText={setRange}
						/>

						<TouchableOpacity
							style={styles.button11}
							onPress={main}>
							<Text style={styles.text12}>Completed</Text>
						</TouchableOpacity>
						<TouchableOpacity
							style={styles.button13}
							onPress={deleteAthlete}>
							<Text style={[styles.text12, { color: '#020D28' }]}>
								Delete
							</Text>
						</TouchableOpacity>
					</View>
				</View>
			</ScrollView>
		</View>
	);
}
