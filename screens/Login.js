import {
	StyleSheet,
	ImageBackground,
	Image,
	View,
	Text,
	ScrollView,
	TouchableOpacity,
} from 'react-native';
import { colors } from '../assets/colors';
import { useState } from 'react';
import { TextInput } from 'react-native-paper';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../firebase';
import { StackActions } from '@react-navigation/native';

export default Login = ({ navigation }) => {
	const [user, setUser] = useState('');
	const [pass, setPass] = useState('');
	const [show, setShow] = useState(false);
	const [err, setErr] = useState('');

	const storeData = async value => {
		try {
			await AsyncStorage.setItem('!!userId', value);
		} catch (e) {
			throw e;
		}
	};

	const main = () => {
		signInWithEmailAndPassword(auth, user, pass)
			.then(userCredential => {
				storeData(userCredential.user.uid);
				navigation.dispatch(StackActions.replace('TabNavigator'));
			})
			.catch(error => {
				setErr('Invalid Credentials');
			});
	};

	const showPass = () => {
		if (show === false) {
			setShow(true);
			return;
		}
		setShow(false);
	};

	return (
		<ImageBackground
			source={require('../assets/pics/bg.jpg')}
			resizeMode='cover'
			style={styles.imageBackground}
			imageStyle={{ opacity: 0.6 }}>
			<ScrollView>
				<Image
					source={require('../assets/pics/whitelogo.png')}
					style={styles.image}></Image>
				<View style={styles.main}>
					<Text style={styles.text}>Lets Sign You In</Text>
					{err !== '' ? (
						<Text
							style={{
								color: 'red',
								alignSelf: 'center',
								fontFamily: 'Poppins-Bold',
								fontSize: 15,
							}}>
							{err}
						</Text>
					) : null}
					<TextInput
						outlineColor={colors.royalBlue2}
						theme={{
							colors: { text: 'blue', primary: 'darkblue' },
							roundness: 12,
						}}
						style={styles.textInput}
						mode='outlined'
						value={user}
						onChangeText={setUser}
						placeholder='Email'></TextInput>
					<TextInput
						style={styles.textInput}
						mode='outlined'
						value={pass}
						onChangeText={setPass}
						placeholder='Password'
						outlineColor={colors.royalBlue2}
						theme={{
							colors: { text: 'blue', primary: 'darkblue' },
							roundness: 12,
						}}
						secureTextEntry={show ? false : true}
						right={
							<TextInput.Icon
								icon='eye'
								onPress={() => showPass()}
							/>
						}></TextInput>
					<TouchableOpacity
						onPress={() => navigation.navigate('ForgotPass')}>
						<Text style={styles.text2}>Forgot Password</Text>
					</TouchableOpacity>
					<TouchableOpacity
						style={[
							styles.btn,
							{
								backgroundColor:
									user.length <= 5 || pass === ''
										? 'white'
										: colors.royalBlue2,
							},
						]}
						disabled={
							user.length <= 5 || pass === '' ? true : false
						}
						onPress={() => main()}>
						<Text style={styles.text3}>Sign In</Text>
					</TouchableOpacity>
					<TouchableOpacity
						style={styles.touch}
						onPress={() => navigation.navigate('Register')}>
						<Text>
							Dont have an Account?
							<Text style={styles.link}>Register</Text>
						</Text>
					</TouchableOpacity>
				</View>
			</ScrollView>
		</ImageBackground>
	);
};

const styles = StyleSheet.create({
	imageBackground: {
		flex: 1,
		alignItems: 'center',
		backgroundColor: colors.royalBlue2,
	},
	link: {
		fontFamily: 'Poppins-Bold',
	},
	image: {
		width: '100%',
		height: 300,
		resizeMode: 'cover',
	},
	text: {
		fontSize: 39,
		fontFamily: 'Poppins-Bold',
		color: 'snow',
	},
	text2: {
		alignSelf: 'flex-end',
		marginTop: 10,
	},
	text3: {
		color: 'black',
		fontSize: 20,
		fontFamily: 'Poppins-Bold',
	},
	textInput: {
		backgroundColor: 'white',
		marginTop: 10,
		fontSize: 15,
	},
	btn: {
		marginTop: 20,
		height: 55,
		borderRadius: 12,
		alignItems: 'center',
		justifyContent: 'center',
		borderColor: colors.royalBlue2,
		borderWidth: 1,
	},
	touch: {
		marginTop: 5,
		alignSelf: 'center',
	},
	main: { padding: 20 },
});
