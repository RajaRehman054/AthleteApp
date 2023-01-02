import { TextInput, TouchableOpacity, Image, Text, View } from 'react-native';
import Feather from 'react-native-vector-icons/Feather';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { Avatar } from 'react-native-paper';
import styles from './stylesnew';

const img1 = require('../assets/pics/image2.png');
const img2 = require('../assets/pics/jrz1y1(2).png');

export default function AthletePage({ navigation }) {
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

			<View style={{ width: '95%', alignSelf: 'center' }}>
				<View style={[styles.column, { height: 85 }]}>
					<View
						style={{
							width: '20%',
							alignItems: 'center',
							justifyContent: 'center',
						}}>
						<Avatar.Image source={img1} size={50} />
					</View>
					<View style={{ width: '80%' }}>
						<View
							style={{
								height: '50%',
								flexDirection: 'row',
								justifyContent: 'space-between',
								alignItems: 'center',
							}}>
							<Text
								style={{
									fontWeight: 'bold',
									color: 'black',
									fontSize: 18,
								}}>
								Harry
							</Text>
							<Text
								style={{
									color: 'gray',
									fontSize: 13,
								}}>
								Professional NCAA
							</Text>
							<View style={{ flexDirection: 'row' }}>
								<Ionicons
									name='location'
									color={'gray'}
									size={20}
									style={{
										marginLeft: 'auto',
										marginRight: 'auto',
									}}
								/>
								<Text
									style={{
										marginRight: 10,
										fontSize: 10,
										marginTop: 5,
										color: 'gray',
									}}>
									London
								</Text>
							</View>
						</View>
						<View
							style={{
								height: '50%',
								flexDirection: 'row',
								alignItems: 'center',
							}}>
							<TouchableOpacity
								style={[
									styles.button,
									{
										backgroundColor: '#020D28',
										width: '31%',
										marginRight: 3,
									},
								]}>
								<Text style={{ color: 'white', fontSize: 13 }}>
									Follow
								</Text>
							</TouchableOpacity>
							<TouchableOpacity
								style={[
									styles.button,
									{
										borderColor: '#020D28',
										width: '31%',
										marginRight: 3,
									},
								]}>
								<Text
									style={{ color: '#020D28', fontSize: 13 }}>
									Message
								</Text>
							</TouchableOpacity>
							<TouchableOpacity
								style={[
									styles.button,
									{
										backgroundColor: 'black',
										borderColor: 'black',
										width: '31%',
									},
								]}>
								<Text style={{ color: 'white', fontSize: 13 }}>
									Invite
								</Text>
							</TouchableOpacity>
						</View>
					</View>
				</View>

				<View style={[styles.column, { height: 85 }]}>
					<View
						style={{
							width: '20%',
							alignItems: 'center',
							justifyContent: 'center',
						}}>
						<Avatar.Image source={img1} size={50} />
					</View>
					<View style={{ width: '80%' }}>
						<View
							style={{
								height: '50%',
								flexDirection: 'row',
								justifyContent: 'space-between',
								alignItems: 'center',
							}}>
							<Text
								style={{
									fontWeight: 'bold',
									color: 'black',
									fontSize: 18,
								}}>
								Harry
							</Text>
							<Text
								style={{
									color: 'gray',
									fontSize: 13,
								}}>
								Professional NCAA
							</Text>
							<View style={{ flexDirection: 'row' }}>
								<Ionicons
									name='location'
									color={'gray'}
									size={20}
									style={{
										marginLeft: 'auto',
										marginRight: 'auto',
									}}
								/>
								<Text
									style={{
										marginRight: 10,
										fontSize: 10,
										marginTop: 5,
										color: 'gray',
									}}>
									London
								</Text>
							</View>
						</View>
						<View
							style={{
								height: '50%',
								flexDirection: 'row',
								alignItems: 'center',
							}}>
							<TouchableOpacity
								style={[
									styles.button,
									{
										backgroundColor: '#020D28',
										width: '31%',
										marginRight: 3,
									},
								]}>
								<Text style={{ color: 'white', fontSize: 13 }}>
									Follow
								</Text>
							</TouchableOpacity>
							<TouchableOpacity
								style={[
									styles.button,
									{
										borderColor: '#020D28',
										width: '31%',
										marginRight: 3,
									},
								]}>
								<Text
									style={{ color: '#020D28', fontSize: 13 }}>
									Message
								</Text>
							</TouchableOpacity>
							<TouchableOpacity
								style={[
									styles.button,
									{
										backgroundColor: 'black',
										borderColor: 'black',
										width: '31%',
									},
								]}>
								<Text style={{ color: 'white', fontSize: 13 }}>
									Invite
								</Text>
							</TouchableOpacity>
						</View>
					</View>
				</View>

				<View style={[styles.column, { height: 85 }]}>
					<View
						style={{
							width: '20%',
							alignItems: 'center',
							justifyContent: 'center',
						}}>
						<Avatar.Image source={img1} size={50} />
					</View>
					<View style={{ width: '80%' }}>
						<View
							style={{
								height: '50%',
								flexDirection: 'row',
								justifyContent: 'space-between',
								alignItems: 'center',
							}}>
							<Text
								style={{
									fontWeight: 'bold',
									color: 'black',
									fontSize: 18,
								}}>
								Harry
							</Text>
							<Text
								style={{
									color: 'gray',
									fontSize: 13,
								}}>
								Professional NCAA
							</Text>
							<View style={{ flexDirection: 'row' }}>
								<Ionicons
									name='location'
									color={'gray'}
									size={20}
									style={{
										marginLeft: 'auto',
										marginRight: 'auto',
									}}
								/>
								<Text
									style={{
										marginRight: 10,
										fontSize: 10,
										marginTop: 5,
										color: 'gray',
									}}>
									London
								</Text>
							</View>
						</View>
						<View
							style={{
								height: '50%',
								flexDirection: 'row',
								alignItems: 'center',
							}}>
							<TouchableOpacity
								style={[
									styles.button,
									{
										backgroundColor: '#020D28',
										width: '31%',
										marginRight: 3,
									},
								]}>
								<Text style={{ color: 'white', fontSize: 13 }}>
									Follow
								</Text>
							</TouchableOpacity>
							<TouchableOpacity
								style={[
									styles.button,
									{
										borderColor: '#020D28',
										width: '31%',
										marginRight: 3,
									},
								]}>
								<Text
									style={{ color: '#020D28', fontSize: 13 }}>
									Message
								</Text>
							</TouchableOpacity>
							<TouchableOpacity
								style={[
									styles.button,
									{
										backgroundColor: 'black',
										borderColor: 'black',
										width: '31%',
									},
								]}>
								<Text style={{ color: 'white', fontSize: 13 }}>
									Invite
								</Text>
							</TouchableOpacity>
						</View>
					</View>
				</View>
			</View>
		</View>
	);
}
