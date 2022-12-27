import * as React from 'react';
import { TouchableOpacity, Image, Text, View, StyleSheet } from 'react-native';
import { colors } from '../assets/colors';

export default function Notifications() {
	return (
		<View>
			<View style={styles.container}>
				<TouchableOpacity style={styles.image}>
					<Image
						source={require('../assets/pics/Group97.png')}></Image>
				</TouchableOpacity>
				<Text style={styles.notifications}>Notification</Text>
				<TouchableOpacity onPress={() => {}} style={styles.bellIcon}>
					<Image
						source={require('../assets/pics/Vector.png')}
						style={styles.imageBellIcon}></Image>
				</TouchableOpacity>

				<TouchableOpacity>
					<Image
						source={require('../assets/pics/Vector(1).png')}
						style={styles.arrowIcon}></Image>
				</TouchableOpacity>
			</View>

			<View style={styles.makeRow}>
				<Image
					source={require('../assets/pics/roundedAvatar.png')}
					style={styles.imageAvatar}></Image>
				<View style={styles.column}>
					<View style={styles.teamDetails}>
						<Text
							style={{
								fontWeight: 'bold',
								marginTop: 10,
								marginLeft: 10,
								color: 'black',
							}}>
							Team Match
						</Text>
						<Image
							source={require('../assets/pics/Group5.png')}
							style={styles.membersImage}></Image>
						<Text style={{ marginTop: 10, color: 'black' }}>
							{' '}
							32 Members{' '}
						</Text>
					</View>

					<Text
						style={{
							...styles.notificationDescription,
							color: 'black',
						}}>
						London Club have a team on 10th November Helooajsoci
						acoias aoijcoasi
					</Text>

					<View style={{ flexDirection: 'row' }}>
						<TouchableOpacity style={styles.buttonreq}>
							<Text style={{ color: 'white' }}>Accept</Text>
						</TouchableOpacity>
						<TouchableOpacity style={styles.decline}>
							<Text style={{ color: colors.royalBlue }}>
								Decline
							</Text>
						</TouchableOpacity>
					</View>
				</View>
			</View>

			<View style={styles.makeRow}>
				<Image
					source={require('../assets/pics/roundedAvatar.png')}
					style={styles.imageAvatar}></Image>
				<View style={styles.column}>
					<View style={styles.teamDetails}>
						<Text
							style={{
								fontWeight: 'bold',
								marginTop: 10,
								marginLeft: 10,
								color: 'black',
							}}>
							Team Match
						</Text>
						<Image
							source={require('../assets/pics/Group5.png')}
							style={styles.membersImage}></Image>
						<Text style={{ marginTop: 10, color: 'black' }}>
							{' '}
							32 Members{' '}
						</Text>
					</View>

					<Text
						style={{
							...styles.notificationDescription,
							color: 'black',
						}}>
						London Club have a team on 10th November Helooajsoci
						acoias aoijcoasi
					</Text>

					<View style={{ flexDirection: 'row' }}>
						<TouchableOpacity style={styles.buttonreq}>
							<Text style={{ color: 'white' }}>Accept</Text>
						</TouchableOpacity>
						<TouchableOpacity style={styles.decline}>
							<Text style={{ color: colors.royalBlue }}>
								Decline
							</Text>
						</TouchableOpacity>
					</View>
				</View>
			</View>
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		backgroundColor: colors.royalBlue,
		height: 150,
		flexDirection: 'row',
	},
	image: {
		alignSelf: 'center',
		marginLeft: 20,
		width: 25,
		height: 20,
		marginTop: 50,
	},
	notifications: {
		color: 'white',
		marginTop: 80,
		marginLeft: 65,
		fontSize: 20,
	},
	bellIcon: {
		backgroundColor: 'white',
		marginTop: 70,
		marginLeft: 50,
		width: 40,
		height: 40,
		borderRadius: 75,
		alignItems: 'center',
		justifyContent: 'center',
	},
	imageBellIcon: {
		alignSelf: 'center',
	},
	arrowIcon: {
		marginTop: 75,
		marginLeft: 10,
		width: 30,
		height: 30,
	},
	teamDetails: {
		flexDirection: 'row',
	},
	imageAvatar: {
		marginTop: 10,
		marginLeft: 10,
		width: 75,
		height: 75,
		borderRadius: 75,
		overflow: 'hidden',
		borderColor: 'white',
	},
	membersImage: {
		marginTop: 10,
		marginLeft: '10%',
		width: 50,
		height: 25,
		resizeMode: 'contain',
		overflow: 'hidden',
		borderColor: 'white',
	},
	buttonreq: {
		width: '40%',
		height: 30,
		marginLeft: 10,
		marginTop: 20,
		backgroundColor: colors.royalBlue,
		borderRadius: 10,
		alignItems: 'center',
		justifyContent: 'center',
	},
	column: {
		flexDirection: 'column',
	},
	makeRow: {
		marginTop: 20,
		shadowColor: '#d9d9d9',
		shadowRadius: 2,
		shadowOffset: {
			height: 2,
			width: 2,
		},
		elevation: 10,
		width: '100%',
		height: 150,
		borderRadius: 20,
		backgroundColor: '#fff',
		flexDirection: 'row',
	},
	notificationDescription: {
		marginTop: 20,
		marginLeft: 10,
	},
	decline: {
		borderColor: colors.royalBlue,
		borderWidth: 1,
		width: '40%',
		height: 30,
		marginLeft: 10,
		marginTop: 20,
		borderRadius: 10,
		alignItems: 'center',
		justifyContent: 'center',
	},
});
