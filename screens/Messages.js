import { TouchableOpacity, Text, View, StyleSheet } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { Avatar } from 'react-native-paper';
import styles from './stylesnew';

const img1 = require('../assets/pics/image2.png');

export default function Messages({ navigation }) {
	return (
		<View>
			<View style={styles.menubar25}>
				<TouchableOpacity
					style={[styles.icon16, { width: '10%' }]}
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
					Chat
				</Text>
				<View style={{ width: '10%', marginRight: 10 }}></View>
			</View>
			<View style={{ width: '95%', alignSelf: 'center' }}>
				<TouchableOpacity
					style={styles.makeRow1}
					onPress={() => navigation.navigate('MessageChat')}>
					<View
						style={{
							width: '25%',
							alignItems: 'center',
							justifyContent: 'center',
						}}>
						<Avatar.Image source={img1} size={65} />
					</View>
					<View
						style={{
							width: '65%',
							alignItems: 'center',
							justifyContent: 'center',
						}}>
						<Text
							style={{
								...styles.messagesDescription,
								color: 'black',
							}}>
							John Looking for Men's Soccerr Player to play
							tournament on 20/2/2014.
						</Text>
					</View>

					<View
						style={{
							width: '10%',
							alignItems: 'center',
							justifyContent: 'center',
						}}>
						<Ionicons
							name='chevron-forward'
							color={'gray'}
							size={30}
						/>
					</View>
				</TouchableOpacity>
				<TouchableOpacity
					style={styles.makeRow1}
					onPress={() => navigation.navigate('MessageChat')}>
					<View
						style={{
							width: '25%',
							alignItems: 'center',
							justifyContent: 'center',
						}}>
						<Avatar.Image source={img1} size={65} />
					</View>
					<View
						style={{
							width: '65%',
							alignItems: 'center',
							justifyContent: 'center',
						}}>
						<Text
							style={{
								...styles.messagesDescription,
								color: 'black',
							}}>
							John Looking for Men's Soccerr Player to play
							tournament on 20/2/2014.
						</Text>
					</View>

					<View
						style={{
							width: '10%',
							alignItems: 'center',
							justifyContent: 'center',
						}}>
						<Ionicons
							name='chevron-forward'
							color={'gray'}
							size={30}
						/>
					</View>
				</TouchableOpacity>
				<TouchableOpacity
					style={styles.makeRow1}
					onPress={() => navigation.navigate('MessageChat')}>
					<View
						style={{
							width: '25%',
							alignItems: 'center',
							justifyContent: 'center',
						}}>
						<Avatar.Image source={img1} size={65} />
					</View>
					<View
						style={{
							width: '65%',
							alignItems: 'center',
							justifyContent: 'center',
						}}>
						<Text
							style={{
								...styles.messagesDescription,
								color: 'black',
							}}>
							John Looking for Men's Soccerr Player to play
							tournament on 20/2/2014.
						</Text>
					</View>

					<View
						style={{
							width: '10%',
							alignItems: 'center',
							justifyContent: 'center',
						}}>
						<Ionicons
							name='chevron-forward'
							color={'gray'}
							size={30}
						/>
					</View>
				</TouchableOpacity>
			</View>
		</View>
	);
}
