import {
	TouchableOpacity,
	Text,
	View,
	ScrollView,
	TextInput,
} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import styles from './stylesnew';
export default function LookingForAthlete({ navigation }) {
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
							style={styles.input}
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
							style={styles.input}
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
							style={styles.input}
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
							style={[styles.input, { height: 130 }]}
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
							style={styles.input}
						/>

						<TouchableOpacity style={styles.button11}>
							<Text style={styles.text12}>Completed</Text>
						</TouchableOpacity>
						<TouchableOpacity style={styles.button13}>
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
