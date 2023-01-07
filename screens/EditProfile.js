import {
	Text,
	View,
	TouchableOpacity,
	ScrollView,
	ImageBackground,
	TextInput,
} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import styles from './stylesnew';
import { onValue, ref, update } from 'firebase/database';
import { db } from '../firebase';
import { useState, useEffect } from 'react';
import * as ImagePicker from 'react-native-image-picker/';

const img = require('../assets/pics/image2.png');
const img1 = require('../assets/pics/pexels-nappy-936094.jpg');
export default function EditProfile({ navigation, route }) {
	const [id, setId] = useState(route.params.id);
	const [user, setUser] = useState('');
	const [email, setEmail] = useState('');
	const [toA, setToA] = useState('');
	const [toS, setToS] = useState('');
	const [gender, setGender] = useState('');
	const [college, setCollege] = useState('');
	const [interest, setInterest] = useState('');
	const [avatar, setAvatar] = useState(img);

	const selectImage = () => {
		ImagePicker.launchImageLibrary({}, response => {
			console.log(response);
			if (response.didCancel) {
				console.log('User cancelled image picker');
			} else if (response.error) {
				console.log('ImagePicker Error: ', response.error);
			} else {
				setAvatar({ uri: response.assets[0].uri });
			}
		});
	};

	const getData = () => {
		return onValue(ref(db, '/users/' + id), snapshot => {
			const user = snapshot.toJSON();
			setUser(user.username);
			setEmail(user.email);
			setToA(user.toA);
			setToS(user.toS);
			setGender(user.gender);
			setCollege(user.college);
			setInterest(user.interest);
			if (user.uri) {
				setAvatar({ uri: user.uri });
			}
		});
	};

	const save = () => {
		const userObj = {
			username: user,
			email,
			toA,
			toS,
			gender,
			college,
			interest,
			uri: avatar.uri,
		};
		update(ref(db, 'users/' + id), userObj)
			.then(() => {
				navigation.navigate('TabNavigator');
			})
			.catch(error => {
				console.log(error.message);
			});
	};

	useEffect(() => {
		getData();
	}, []);

	return (
		<View>
			<ScrollView>
				<View style={styles.menubar22}>
					<View style={styles.view1}>
						<View style={styles.view3}>
							<TouchableOpacity
								style={[styles.icon44, { width: '10%' }]}
								onPress={() => navigation.goBack()}>
								<Ionicons
									name='arrow-back-outline'
									color={'white'}
									size={25}
								/>
							</TouchableOpacity>
							<View style={{ width: '70%', alignSelf: 'center' }}>
								<Text style={styles.text1}>Edit Profile</Text>
							</View>
							<TouchableOpacity
								style={[styles.icon44, { width: '20%' }]}
								onPress={save}>
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
									resizeMode: 'cover',
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
					<View
						style={{
							width: '90%',
							alignSelf: 'center',
							height: 200,
						}}>
						<ImageBackground
							source={img1}
							style={{
								width: '100%',
								height: '100%',
								alignItems: 'center',
								justifyContent: 'center',
							}}
							imageStyle={{ opacity: 0.6 }}>
							<TouchableOpacity>
								<Ionicons
									name='videocam-outline'
									size={30}
									style={{
										backgroundColor: 'white',
										color: '#020D28',
										borderRadius: 20,
										padding: 5,
									}}
								/>
							</TouchableOpacity>
						</ImageBackground>
					</View>
				</View>
				<View style={styles.midview}>
					<View style={styles.partView7}>
						<Text
							style={{
								color: '#020D28',
								fontSize: 18,
								fontWeight: 'bold',
							}}>
							Username
						</Text>
						<TextInput
							placeholder='Mick 054'
							placeholderTextColor='gray'
							style={{ ...styles.input, color: 'black' }}
							value={user}
							onChangeText={setUser}
						/>
						<Text
							style={{
								color: '#020D28',
								fontSize: 18,
								fontWeight: 'bold',
							}}>
							Email
						</Text>
						<TextInput
							placeholder='   mickjoffery@gmail.com'
							placeholderTextColor='gray'
							style={{ ...styles.input, color: 'black' }}
							value={email}
							onChangeText={setEmail}
						/>
						<Text
							style={{
								color: '#020D28',
								fontSize: 18,
								fontWeight: 'bold',
							}}>
							Type Of Athlete
						</Text>
						<TextInput
							placeholder='   Select your Level'
							placeholderTextColor='gray'
							style={{ ...styles.input, color: 'black' }}
							value={toA}
							onChangeText={setToA}
						/>
						<Text
							style={{
								color: '#020D28',
								fontSize: 18,
								fontWeight: 'bold',
							}}>
							Type Of Sports
						</Text>
						<TextInput
							placeholder='   Select your sports'
							placeholderTextColor='gray'
							style={{ ...styles.input, color: 'black' }}
							value={toS}
							onChangeText={setToS}
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
							placeholder='   Select your gender'
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
							College or University
						</Text>
						<TextInput
							placeholder='   College or university'
							placeholderTextColor='gray'
							style={{ ...styles.input, color: 'black' }}
							value={college}
							onChangeText={setCollege}
						/>
						<Text
							style={{
								color: '#020D28',
								fontSize: 18,
								fontWeight: 'bold',
							}}>
							Interests & Hobbies
						</Text>
						<TextInput
							placeholder='   Hiking, reading or movies'
							placeholderTextColor='gray'
							style={[
								styles.input,
								{ marginBottom: 50, color: 'black' },
							]}
							value={interest}
							onChangeText={setInterest}
						/>
					</View>
				</View>
			</ScrollView>
		</View>
	);
}
