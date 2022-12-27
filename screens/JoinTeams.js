import * as React from 'react';
import { TouchableOpacity, Image, Text, View, StyleSheet } from 'react-native';
import { Avatar } from 'react-native-paper';

const img1 = require('../assets/pics/image2.png');

export default function JoinTeams() {
	return (
		<View style={{ flex: 1, backgroundColor: '#020D28' }}>
			<View>
				<Image
					source={require('../assets/pics/whitelogo.png')}
					style={styles.image}></Image>
				<Text
					style={[
						styles.text,
						{ alignSelf: 'center', color: 'white' },
					]}>
					Teams
				</Text>
			</View>
			<View style={{ width: '95%', alignSelf: 'center' }}>
				<View style={styles.column}>
					<View
						style={{
							width: '20%',
							alignItems: 'center',
							justifyContent: 'center',
						}}>
						<Avatar.Image source={img1} size={50} />
					</View>
					<View
						style={{
							width: '80%',
						}}>
						<View
							style={{
								height: '50%',
								flexDirection: 'row',
								justifyContent: 'space-between',
							}}>
							<Text
								style={{
									fontWeight: 'bold',
									marginTop: 10,
									color: 'black',
								}}>
								XYZ TEAM{' '}
							</Text>
							<View style={{ flexDirection: 'row' }}>
								<Image
									source={require('../assets/pics/Group5.png')}
									style={styles.membersImage}></Image>
								<Text
									style={{
										marginTop: 'auto',
										marginBottom: 'auto',
										fontSize: 10,
										color: 'black',
									}}>
									{' '}
									32 Members{' '}
								</Text>
							</View>
						</View>
						<View
							style={{
								height: '50%',
								flexDirection: 'row',
								alignItems: 'center',
							}}>
							<TouchableOpacity style={styles.messagebutton}>
								<Text style={{ color: 'white' }}>
									{' '}
									Request Join
								</Text>
							</TouchableOpacity>
							<TouchableOpacity style={styles.settingsbutton}>
								<Text style={{ color: 'white' }}> View</Text>
							</TouchableOpacity>
						</View>
					</View>
				</View>
				<View style={styles.column}>
					<View
						style={{
							width: '20%',
							alignItems: 'center',
							justifyContent: 'center',
						}}>
						<Avatar.Image source={img1} size={50} />
					</View>
					<View
						style={{
							width: '80%',
						}}>
						<View
							style={{
								height: '50%',
								flexDirection: 'row',
								justifyContent: 'space-between',
							}}>
							<Text
								style={{
									fontWeight: 'bold',
									marginTop: 10,
									color: 'black',
								}}>
								XYZ TEAM
							</Text>
							<View style={{ flexDirection: 'row' }}>
								<Image
									source={require('../assets/pics/Group5.png')}
									style={styles.membersImage}></Image>
								<Text
									style={{
										marginTop: 'auto',
										marginBottom: 'auto',
										fontSize: 10,
										color: 'black',
									}}>
									{' '}
									32 Members{' '}
								</Text>
							</View>
						</View>
						<View
							style={{
								height: '50%',
								flexDirection: 'row',
								alignItems: 'center',
							}}>
							<TouchableOpacity style={styles.messagebutton}>
								<Text style={{ color: 'white' }}>
									Request Join
								</Text>
							</TouchableOpacity>
							<TouchableOpacity style={styles.settingsbutton}>
								<Text style={{ color: 'white' }}> View</Text>
							</TouchableOpacity>
						</View>
					</View>
				</View>
			</View>
		</View>
	);
}

const styles = StyleSheet.create({
	image: {
		width: '100%',
		height: 150,
		resizeMode: 'cover',
	},
	text: {
		fontSize: 40,
		fontWeight: 'bold',
		marginTop: 20,
	},

	membersImage: {
		marginTop: 'auto',
		marginBottom: 'auto',
	},
	messagebutton: {
		backgroundColor: '#020D28',
		padding: 5,
		paddingLeft: 15,
		paddingRight: 15,
		alignItems: 'center',
		width: '45%',
		borderRadius: 10,
		marginRight: 3,
	},
	settingsbutton: {
		backgroundColor: '#020D28',
		padding: 5,
		paddingLeft: 15,
		paddingRight: 15,
		borderColor: 'white',
		borderWidth: 2,
		alignItems: 'center',
		width: '45%',
		borderRadius: 10,
		marginRight: 3,
	},
	column: {
		flexDirection: 'row',
		height: 100,
		borderRadius: 20,
		backgroundColor: '#fff',
		shadowColor: '#171717',
		shadowOffset: { width: -2, height: 4 },
		shadowOpacity: 0.2,
		shadowRadius: 3,
		elevation: 10,
		marginTop: 10,
	},
});
