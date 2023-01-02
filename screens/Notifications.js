import { TouchableOpacity, Image, Text, View } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { Avatar } from 'react-native-paper';
import styles from './stylesnew';

const img1 = require('../assets/pics/image2.png');
const img = require('../assets/pics/Group5.png');

export default function Notifications({ navigation }) {
	return (
		<View>
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
					Notifications
				</Text>
				<View
					style={{
						width: '22%',
						flexDirection: 'row',
						marginRight: 10,
					}}>
					<TouchableOpacity style={[styles.icon1, { width: '55%' }]}>
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
			<View style={{ width: '95%', alignSelf: 'center', marginTop: 20 }}>
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
									Team Match
								</Text>

								<View
									style={{
										flexDirection: 'row',
										marginRight: 10,
									}}>
									<Image source={img} style={{}}></Image>
									<Text style={{ fontSize: 12 }}>
										{' '}
										32 Members
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
									London Club have a team on 10th November
								</Text>
							</View>

							<View
								style={{
									height: 50,
									alignItems: 'center',
									justifyContent: 'space-around',
									flexDirection: 'row',
								}}>
								<TouchableOpacity style={styles.viewbutton}>
									<Ionicons
										name='thumbs-up-sharp'
										color={'white'}
										size={20}
									/>
								</TouchableOpacity>
								<TouchableOpacity style={styles.viewbutton1}>
									<Ionicons
										name='thumbs-down-sharp'
										color={'#020D28'}
										size={20}
									/>
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
									London Club
								</Text>

								<View
									style={{
										flexDirection: 'row',
										marginRight: 10,
									}}>
									<Image source={img} style={{}}></Image>
									<Text style={{ fontSize: 12 }}>
										{' '}
										32 Members
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
									Looking for a men’s basketball player to
									play in Fort Lauderdale on 31st October 2022
									at 8:20pm
								</Text>
							</View>

							<View
								style={{
									height: 50,
									alignItems: 'center',
									justifyContent: 'space-around',
									flexDirection: 'row',
								}}>
								<TouchableOpacity
									style={styles.viewbutton}
									onPress={() =>
										navigation.navigate('tournamentview')
									}>
									<Text style={styles.text9}>Accept</Text>
								</TouchableOpacity>
								<TouchableOpacity
									style={styles.viewbutton1}
									onPress={() =>
										navigation.navigate('tournamentview')
									}>
									<Text style={styles.text10}>Decline</Text>
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
									Game Invitation
								</Text>
							</View>

							<View
								style={{
									height: 40,
									justifyContent: 'center',
								}}>
								<Text
									style={{ fontSize: 10, color: '#020D28' }}>
									John Looking for a men’s soccer player to
									play in London on 31st October 2022 at
									8:20pm
								</Text>
							</View>

							<View
								style={{
									height: 50,
									alignItems: 'center',
									justifyContent: 'space-around',
									flexDirection: 'row',
								}}>
								<TouchableOpacity
									style={styles.viewbutton}
									onPress={() =>
										navigation.navigate('tournamentview')
									}>
									<Text style={styles.text9}>Accept</Text>
								</TouchableOpacity>
								<TouchableOpacity
									style={styles.viewbutton1}
									onPress={() =>
										navigation.navigate('tournamentview')
									}>
									<Text style={styles.text10}>Decline</Text>
								</TouchableOpacity>
							</View>
						</View>
					</View>
				</View>
			</View>
		</View>
	);
}
