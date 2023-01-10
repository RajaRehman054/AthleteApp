import {
	TextInput,
	TouchableOpacity,
	Image,
	Text,
	View,
	ActivityIndicator,
	FlatList,
} from 'react-native';
import Feather from 'react-native-vector-icons/Feather';
import Ionicons from 'react-native-vector-icons/Ionicons';
import styles from './stylesnew';
import { renderFunction } from './renderFunctions/TeamPage';

import { useEffect, useState } from 'react';
import { db } from '../firebase';
import { ref, onValue } from 'firebase/database';

const img2 = require('../assets/pics/jrz1y1(2).png');

export default function SearchTeam({ navigation }) {
	const [teams, setTeams] = useState([]);
	const [loader, setLoader] = useState(true);

	const fetchData = () => {
		onValue(ref(db, 'teams'), snapshot => {
			setTeams([]);
			snapshot.forEach(elem => {
				setTeams(prev => [...prev, elem.val()]);
			});
		});
		setTimeout(() => {
			setLoader(false);
		}, 3000);
	};

	useEffect(() => {
		fetchData();
	}, []);
	return (
		<View style={{ flex: 1 }}>
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
							style={{ marginLeft: 'auto', marginRight: 'auto' }}
						/>
					</TouchableOpacity>
					<TouchableOpacity
						style={[styles.icon1, { width: '45%' }]}
						onPress={() => navigation.navigate('Messages')}>
						<Ionicons
							name='paper-plane-outline'
							color={'white'}
							size={30}
							style={{ marginLeft: 'auto', marginRight: 'auto' }}
						/>
					</TouchableOpacity>
				</View>
			</View>

			<View style={styles.topMenu}>
				<View style={styles.searchBox}>
					<TextInput
						placeholder='Search Team'
						placeholderTextColor='grey'
						style={styles.searchText}
					/>
					<Feather name='search' style={styles.searchIcon} />
				</View>
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
						Fetching Teams...
					</Text>
				</View>
			) : (
				<View style={{ alignSelf: 'center', flex: 1 }}>
					<FlatList data={teams} renderItem={renderFunction} />
				</View>
			)}
		</View>
	);
}
