import { TouchableOpacity, Text, View } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { Avatar } from 'react-native-paper';
import styles from '../stylesnew';

const img1 = require('../../assets/pics/image2.png');

export const renderFunction = ({ item }) => (
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
					{item.username}
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
					<Text style={{ color: 'white', fontSize: 13 }}>Follow</Text>
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
					<Text style={{ color: '#020D28', fontSize: 13 }}>
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
					<Text style={{ color: 'white', fontSize: 13 }}>Invite</Text>
				</TouchableOpacity>
			</View>
		</View>
	</View>
);
