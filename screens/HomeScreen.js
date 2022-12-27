import React, { useState } from 'react';
import { Text, View, TouchableOpacity } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { Avatar } from 'react-native-paper';
import styles from './styles';
import Matches from '../screens/Matches';
import Participants from '../screens/Participants';

const img1 = require('../assets/pics/image2.png');
export default function HomeScreen({ navigation, route }) {
	const [data, setdata] = useState(1);
	const [col, setcolor] = useState('#020D28');
	const [col1, setcolor1] = useState('gray');

	const changetextcolor = () => {
		if (data === 1) {
			setcolor('gray');
			setcolor1('#020D28');
		} else {
			setcolor('#020D28');
			setcolor1('gray');
		}
	};
	return (
		<View>
			<View style={styles.headerbar}>
				<View style={styles.leftview1}>
					<View style={styles.leftview6}>
						<Avatar.Image
							source={img1}
							size={70}
							style={styles.headerimg}
						/>

						<View
							style={{ marginLeft: 'auto', marginRight: 'auto' }}>
							<Text style={styles.text4}>Soccer Team</Text>
							<Text style={styles.text5}>Men's Team</Text>

							<View style={{ flexDirection: 'row' }}>
								<Ionicons
									name='location'
									color={'white'}
									size={11}
									style={styles.location}
								/>
								<Text style={styles.text5}>London</Text>
							</View>
						</View>
					</View>
				</View>

				<View style={styles.rightview2}>
					<View style={styles.rightview3}>
						<Text style={styles.text1}>London Club</Text>
						<TouchableOpacity
							style={styles.settings}
							onPress={() => navigation.navigate('EditingTeam')}>
							<Ionicons
								name='ios-settings-sharp'
								color={'white'}
								size={25}
							/>
						</TouchableOpacity>
					</View>

					<View style={styles.rightview5}>
						<Text style={styles.text2}>26</Text>
						<Text style={styles.text3}> Participants</Text>
					</View>

					<View style={styles.rightview4}>
						<View style={styles.buttonview}>
							<TouchableOpacity
								style={styles.messagebutton}
								onPress={() => navigation.navigate('Messages')}>
								<Text
									style={{
										color: '#020D28',
										fontWeight: 'bold',
										fontSize: 14,
									}}>
									Message
								</Text>
							</TouchableOpacity>
							<TouchableOpacity
								style={styles.settingsbutton}
								onPress={() => navigation.navigate('Settings')}>
								<Text
									style={{
										color: 'white',
										fontWeight: 'bold',
										fontSize: 14,
									}}>
									Settings
								</Text>
							</TouchableOpacity>
						</View>
					</View>
				</View>
			</View>

			<View style={styles.switchbar}>
				<View style={styles.switchbarcont}>
					<TouchableOpacity>
						<Text
							style={{ color: col }}
							onPress={() => {
								setdata(1);
								changetextcolor();
							}}>
							Participants
						</Text>
					</TouchableOpacity>
					<TouchableOpacity>
						<Text
							style={{ color: col1 }}
							onPress={() => {
								setdata(2);
								changetextcolor();
							}}>
							Matches
						</Text>
					</TouchableOpacity>
				</View>
			</View>

			<View style={styles.midview}>
				{data === 1 ? (
					<Participants navigation={navigation} />
				) : (
					<Matches navigation={navigation} />
				)}
			</View>
		</View>
	);
}
