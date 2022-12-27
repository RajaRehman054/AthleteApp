import * as React from 'react';
import {
	TextInput,
	TouchableOpacity,
	Image,
	Text,
	View,
	StyleSheet,
} from 'react-native';
import Feather from 'react-native-vector-icons/Feather';

export default function App() {
	return (
		<View>
			<View style={styles.container}>
				<Image
					source={require('../assets/pics/jrz1y1(2).png')}
					style={styles.image}></Image>

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

			<View style={styles.topMenu}>
				<View style={styles.searchBox}>
					<TextInput
						placeholder='Search Athlete'
						style={styles.searchText}
					/>
					<Feather name='search' style={styles.searchIcon} />
				</View>
				<TouchableOpacity style={styles.lookingForBtn}>
					<Text style={{ color: 'white' }}>Looking For Athlete</Text>
				</TouchableOpacity>
			</View>

			<View style={{ marginTop: 10 }}>
				<View style={styles.column}>
					<View style={styles.teamDetails}>
						<Image
							source={require('../assets/pics/roundedAvatar.png')}
							style={styles.imageAvatar}></Image>
						<Text
							style={{
								fontWeight: 'bold',
								marginTop: 10,
								marginLeft: 10,
								color: 'black',
							}}>
							{' '}
							Harry
						</Text>
						<View
							style={{
								flexDirection: 'row',
								justifyContent: 'space-evenly',
							}}>
							<Text
								style={{
									marginTop: 10,
									marginLeft: 10,
									color: 'black',
								}}>
								{' '}
								Professional NCAA{' '}
							</Text>
							<Image
								source={require('../assets/pics/Vector(3).png')}
								style={{ ...styles.membersImage }}></Image>
							<Text style={{ marginTop: 10, color: 'black' }}>
								London
							</Text>
						</View>
					</View>
					<View style={{ flexDirection: 'row' }}>
						<TouchableOpacity style={styles.buttonreq}>
							<Text style={{ color: 'white' }}>Follow</Text>
						</TouchableOpacity>
						<TouchableOpacity style={styles.decline}>
							<Text style={{ color: '#020D28' }}>Message</Text>
						</TouchableOpacity>
						<TouchableOpacity
							style={{ ...styles.buttonreq, marginLeft: 5 }}>
							<Text style={{ color: 'white' }}>Invite</Text>
						</TouchableOpacity>
					</View>
				</View>
			</View>

			<View style={{ marginTop: 10 }}>
				<View style={styles.column}>
					<View style={styles.teamDetails}>
						<Image
							source={require('../assets/pics/roundedAvatar.png')}
							style={styles.imageAvatar}></Image>
						<Text
							style={{
								fontWeight: 'bold',
								marginTop: 10,
								marginLeft: 10,
								color: 'black',
							}}>
							{' '}
							Harry
						</Text>
						<View
							style={{
								flexDirection: 'row',
								justifyContent: 'space-evenly',
							}}>
							<Text
								style={{
									marginTop: 10,
									marginLeft: 10,
									color: 'black',
								}}>
								{' '}
								Professional NCAA{' '}
							</Text>
							<Image
								source={require('../assets/pics/Vector(3).png')}
								style={{ ...styles.membersImage }}></Image>
							<Text style={{ marginTop: 10, color: 'black' }}>
								London
							</Text>
						</View>
					</View>
					<View style={{ flexDirection: 'row' }}>
						<TouchableOpacity style={styles.buttonreq}>
							<Text style={{ color: 'white' }}>Follow</Text>
						</TouchableOpacity>
						<TouchableOpacity style={styles.decline}>
							<Text style={{ color: '#020D28' }}>Message</Text>
						</TouchableOpacity>
						<TouchableOpacity
							style={{ ...styles.buttonreq, marginLeft: 5 }}>
							<Text style={{ color: 'white' }}>Invite</Text>
						</TouchableOpacity>
					</View>
				</View>
			</View>

			<View style={{ marginTop: 10 }}>
				<View style={styles.column}>
					<View style={styles.teamDetails}>
						<Image
							source={require('../assets/pics/roundedAvatar.png')}
							style={styles.imageAvatar}></Image>
						<Text
							style={{
								fontWeight: 'bold',
								marginTop: 10,
								marginLeft: 10,
								color: 'black',
							}}>
							{' '}
							Harry
						</Text>
						<View
							style={{
								flexDirection: 'row',
								justifyContent: 'space-evenly',
							}}>
							<Text
								style={{
									marginTop: 10,
									marginLeft: 10,
									color: 'black',
								}}>
								{' '}
								Professional NCAA{' '}
							</Text>
							<Image
								source={require('../assets/pics/Vector(3).png')}
								style={{ ...styles.membersImage }}></Image>
							<Text style={{ marginTop: 10, color: 'black' }}>
								London
							</Text>
						</View>
					</View>
					<View style={{ flexDirection: 'row' }}>
						<TouchableOpacity style={styles.buttonreq}>
							<Text style={{ color: 'white' }}>Follow</Text>
						</TouchableOpacity>
						<TouchableOpacity style={styles.decline}>
							<Text style={{ color: '#020D28' }}>Message</Text>
						</TouchableOpacity>
						<TouchableOpacity
							style={{ ...styles.buttonreq, marginLeft: 5 }}>
							<Text style={{ color: 'white' }}>Invite</Text>
						</TouchableOpacity>
					</View>
				</View>
			</View>

			<View style={{ marginTop: 10 }}>
				<View style={styles.column}>
					<View style={styles.teamDetails}>
						<Image
							source={require('../assets/pics/roundedAvatar.png')}
							style={styles.imageAvatar}></Image>
						<Text
							style={{
								fontWeight: 'bold',
								marginTop: 10,
								marginLeft: 10,
								color: 'black',
							}}>
							{' '}
							Harry
						</Text>
						<View
							style={{
								flexDirection: 'row',
								justifyContent: 'space-evenly',
							}}>
							<Text
								style={{
									marginTop: 10,
									marginLeft: 10,
									color: 'black',
								}}>
								{' '}
								Professional NCAA{' '}
							</Text>
							<Image
								source={require('../assets/pics/Vector(3).png')}
								style={{ ...styles.membersImage }}></Image>
							<Text style={{ marginTop: 10, color: 'black' }}>
								London
							</Text>
						</View>
					</View>
					<View style={{ flexDirection: 'row' }}>
						<TouchableOpacity style={styles.buttonreq}>
							<Text style={{ color: 'white' }}>Follow</Text>
						</TouchableOpacity>
						<TouchableOpacity style={styles.decline}>
							<Text style={{ color: '#020D28' }}>Message</Text>
						</TouchableOpacity>
						<TouchableOpacity
							style={{ ...styles.buttonreq, marginLeft: 5 }}>
							<Text style={{ color: 'white' }}>Invite</Text>
						</TouchableOpacity>
					</View>
				</View>
			</View>
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		backgroundColor: '#020D28',
		height: 150,
		flexDirection: 'row',
	},
	image: {
		alignSelf: 'center',
		marginLeft: 10,
		width: 90,
		height: 95,
		marginTop: 50,
	},

	bellIcon: {
		marginTop: 70,
		marginLeft: 160,
		width: 40,
		height: 40,
		borderRadius: 75,
		backgroundColor: 'white',
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
		width: 55,
		height: 55,
		borderRadius: 75,
		overflow: 'hidden',
		borderColor: 'white',
	},
	membersImage: {
		marginTop: 10,

		width: 50,
		height: 25,
		resizeMode: 'contain',
		overflow: 'hidden',
		borderColor: 'white',
	},
	buttonreq: {
		width: 95,
		height: 30,
		marginLeft: 70,
		backgroundColor: '#020D28',
		borderRadius: 10,
		alignItems: 'center',
		justifyContent: 'center',
	},
	column: {
		shadowColor: '#d9d9d9',
		shadowRadius: 2,
		shadowOffset: {
			height: 2,
			width: 2,
		},
		elevation: 10,
		width: '100%',
		height: 100,
		borderRadius: 20,
		backgroundColor: '#fff',
		flexDirection: 'column',
	},
	decline: {
		borderColor: '#020D28',
		borderWidth: 1,
		width: '20%',
		height: 30,
		marginLeft: 10,
		borderRadius: 10,
		alignItems: 'center',
		justifyContent: 'center',
	},
	searchBox: {
		margin: 10,
		flexDirection: 'row',
		width: '55%',
		borderColor: '#B3ABBC',
		borderWidth: 2,
		borderRadius: 20,
		height: 40,
		justifyContent: 'space-between',
	},
	topMenu: {
		flexDirection: 'row',
		marginTop: 15,
	},
	lookingForBtn: {
		marginTop: 10,
		width: '38%',
		height: 40,
		marginLeft: 5,
		backgroundColor: '#020D28',
		borderRadius: 10,
		alignItems: 'center',
		justifyContent: 'center',
	},
	searchText: {
		color: '#ADADAD',
		fontSize: 16,
		marginLeft: 15,
	},
	searchIcon: {
		color: '#ADADAD',
		alignSelf: 'center',
		fontSize: 16,
		marginRight: 10,
	},
});
