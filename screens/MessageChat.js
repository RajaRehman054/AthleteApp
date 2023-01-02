import { Text, View, TouchableOpacity, TextInput } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { Avatar } from 'react-native-paper';
import styles from './stylesnew';

const img = require('../assets/pics/image2.png');
export default function MessageChat({ navigation }) {
	return (
		<View style={{ flex: 1 }}>
			<View style={{ flex: 1 }}>
				<View style={[styles.menubar1, { height: 140 }]}>
					<TouchableOpacity
						style={[styles.icon21, { width: '10%' }]}
						onPress={() => navigation.goBack()}>
						<Ionicons
							name='arrow-back-outline'
							color={'white'}
							size={25}
							style={{ marginLeft: 'auto', marginRight: 'auto' }}
						/>
					</TouchableOpacity>
					<View
						style={{
							alignItems: 'center',
							height: '100%',
							width: '72%',
							justifyContent: 'space-around',
						}}>
						<Text
							style={{
								color: 'white',
								fontSize: 18,
								fontWeight: 'bold',
							}}>
							Messages
						</Text>
						<Avatar.Image source={img} size={60} />
						<Text
							style={{
								color: 'white',
								fontSize: 14,
								fontWeight: 'bold',
							}}>
							Martina Wolna
						</Text>
					</View>
					<View style={{ width: '10%', marginRight: 10 }}></View>
				</View>

				<View style={{ width: '90%', alignSelf: 'center' }}>
					<Text
						style={{
							color: 'gray',
							fontSize: 12,
							alignSelf: 'center',
						}}>
						17 Nov 12:00
					</Text>
					<View
						style={[
							styles.messagebox,
							{
								height: 65,
								width: 230,
								borderColor: '#020D28',
								borderWidth: 1,
							},
						]}>
						<Text style={{ color: 'black', paddingLeft: 5 }}>
							I commented on Figma, I want to add some fancy
							icons. Do you have any icon set?
						</Text>
					</View>
					<View
						style={[
							styles.messagebox,
							{
								height: 45,
								width: 230,
								backgroundColor: '#020D28',
								alignSelf: 'flex-end',
							},
						]}>
						<Text style={{ color: 'white', paddingLeft: 5 }}>
							I am in a process of designing some. When do you
							need them?
						</Text>
					</View>
					<View
						style={[
							styles.messagebox,
							{
								height: 25,
								width: 100,
								borderColor: '#020D28',
								borderWidth: 1,
							},
						]}>
						<Text> Next month?</Text>
					</View>
					<Text
						style={{
							color: 'gray',
							fontSize: 12,
							alignSelf: 'center',
						}}>
						08:12
					</Text>
					<View
						style={[
							styles.messagebox,
							{
								height: 65,
								width: 230,
								backgroundColor: '#020D28',
								alignSelf: 'flex-end',
							},
						]}>
						<Text style={{ color: 'white', paddingLeft: 5 }}>
							I am almost finish. Please give me your email, I
							will ZIP them and send you as son as im finish.
						</Text>
					</View>
					<Text
						style={{
							color: 'gray',
							fontSize: 12,
							alignSelf: 'center',
						}}>
						08:43
					</Text>
					<View
						style={[
							styles.messagebox,
							{
								height: 25,
								width: 190,
								borderColor: '#020D28',
								borderWidth: 1,
							},
						]}>
						<Text style={{ color: 'black', paddingLeft: 5 }}>
							maciej.kowalski@email.com
						</Text>
					</View>
					<View
						style={[
							styles.messagebox,
							{
								height: 30,
								width: 35,
								alignItems: 'center',
								backgroundColor: '#020D28',
								alignSelf: 'flex-end',
							},
						]}>
						<Ionicons
							name='thumbs-up-sharp'
							color={'yellow'}
							size={20}
						/>
					</View>
				</View>
			</View>
			<View style={{ width: '90%', alignSelf: 'center' }}>
				<View style={styles.messagebar}>
					<View style={{ width: '63%' }}>
						<TextInput
							placeholder='write message'
							placeholderTextColor='gray'
							style={styles.input}
						/>
					</View>
					<View style={styles.iconview}>
						<Ionicons
							name='chatbubble-sharp'
							color={'white'}
							size={25}
						/>
					</View>
					<View style={styles.iconview}>
						<Ionicons name='camera' color={'white'} size={25} />
					</View>
				</View>
			</View>
		</View>
	);
}
