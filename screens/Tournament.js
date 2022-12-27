import { Text, View, TouchableOpacity, Image, ScrollView } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { Avatar } from 'react-native-paper';
import styles from './styles';
import Participants from './Participants';

const img1 = require('../assets/pics/image2.png');
export default function Tournament({ navigation, route }) {
	return (
		<ScrollView>
			<View style={styles.matchmenubar}>
				<View style={styles.leftview1}>
					<View style={styles.matchview6}>
						<TouchableOpacity
							style={styles.backarrow}
							onPress={() => navigation.navigate('TabNavigator')}>
							<Ionicons
								name='arrow-back-outline'
								color={'white'}
								size={25}
							/>
						</TouchableOpacity>
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
						<TouchableOpacity style={styles.settings}>
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
							<TouchableOpacity style={styles.messagebutton}>
								<Text
									style={{
										color: '#020D28',
										fontWeight: 'bold',
										fontSize: 14,
									}}>
									Message
								</Text>
							</TouchableOpacity>
							<TouchableOpacity style={styles.settingsbutton}>
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

			<View style={styles.midview}>
				<View style={styles.tournamentview1}>
					<View style={styles.tournamentbar3}>
						<View style={{ height: '45%', flexDirection: 'row' }}>
							<View style={{ width: '25%' }}></View>

							<View
								style={{
									width: '50%',
									alignItems: 'center',
									justifyContent: 'center',
								}}>
								<Avatar.Image source={img1} size={80} />
							</View>

							<View
								style={{ width: '25%', flexDirection: 'row' }}>
								<Image
									source={require('../assets/pics/Group.png')}
									style={{ marginTop: 10 }}></Image>
								<Text style={{ fontSize: 12, marginTop: 10 }}>
									weekly
								</Text>
							</View>
						</View>

						<View style={{ height: '35%', alignItems: 'center' }}>
							<Text
								style={{
									fontSize: 18,
									fontWeight: 'bold',
									color: '#020D28',
								}}>
								Tournament
							</Text>
							<Text style={{ fontSize: 10, color: '#020D28' }}>
								London Club have a match on 15th
							</Text>
							<Text style={{ fontSize: 10, color: '#020D28' }}>
								November with Manchester Club At{' '}
							</Text>
							<Text style={{ fontSize: 10, color: '#020D28' }}>
								Manchester Stadium
							</Text>
						</View>

						<View
							style={{
								height: '20%',
								flexDirection: 'row',
								alignItems: 'center',
								justifyContent: 'center',
							}}>
							<Text
								style={{
									fontSize: 28,
									fontWeight: 'bold',
									color: '#020D28',
								}}>
								11
							</Text>
							<Text style={{ fontSize: 15, color: '#020D28' }}>
								Players
							</Text>
							<Text
								style={{
									fontSize: 12,
									marginTop: 2,
									color: 'gray',
								}}>
								out of 12
							</Text>
						</View>
					</View>

					<View
						style={{
							height: 45,
							alignItems: 'center',
							justifyContent: 'center',
						}}>
						<Text
							style={{
								fontSize: 22,
								fontWeight: 'bold',
								color: '#020D28',
							}}>
							Players
						</Text>
					</View>
				</View>
				<Participants />
			</View>
		</ScrollView>
	);
}
