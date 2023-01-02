import { TextInput, TouchableOpacity, Image, Text, View } from 'react-native';
import Feather from 'react-native-vector-icons/Feather';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { Avatar } from 'react-native-paper';
import styles from './stylesnew';

const img1 = require('../assets/pics/image2.png');
const img2 = require('../assets/pics/jrz1y1(2).png');
const img3 = require('../assets/pics/Group.png');

export default function MatchesScreen({ navigation }) {
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

			<View style={styles.topMenu}>
				<View style={styles.searchBox}>
					<TextInput
						placeholder='Search Match'
						placeholderTextColor='grey'
						style={styles.searchText}
					/>
					<Feather name='search' style={styles.searchIcon} />
				</View>
			</View>

			<View style={{ width: '95%', alignSelf: 'center' }}>
				<View style={styles.matchbar4}>
					<View style={{ height: '45%', flexDirection: 'row' }}>
						<View style={styles.matchimage}>
							<Avatar.Image source={img1} size={65} style={{}} />
						</View>

						<View style={{ width: '75%' }}>
							<View style={styles.barinner}>
								<Text
									style={{
										fontSize: 18,
										fontWeight: 'bold',
										color: '#020D28',
									}}>
									Tournament
								</Text>

								<View
									style={{
										flexDirection: 'row',
										marginRight: 10,
									}}>
									<Text style={{ fontSize: 12 }}>11/12 </Text>
									<Image source={img3} style={{}}></Image>
									<Text
										style={{
											fontSize: 12,
											color: 'black',
										}}>
										{' '}
										weekly
									</Text>
								</View>
							</View>

							<View
								style={{
									height: 40,
									justifyContent: 'center',
								}}>
								<Text
									style={{ fontSize: 10, color: '#020D28' }}>
									London Club have a match on 15th November
									with Manchester Club At Manchester Stadium
								</Text>
							</View>

							<View
								style={{
									height: 50,
									alignItems: 'center',
									justifyContent: 'center',
								}}>
								<TouchableOpacity
									style={styles.viewbutton22}
									onPress={() =>
										navigation.navigate('Tournament')
									}>
									<Text style={styles.text9}>View</Text>
								</TouchableOpacity>
							</View>
						</View>
					</View>
				</View>

				<View style={styles.matchbar4}>
					<View style={{ height: '45%', flexDirection: 'row' }}>
						<View style={styles.matchimage}>
							<Avatar.Image source={img1} size={65} style={{}} />
						</View>

						<View style={{ width: '75%' }}>
							<View style={styles.barinner}>
								<Text
									style={{
										fontSize: 18,
										fontWeight: 'bold',
										color: '#020D28',
									}}>
									Tournament
								</Text>

								<View
									style={{
										flexDirection: 'row',
										marginRight: 10,
									}}>
									<Text style={{ fontSize: 12 }}>11/12 </Text>
									<Image source={img3} style={{}}></Image>
									<Text
										style={{
											fontSize: 12,

											color: 'black',
										}}>
										{' '}
										weekly
									</Text>
								</View>
							</View>

							<View
								style={{
									height: 40,
									justifyContent: 'center',
								}}>
								<Text
									style={{ fontSize: 10, color: '#020D28' }}>
									London Club have a match on 15th November
									with Manchester Club At Manchester Stadium
								</Text>
							</View>

							<View
								style={{
									height: 50,
									alignItems: 'center',
									justifyContent: 'center',
								}}>
								<TouchableOpacity
									style={styles.viewbutton22}
									onPress={() =>
										navigation.navigate('Tournament')
									}>
									<Text style={styles.text9}>View</Text>
								</TouchableOpacity>
							</View>
						</View>
					</View>
				</View>
			</View>
		</View>
	);
}
