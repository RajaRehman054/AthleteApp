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

const img1 = require('../assets/pics/image2.png');
export default function EditingTeam({ navigation }) {
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
							onPress={() => navigation.navigate('TabNavigator')}>
							<Text style={styles.text1}>Save</Text>
						</TouchableOpacity>
					</View>

					<View style={styles.view6}>
						<ImageBackground
							source={img1}
							imageStyle={{
								width: 110,
								height: 110,
								borderRadius: 60,
							}}>
							<TouchableOpacity
								style={{ marginLeft: 80, marginTop: 70 }}>
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
						style={styles.input}
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
						style={styles.input}
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
				</View>
			</View>
		</ScrollView>
	);
}
