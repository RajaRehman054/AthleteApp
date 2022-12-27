import {
	Text,
	View,
	TouchableOpacity,
	TextInput,
	ScrollView,
} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { Avatar } from 'react-native-paper';
import styles from './styles';

const img1 = require('../assets/pics/image2.png');
export default function MatchNow({ navigation, route }) {
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
				<View style={styles.inputView7}>
					<Text
						style={{
							color: '#020D28',
							fontSize: 18,
							fontWeight: 'bold',
						}}>
						Match Name
					</Text>
					<TextInput
						placeholder='Mick Joffery'
						placeholderTextColor='gray'
						style={styles.input}
					/>
					<Text
						style={{
							color: '#020D28',
							fontSize: 18,
							fontWeight: 'bold',
						}}>
						Number of Players
					</Text>
					<TextInput
						placeholder='5'
						placeholderTextColor='gray'
						style={styles.input}
					/>
					<Text
						style={{
							color: '#020D28',
							fontSize: 18,
							fontWeight: 'bold',
						}}>
						Repteat
					</Text>
					<TextInput
						placeholder='5'
						placeholderTextColor='gray'
						style={styles.input}
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
						style={styles.input}
					/>
					<TouchableOpacity
						style={styles.button11}
						onPress={() => navigation.navigate('TabNavigator')}>
						<Text style={styles.text12}>Match now</Text>
					</TouchableOpacity>

					<View
						style={{
							height: 30,
							alignItems: 'center',
							justifyContent: 'center',
						}}>
						<TouchableOpacity>
							<Text style={{ fontSize: 15, color: 'gray' }}>
								Match later
							</Text>
						</TouchableOpacity>
					</View>
				</View>
			</View>
		</ScrollView>
	);
}
