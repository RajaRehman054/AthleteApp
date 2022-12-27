import { Text, View, TouchableOpacity, Image } from 'react-native';
import { Avatar } from 'react-native-paper';
import styles from './styles';

export default function Matches({ navigation }) {
	return (
		<View style={{ ...styles.matchView3, marginTop: 10 }}>
			<TouchableOpacity
				style={styles.newmatchbutton}
				onPress={() => navigation.navigate('MatchNow')}>
				<Text style={styles.text10}>Add new match</Text>
			</TouchableOpacity>

			<View style={styles.matchbar4}>
				<View style={{ height: '45%', flexDirection: 'row' }}>
					<View style={styles.matchimage}>
						<Avatar.Image
							source={require('../assets/pics/image2.png')}
							size={65}
							style={{}}
						/>
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
								<Image
									source={require('../assets/pics/Group.png')}></Image>
								<Text style={{ fontSize: 12, color: 'black' }}>
									weekly
								</Text>
							</View>
						</View>

						<View style={{ height: 40, justifyContent: 'center' }}>
							<Text style={{ fontSize: 10, color: '#020D28' }}>
								London Club have a match on 15th November with
								Manchester Club At Manchester Stadium
							</Text>
						</View>

						<View
							style={{
								height: 50,
								alignItems: 'center',
								justifyContent: 'center',
							}}>
							<TouchableOpacity
								style={styles.viewbutton}
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
	);
}
