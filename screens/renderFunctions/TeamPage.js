import { Avatar } from 'react-native-paper';
import { TouchableOpacity, Image, Text, View } from 'react-native';
import styles from '../stylesnew';
const img1 = require('../../assets/pics/image2.png');
const img = require('../../assets/pics/Group5.png');

export const renderFunction = ({ item }) => (
	<View style={[styles.column, { height: 75 }]}>
		<View
			style={{
				width: '20%',
				alignItems: 'center',
				justifyContent: 'center',
			}}>
			<Avatar.Image
				source={item.uri !== undefined ? { uri: item.uri } : img1}
				size={50}
			/>
		</View>
		<View style={{ width: '80%' }}>
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
					{item.teamName} 🏅
				</Text>
				<Text
					style={{
						fontWeight: 'bold',
						marginTop: 10,
						color: 'black',
					}}>
					{item.teamFor}
				</Text>
				<Text
					style={{
						fontWeight: 'bold',
						marginTop: 10,
						color: '#2A5EE0',
					}}>
					{item.teamSports}
				</Text>
				<View style={{ flexDirection: 'row' }}>
					<Image source={img} style={styles.membersImage}></Image>
					<Text
						style={{
							marginTop: 14,
							marginRight: 10,
							fontSize: 10,
							color: 'black',
							fontWeight: 'bold',
						}}>
						{item.location}
					</Text>
				</View>
			</View>
			<View
				style={{
					height: '50%',
					width: '80%',
					flexDirection: 'row',
					alignItems: 'center',
				}}>
				<TouchableOpacity
					style={[
						styles.button,
						{
							backgroundColor: '#020D28',
							marginRight: 3,
							width: '49%',
						},
					]}>
					<Text style={{ color: 'white', fontSize: 13 }}>
						Request to Join
					</Text>
				</TouchableOpacity>
				<TouchableOpacity
					style={[
						styles.button,
						{ borderColor: '#020D28', width: '49%' },
					]}>
					<Text style={{ color: '#020D28', fontSize: 13 }}>View</Text>
				</TouchableOpacity>
			</View>
		</View>
	</View>
);
