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

const img = require('../assets/pics/image2.png');
const img1 = require('../assets/pics/pexels-nappy-936094.jpg');
export default function EditProfile({ navigation }) {
	return (
		<View>
			<ScrollView>
				<View style={styles.menubar22}>
					<View style={styles.view1}>
						<View style={styles.view3}>
							<TouchableOpacity
								style={[styles.icon44, { width: '10%' }]} onPress={()=>navigation.goBack()}>
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
								style={[styles.icon44, { width: '20%' }]}>
								<Text style={styles.text1}>Save</Text>
							</TouchableOpacity>
						</View>

						<View style={styles.view6}>
							<ImageBackground
								source={img}
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
							Full Name
						</Text>
						<TextInput
							placeholder='   Mick Joffery'
							placeholderTextColor='gray'
							style={styles.input}
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
							style={styles.input}
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
							style={styles.input}
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
							placeholder='   Select your gender'
							placeholderTextColor='gray'
							style={styles.input}
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
							style={styles.input}
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
							style={[styles.input, { marginBottom: 50 }]}
						/>
					</View>
				</View>
			</ScrollView>
		</View>
	);
}
