import {
	TextInput,
	TouchableOpacity,
	Image,
	Text,
	View,
	FlatList,
	ActivityIndicator,
} from 'react-native';
import Feather from 'react-native-vector-icons/Feather';
import Ionicons from 'react-native-vector-icons/Ionicons';
import styles from './stylesnew';
import { useEffect, useState } from 'react';
import { db } from '../firebase';
import { ref, onValue } from 'firebase/database';
import { renderFunction } from './renderFunctions/AthletePage';

const img2 = require('../assets/pics/jrz1y1(2).png');

export default function AthletePage({ navigation }) {
	const [athletes, setAthletes] = useState([]);
	const [loader, setLoader] = useState(true);

	const fetchData = () => {
		onValue(ref(db, 'users'), snapshot => {
			setAthletes([]);
			snapshot.forEach(elem => {
				setAthletes(prev => [...prev, elem.val()]);
			});
		});
		setInterval(() => {
			setLoader(false);
		}, 4000);
	};

	useEffect(() => {
		fetchData();
	}, []);

	return (
		<View>
			<View style={styles.menubar}>
				<TouchableOpacity
					style={[styles.icon1, { width: '17%', marginLeft: 10 }]}>
					<Image source={img2} style={styles.image}></Image>
				</TouchableOpacity>

				<View
					style={{
						width: '22%',
						flexDirection: 'row',
						marginRight: 10,
					}}>
					<TouchableOpacity
						style={[styles.icon1, { width: '55%' }]}
						onPress={() => navigation.navigate('Notifications')}>
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

			<View style={styles.topMenu1}>
				<View style={styles.searchBox1}>
					<TextInput
						placeholder='Search Athlete'
						placeholderTextColor='grey'
						style={styles.searchText}
					/>
					<Feather name='search' style={styles.searchIcon} />
				</View>
				<TouchableOpacity
					style={styles.lookingForBtn}
					onPress={() => navigation.navigate('LookingForAthlete')}>
					<Text style={{ color: 'white', fontSize: 13 }}>
						Looking For Athlete
					</Text>
				</TouchableOpacity>
			</View>
			{loader ? (
				<View>
					<ActivityIndicator size='large' color='blue' />
					<Text
						style={{
							color: '#020D28',
							alignSelf: 'center',
							margin: 20,
						}}>
						Fetching Data...
					</Text>
				</View>
			) : (
				<View style={{ width: '95%', alignSelf: 'center' }}>
					<FlatList data={athletes} renderItem={renderFunction} />
				</View>
			)}
		</View>
	);
}
