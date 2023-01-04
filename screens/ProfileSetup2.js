import {
	StyleSheet,
	ImageBackground,
	Image,
	View,
	Text,
	TextInput,
	ScrollView,
	TouchableOpacity,
} from 'react-native';
import { colors } from '../assets/colors';
import { useState } from 'react';
import Icon from 'react-native-vector-icons/Ionicons';
import IconM2 from 'react-native-vector-icons/MaterialIcons';
import IconF from 'react-native-vector-icons/FontAwesome5';
import IconM from 'react-native-vector-icons/MaterialCommunityIcons';
import { ref, set } from 'firebase/database';
import { db } from '../firebase';

export default ProfileSetup2 = ({ navigation, route }) => {
	const [sport, setSport] = useState('');
	const selection = sports => {
		setSport(sports);
	};
	const main = () => {
		const obj = route.params.obj;
		obj.toS = sport;
		set(ref(db, 'users/' + obj.id), obj);
		navigation.navigate('TabNavigator');
	};
	return (
		<ScrollView style={{ backgroundColor: colors.royalBlue }}>
			<View style={styles.main}>
				<Image
					source={require('../assets/pics/whitelogo.png')}
					style={styles.image}></Image>
				<Text style={styles.text}>Profile Information</Text>
				<Text style={styles.text3}>
					Start by Adding Info to Create Your Profile
				</Text>
				<Text style={styles.textMain}>Sports</Text>
				<View style={styles.main2}>
					<TouchableOpacity
						style={[
							styles.touch,
							{
								backgroundColor:
									sport === 'basketball'
										? 'lightblue'
										: 'snow',
							},
						]}
						onPress={() => selection('basketball')}>
						<Text>
							<IconF
								name='basketball-ball'
								color={colors.royalBlue}
								size={70}
							/>
						</Text>
						<Text style={styles.text2}>BasketBall</Text>
					</TouchableOpacity>
					<TouchableOpacity
						style={[
							styles.touch,
							{
								backgroundColor:
									sport === 'pickleball'
										? 'lightblue'
										: 'snow',
							},
						]}
						onPress={() => selection('pickleball')}>
						<Text>
							<Icon
								name='ios-football-sharp'
								color={colors.royalBlue}
								size={70}
							/>
						</Text>
						<Text style={styles.text2}>PickleBall</Text>
					</TouchableOpacity>
					<TouchableOpacity
						style={[
							styles.touch,
							{
								backgroundColor:
									sport === 'volleyball'
										? 'lightblue'
										: 'snow',
							},
						]}
						onPress={() => selection('volleyball')}>
						<Text>
							<IconF
								name='volleyball-ball'
								color={colors.royalBlue}
								size={70}
							/>
						</Text>
						<Text style={styles.text2}>VolleyBall</Text>
					</TouchableOpacity>
				</View>
				<View style={styles.main2}>
					<TouchableOpacity
						style={[
							styles.touch,
							{
								backgroundColor:
									sport === 'football' ? 'lightblue' : 'snow',
							},
						]}
						onPress={() => selection('football')}>
						<Text>
							<Icon
								name='football-outline'
								color={colors.royalBlue}
								size={70}
							/>
						</Text>
						<Text style={styles.text2}>Soccer</Text>
					</TouchableOpacity>
					<TouchableOpacity
						style={[
							styles.touch,
							{
								backgroundColor:
									sport === 'running' ? 'lightblue' : 'snow',
							},
						]}
						onPress={() => selection('running')}>
						<Text>
							<IconF
								name='running'
								color={colors.royalBlue}
								size={70}
							/>
						</Text>
						<Text style={styles.text2}>Running</Text>
					</TouchableOpacity>
					<TouchableOpacity
						style={[
							styles.touch,
							{
								backgroundColor:
									sport === 'weightlifting'
										? 'lightblue'
										: 'snow',
							},
						]}
						onPress={() => selection('weightlifting')}>
						<Text>
							<IconM
								name='weight-lifter'
								color={colors.royalBlue}
								size={70}
							/>
						</Text>
						<Text style={styles.text2}>Weighlifting</Text>
					</TouchableOpacity>
				</View>
				<View style={styles.main2}>
					<TouchableOpacity
						style={[
							styles.touch,
							{
								backgroundColor:
									sport === 'gym' ? 'lightblue' : 'snow',
							},
						]}
						onPress={() => selection('gym')}>
						<Text>
							<Icon
								name='md-body-sharp'
								color={colors.royalBlue}
								size={70}
							/>
						</Text>
						<Text style={styles.text2}>Gym</Text>
					</TouchableOpacity>
					<TouchableOpacity
						style={[
							styles.touch,
							{
								backgroundColor:
									sport === 'tennis' ? 'lightblue' : 'snow',
							},
						]}
						onPress={() => selection('tennis')}>
						<Text>
							<IconM
								name='tennis'
								color={colors.charBlue}
								size={70}
							/>
						</Text>
						<Text style={styles.text2}>Tennis</Text>
					</TouchableOpacity>
					<TouchableOpacity
						style={[
							styles.touch,
							{
								backgroundColor:
									sport === 'esports' ? 'lightblue' : 'snow',
							},
						]}
						onPress={() => selection('esports')}>
						<Text>
							<IconM2
								name='sports-esports'
								color={colors.royalBlue}
								size={70}
							/>
						</Text>
						<Text style={styles.text2}>Gaming/Esports</Text>
					</TouchableOpacity>
				</View>
			</View>
			<TouchableOpacity
				style={[
					styles.btn,
					{ backgroundColor: sport === '' ? 'snow' : colors.green },
				]}
				disabled={sport === '' ? true : false}
				onPress={() => main()}>
				<Text style={[styles.text2, { color: colors.charBlue }]}>
					Next
				</Text>
			</TouchableOpacity>
		</ScrollView>
	);
};

const styles = StyleSheet.create({
	main: {
		height: '90%',
		backgroundColor: colors.royalBlue,
		padding: 20,
		alignItems: 'center',
	},
	btn: {
		width: '75%',
		backgroundColor: 'snow',
		borderColor: colors.royalBlue,
		borderRadius: 8,
		margin: '7%',
		alignItems: 'center',
		justifyContent: 'center',
		alignSelf: 'center',
		height: '6%',
	},

	main2: {
		justifyContent: 'space-between',
		width: '100%',
		flexDirection: 'row',
		marginTop: '4%',
		height: '18%',
	},
	image: {
		width: '100%',
		height: 125,
		resizeMode: 'cover',
	},
	text: {
		fontSize: 22,
		fontFamily: 'Poppins-Bold',
		marginTop: '5%',
		color: 'snow',
		alignSelf: 'flex-start',
	},
	textMain: {
		fontSize: 22,
		fontFamily: 'Poppins-Bold',
		marginTop: '2%',
		color: 'snow',
		alignSelf: 'flex-start',
	},
	text3: {
		fontFamily: 'Poppins',
		margin: '2%',
		alignSelf: 'flex-start',
	},
	text2: {
		fontFamily: 'Poppins-Bold',
		color: colors.royalBlue,
	},
	touch: {
		backgroundColor: 'snow',
		width: '31%',
		alignItems: 'center',
		justifyContent: 'center',
		borderRadius: 18,
	},
});
