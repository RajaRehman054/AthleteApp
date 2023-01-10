import {
	Text,
	View,
	TouchableOpacity,
	ImageBackground,
	TextInput,
	ScrollView,
} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import styles from './styles';
import { useEffect, useState } from 'react';
import {
	onValue,
	ref,
	update,
	set,
	get,
	orderByChild,
} from 'firebase/database';
import AsyncStorage from '@react-native-async-storage/async-storage';
import * as ImagePicker from 'react-native-image-picker/';
import { db } from '../firebase';

const img1 = require('../assets/pics/image2.png');
export default function EditingTeam({ navigation, route }) {
	const [teamName, setTeamName] = useState();
	const [teamSports, setTeamSports] = useState('');
	const [teamFor, setTeamFor] = useState('');
	const [location, setLocation] = useState('');
	const [avatar, setAvatar] = useState(img1);
	const [exist, setExist] = useState(false);
	const [id, setId] = useState('');

	const selectImage = () => {
		ImagePicker.launchImageLibrary({}, response => {
			if (response.didCancel) {
				console.log('User cancelled image picker');
			} else if (response.error) {
				console.log('ImagePicker Error: ', response.error);
			} else {
				setAvatar({ uri: response.assets[0].uri });
			}
		});
	};

	const getData = async () => {
		try {
			const value = await AsyncStorage.getItem('!!userId');
			setId(value);
			onValue(ref(db, '/teams/' + value), snapshot => {
				if (snapshot.exists()) {
					setExist(true);
					const team = snapshot.toJSON();
					setTeamName(team.teamName);
					setTeamSports(team.teamSports);
					setTeamFor(team.teamFor);
					setLocation(team.location);
					setAvatar({ uri: team.uri });
				}
			});
		} catch (err) {
			console.log(err);
		}
	};

	const main = () => {
		const teamObj = {
			teamFor,
			teamName,
			teamSports,
			location,
			uri: avatar.uri,
		};
		if (exist) {
			update(ref(db, 'teams/' + id), teamObj)
				.then(() => {
					navigation.navigate('TabNavigator');
				})
				.catch(error => {
					console.log(error.message);
				});
		} else {
			set(ref(db, 'teams/' + id), teamObj)
				.then(() => {
					update(ref(db, 'users/' + id), {
						team: { id, teamName },
					}).then(() => navigation.navigate('TabNavigator'));
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
		<ScrollView>
			<View style={styles.menubar}>
				<View style={styles.view1}>
					<View style={styles.view3}>
						<TouchableOpacity
							style={[styles.icon1, { width: '10%' }]}
							onPress={() => navigation.navigate('TabNavigator')}>
							<Ionicons
								name='arrow-back-outline'
								color={'white'}
								size={25}
							/>
						</TouchableOpacity>
						<View style={{ width: '70%', alignSelf: 'center' }}>
							<Text style={styles.text1}>Edit Team</Text>
						</View>
						<TouchableOpacity
							style={[styles.icon1, { width: '20%' }]}
							onPress={() => main()}>
							<Text style={styles.text1}>Save</Text>
						</TouchableOpacity>
					</View>

					<View style={styles.view6}>
						<ImageBackground
							source={avatar}
							imageStyle={{
								width: 110,
								height: 110,
								borderRadius: 60,
							}}>
							<TouchableOpacity
								style={{ marginLeft: 80, marginTop: 70 }}
								onPress={selectImage}>
								<Ionicons
									name='camera-outline'
									size={30}
									style={{
										backgroundColor: 'white',
										color: '#020D28',
										borderRadius: 20,
										padding: 3,
									}}
								/>
							</TouchableOpacity>
						</ImageBackground>
					</View>
				</View>
			</View>

			<View style={styles.midview}>
				<View style={styles.inputView7}>
					<Text
						style={{
							color: '#020D28',
							fontSize: 18,
							fontWeight: 'bold',
						}}>
						Team Name
					</Text>
					<TextInput
						placeholder='Mick Joffery'
						placeholderTextColor='gray'
						style={{ ...styles.input, color: 'black' }}
						value={teamName}
						onChangeText={setTeamName}
					/>
					<Text
						style={{
							color: '#020D28',
							fontSize: 18,
							fontWeight: 'bold',
						}}>
						Team Sports
					</Text>
					<TextInput
						placeholder='Football'
						placeholderTextColor='gray'
						style={{ ...styles.input, color: 'black' }}
						value={teamSports}
						onChangeText={setTeamSports}
					/>
					<Text
						style={{
							color: '#020D28',
							fontSize: 18,
							fontWeight: 'bold',
						}}>
						Team For
					</Text>
					<TextInput
						placeholder='Men'
						placeholderTextColor='gray'
						style={{ ...styles.input, color: 'black' }}
						value={teamFor}
						onChangeText={setTeamFor}
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
				</View>
			</View>
		</ScrollView>
	);
}
