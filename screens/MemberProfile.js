import { Text, View, TouchableOpacity, Image, ScrollView } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { Avatar } from 'react-native-paper';
import styles from './stylesnew';

const img1 = require('../assets/pics/image2.png');
export default function MemberProfile({ navigation }) {
	return (
		<ScrollView>
			<View style={styles.headerbar}>
				<View style={styles.leftview1}>
					<View style={styles.leftview6}>
						<Avatar.Image
							source={img1}
							size={70}
							style={styles.headerimg}
						/>

						<View
							style={{ marginLeft: 'auto', marginRight: 'auto' }}>
							<Text style={styles.text4}>driver@ups</Text>
							<Text style={styles.text5}>Pro Athlete</Text>

							<View style={{ flexDirection: 'row' }}>
								<Ionicons
									name='person'
									color={'white'}
									size={11}
									style={styles.location}
								/>
								<Text style={styles.text5}>Free Agent</Text>
							</View>
						</View>
					</View>
				</View>

				<View style={styles.rightview2}>
					<View style={styles.rightview3}>
						<Text style={styles.text1}>Lorenzo Kane</Text>
						<TouchableOpacity
							style={styles.settings}
							onPress={() => navigation.navigate('EditProfile')}>
							<Ionicons
								name='ios-settings-sharp'
								color={'white'}
								size={25}
							/>
						</TouchableOpacity>
					</View>

					<View style={styles.rightview5}>
						<View style={{ width: '33%' }}>
							<Text style={styles.text11}>2</Text>
							<Text style={styles.text11}>Teams</Text>
						</View>
						<View style={{ width: '33%' }}>
							<Text style={styles.text11}>12</Text>
							<Text
								style={[
									styles.text11,
									{ alignSelf: 'center' },
								]}>
								Followers
							</Text>
						</View>
						<View style={{ width: '33%' }}>
							<Text style={styles.text11}>32</Text>
							<Text style={styles.text11}>Following</Text>
						</View>
					</View>

					<View style={styles.rightview4}>
						<View style={styles.buttonview}>
							<TouchableOpacity
								style={styles.messagebutton}
								onPress={() => navigation.navigate('Messages')}>
								<Text
									style={{
										color: '#020D28',
										fontWeight: 'bold',
										fontSize: 14,
									}}>
									Message
								</Text>
							</TouchableOpacity>
							<TouchableOpacity
								style={styles.settingsbutton}
								onPress={() => navigation.navigate('Settings')}>
								<Text
									style={{
										color: 'white',
										fontWeight: 'bold',
										fontSize: 14,
									}}>
									Settings
								</Text>
							</TouchableOpacity>
						</View>
					</View>
				</View>
			</View>
			<View style={styles.textView}>
				<Text
					style={{
						color: 'Black',
						fontSize: 22,
						fontWeight: 'bold',
					}}>
					Video
				</Text>
			</View>
			<View
				style={{
					width: '95%',
					alignSelf: 'center',
					flexDirection: 'row',
					borderColor: 'yellow',
					borderWidth: 1,
					height: 200,
				}}></View>
			<View style={styles.textView}>
				<Text
					style={{
						color: 'Black',
						fontSize: 22,
						fontWeight: 'bold',
					}}>
					Sports
				</Text>
			</View>
			<View
				style={{
					width: '95%',
					alignSelf: 'center',
					flexDirection: 'row',
				}}>
				<View style={styles.sportsicon}>
					<Ionicons
						name='football'
						color={'#020D28'}
						size={60}
						style={{ alignSelf: 'center' }}
					/>
				</View>
				<View style={[styles.sportsicon, { marginLeft: 5 }]}>
					<Ionicons
						name='basketball'
						color={'#020D28'}
						size={60}
						style={{ alignSelf: 'center' }}
					/>
				</View>
			</View>
			<View style={styles.textView}>
				<Text
					style={{
						color: 'Black',
						fontSize: 22,
						fontWeight: 'bold',
					}}>
					Teams
				</Text>
			</View>
			<View style={styles.particpantView}>
				<View style={styles.particpantbarView}>
					<View style={styles.particpantimageView}>
						<Image
							source={img1}
							style={styles.participantimg}></Image>
					</View>

					<View style={styles.participantinnerview}>
						<Text style={{ color: 'gray' }}>Soccer Team</Text>
						<Text style={{ color: 'gray' }}>Soccer</Text>
						<View style={{ flexDirection: 'row' }}>
							<Ionicons name='person' color={'gray'} size={18} />
							<Text style={{ color: 'gray' }}> 28</Text>
						</View>
					</View>
				</View>

				<View style={styles.particpantbarView}>
					<View style={styles.particpantimageView}>
						<Image
							source={img1}
							style={styles.participantimg}></Image>
					</View>

					<View style={styles.participantinnerview}>
						<Text style={{ color: 'gray' }}>Soccer Team</Text>
						<Text style={{ color: 'gray' }}>Soccer</Text>
						<View style={{ flexDirection: 'row' }}>
							<Ionicons name='person' color={'gray'} size={18} />
							<Text style={{ color: 'gray' }}> 28</Text>
						</View>
					</View>
				</View>
			</View>
			<View style={styles.textView}>
				<Text
					style={{
						color: 'Black',
						fontSize: 22,
						fontWeight: 'bold',
					}}>
					Leader Board
				</Text>
			</View>
			<View
				style={[
					styles.scoreboard,
					{
						height: 120,
						justifyContent: 'space-between',
						flexDirection: 'row',
					},
				]}>
				<View style={{ width: '33%', alignItems: 'center' }}>
					<Text
						style={{
							color: '#020D28',
							fontWeight: 'bold',
							fontSize: 50,
						}}>
						101
					</Text>
					<Text style={{ color: 'gray', fontSize: 18 }}>Total</Text>
					<Text style={{ color: 'gray', fontSize: 18 }}>Assists</Text>
				</View>
				<View style={{ width: '33%', alignItems: 'center' }}>
					<Text
						style={{
							color: '#020D28',
							fontWeight: 'bold',
							fontSize: 50,
						}}>
						35
					</Text>
					<Text style={{ color: 'gray', fontSize: 18 }}>Weekly</Text>
					<Text style={{ color: 'gray', fontSize: 18 }}>Assists</Text>
				</View>
				<View style={{ width: '33%', alignItems: 'center' }}>
					<Text
						style={{
							color: '#020D28',
							fontWeight: 'bold',
							fontSize: 50,
						}}>
						5
					</Text>
					<Text style={{ color: 'gray', fontSize: 18 }}>Daily</Text>
					<Text style={{ color: 'gray', fontSize: 18 }}>Assists</Text>
				</View>
			</View>
			<View
				style={[
					styles.scoreboard,
					{
						height: 120,
						justifyContent: 'space-between',
						flexDirection: 'row',
					},
				]}>
				<View style={{ width: '33%', alignItems: 'center' }}>
					<Text
						style={{
							color: '#020D28',
							fontWeight: 'bold',
							fontSize: 50,
						}}>
						73
					</Text>
					<Text style={{ color: 'gray', fontSize: 18 }}>Total</Text>
					<Text style={{ color: 'gray', fontSize: 18 }}>Points</Text>
				</View>
				<View style={{ width: '33%', alignItems: 'center' }}>
					<Text
						style={{
							color: '#020D28',
							fontWeight: 'bold',
							fontSize: 50,
						}}>
						20
					</Text>
					<Text style={{ color: 'gray', fontSize: 18 }}>Weekly</Text>
					<Text style={{ color: 'gray', fontSize: 18 }}>Assists</Text>
				</View>
				<View style={{ width: '33%', alignItems: 'center' }}>
					<Text
						style={{
							color: '#020D28',
							fontWeight: 'bold',
							fontSize: 50,
						}}>
						3
					</Text>
					<Text style={{ color: 'gray', fontSize: 18 }}>Daily</Text>
					<Text style={{ color: 'gray', fontSize: 18 }}>Assists</Text>
				</View>
			</View>
			<View style={styles.textView}>
				<Text
					style={{
						color: 'Black',
						fontSize: 22,
						fontWeight: 'bold',
					}}>
					Bulletin Board
				</Text>
			</View>

			<View style={[styles.scoreboard, { height: 140 }]}>
				<View style={{ height: '60%' }}>
					<View
						style={{
							flexDirection: 'row',
							justifyContent: 'space-around',
							height: '50%',
							alignItems: 'center',
						}}>
						<Text style={{ fontWeight: 'Bold', Color: '#020D28' }}>
							Sports
						</Text>
						<Text style={{ Color: 'gray' }}>Football</Text>
						<Text style={{ fontWeight: 'Bold', Color: '#020D28' }}>
							Date
						</Text>
						<Text style={{ Color: 'gray' }}>22/11/2022</Text>
					</View>
					<View
						style={{
							flexDirection: 'row',
							justifyContent: 'space-around',
							height: '50%',
							alignItems: 'center',
						}}>
						<Text style={{ fontWeight: 'Bold', Color: '#020D28' }}>
							Sports
						</Text>
						<Text style={{ Color: 'gray' }}>Football</Text>
						<Text style={{ fontWeight: 'Bold', Color: '#020D28' }}>
							Date
						</Text>
						<Text style={{ Color: 'gray' }}>22/11/2022</Text>
					</View>
				</View>
				<View
					style={{
						flexDirection: 'row',
						alignItems: 'center',
						height: '40%',
						justifyContent: 'space-around',
					}}>
					<TouchableOpacity
						style={[
							styles.button12,
							{
								backgroundColor: '#020D28',
								width: '45%',
								marginRight: 3,
							},
						]}>
						<Text style={{ color: 'white', fontSize: 13 }}>
							Comment
						</Text>
					</TouchableOpacity>
					<View
						style={{
							flexDirection: 'row',
							width: '15%',
							justifyContent: 'space-between',
							alignItems: 'center',
						}}>
						<Text>12</Text>
						<Ionicons
							name='chatbubble'
							color={'#020D28'}
							size={25}
						/>
					</View>
				</View>
			</View>

			<View style={[styles.scoreboard, { height: 140 }]}>
				<View style={{ height: '60%' }}>
					<View
						style={{
							flexDirection: 'row',
							justifyContent: 'space-around',
							height: '50%',
							alignItems: 'center',
						}}>
						<Text style={{ fontWeight: 'Bold', Color: '#020D28' }}>
							Sports
						</Text>
						<Text style={{ Color: 'gray' }}>Football</Text>
						<Text style={{ fontWeight: 'Bold', Color: '#020D28' }}>
							Date
						</Text>
						<Text style={{ Color: 'gray' }}>22/11/2022</Text>
					</View>
					<View
						style={{
							flexDirection: 'row',
							justifyContent: 'space-around',
							height: '50%',
							alignItems: 'center',
						}}>
						<Text style={{ fontWeight: 'Bold', Color: '#020D28' }}>
							Sports
						</Text>
						<Text style={{ Color: 'gray' }}>Football</Text>
						<Text style={{ fontWeight: 'Bold', Color: '#020D28' }}>
							Date
						</Text>
						<Text style={{ Color: 'gray' }}>22/11/2022</Text>
					</View>
				</View>
				<View
					style={{
						flexDirection: 'row',
						alignItems: 'center',
						height: '40%',
						justifyContent: 'space-around',
					}}>
					<TouchableOpacity
						style={[
							styles.button12,
							{
								backgroundColor: '#020D28',
								width: '45%',
								marginRight: 3,
							},
						]}>
						<Text style={{ color: 'white', fontSize: 13 }}>
							Comment
						</Text>
					</TouchableOpacity>
					<View
						style={{
							flexDirection: 'row',
							width: '15%',
							justifyContent: 'space-between',
							alignItems: 'center',
						}}>
						<Text>12</Text>
						<Ionicons
							name='chatbubble'
							color={'#020D28'}
							size={25}
						/>
					</View>
				</View>
			</View>
			<View
				style={[styles.makeRow, { width: '95%', alignSelf: 'center' }]}>
				<View
					style={{
						width: '25%',
						alignItems: 'center',
						justifyContent: 'center',
					}}>
					<Avatar.Image source={img1} size={50} />
				</View>
				<View
					style={{
						width: '75%',
						alignItems: 'center',
						justifyContent: 'center',
					}}>
					<Text style={{ Color: '#020D28', alignSelf: 'flex-start' }}>
						George
					</Text>
					<Text
						style={{
							color: 'gray',
							fontSize: 12,
						}}>
						Can I join right now or is there any age limit to the
						application
					</Text>
				</View>
			</View>
			<View
				style={[styles.makeRow, { width: '95%', alignSelf: 'center' }]}>
				<View
					style={{
						width: '25%',
						alignItems: 'center',
						justifyContent: 'center',
					}}>
					<Avatar.Image source={img1} size={50} />
				</View>
				<View
					style={{
						width: '75%',
						alignItems: 'center',
						justifyContent: 'center',
					}}>
					<Text style={{ Color: '#020D28', alignSelf: 'flex-start' }}>
						George
					</Text>
					<Text
						style={{
							color: 'gray',
							fontSize: 12,
						}}>
						Can I join right now or is there any age limit to the
						application
					</Text>
				</View>
			</View>
			<View style={{ height: 50 }}></View>
		</ScrollView>
	);
}
