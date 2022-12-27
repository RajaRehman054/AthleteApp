import * as React from 'react';
import { TouchableOpacity, Image, Text, View, StyleSheet } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { Avatar } from 'react-native-paper';

export default function Messages({ navigation }) {
	const img1 = require('../assets/pics/image2.png');
	return (
		<View>
			<View style={styles.menubar}>
				<TouchableOpacity
					style={[styles.icon1, { width: '10%' }]}
					onPress={() => navigation.navigate('TabNavigator')}>
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
				<View style={styles.makeRow}>
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

					<TouchableOpacity
						style={[
							styles.forwardIcon,
							{
								width: '10%',
								alignItems: 'center',
								justifyContent: 'center',
							},
						]}>
						<Image
							source={require('../assets/pics/Vector(4).png')}></Image>
					</TouchableOpacity>
				</View>

				<View style={styles.makeRow}>
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
							New Tournament happening in Harvard Futsal Stadium.
						</Text>
					</View>

					<TouchableOpacity
						style={[
							styles.forwardIcon,
							{
								width: '10%',
								alignItems: 'center',
								justifyContent: 'center',
							},
						]}>
						<Image
							source={require('../assets/pics/Vector(4).png')}></Image>
					</TouchableOpacity>
				</View>
				<View style={styles.makeRow}>
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
							Creating a new Team , need some kick-ass players in
							defence and attack.
						</Text>
					</View>

					<TouchableOpacity
						style={[
							styles.forwardIcon,
							{
								width: '10%',
								alignItems: 'center',
								justifyContent: 'center',
							},
						]}>
						<Image
							source={require('../assets/pics/Vector(4).png')}></Image>
					</TouchableOpacity>
				</View>
			</View>
		</View>
	);
}

const styles = StyleSheet.create({
	menubar: {
		flexDirection: 'row',
		height: 110,
		backgroundColor: '#020D28',
		borderBottomLeftRadius: 15,
		borderBottomRightRadius: 15,
		marginBottom: 20,
		alignItems: 'center',
	},

	icon1: {
		marginLeft: 10,
		alignSelf: 'center',
	},
	makeRow: {
		marginTop: 10,
		shadowColor: '#d9d9d9',
		shadowRadius: 2,
		shadowOffset: {
			height: 2,
			width: 2,
		},
		elevation: 10,
		width: '100%',
		height: 90,
		borderRadius: 20,
		backgroundColor: '#ffffff',
		flexDirection: 'row',
	},
	forwardIcon: {
		alignSelf: 'center',
	},
});
