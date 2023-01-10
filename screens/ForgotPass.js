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
import { sendPasswordResetEmail } from 'firebase/auth';
import { auth } from '../firebase';

export default ForgotPass = ({ navigation }) => {
	const [email, setEmail] = useState('');

	const main = () => {
		sendPasswordResetEmail(auth, email, null)
			.then(() => {
				alert('reset email sent to ' + email);
			})
			.catch(function (e) {
				console.log(e);
			});
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
					<Text style={styles.text}>
						Did You Forget Your Password?
					</Text>
					<Text style={styles.touch}>
						Enter your email address you are using for this account
						and we will send you an OTP to login and reset your
						password
					</Text>
					<TextInput
						style={styles.textInput}
						value={email}
						onChangeText={setEmail}
						placeholder='Email'
						placeholderTextColor='#000'></TextInput>
					<TouchableOpacity
						style={[
							styles.btn,
							{
								backgroundColor:
									email !== '' ? colors.royalBlue2 : 'white',
							},
						]}
						disabled={email === '' ? true : false}
						onPress={() => main()}>
						<Text style={styles.text3}>Send</Text>
					</TouchableOpacity>
					<TouchableOpacity
						style={styles.touch}
						onPress={() => navigation.popToTop()}>
						<Text>Back to Sign In</Text>
					</TouchableOpacity>
					<TouchableOpacity
						style={styles.touch2}
						onPress={() => navigation.navigate('Otp')}>
						<Text>Use OTP</Text>
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
	main: { padding: 20 },
	image: {
		width: '100%',
		height: 250,
		resizeMode: 'cover',
	},
	text: {
		fontSize: 34,
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
		borderRadius: 12,
		borderWidth: 1,
		borderColor: '#B3ABBC',
		marginTop: 30,
		padding: 10,
		color: colors.royalBlue2,
		fontSize: 15,
	},
	btn: {
		marginTop: 20,
		height: 55,
		borderRadius: 12,
		alignItems: 'center',
		justifyContent: 'center',
	},
	touch: {
		marginTop: 10,
		alignSelf: 'center',
	},
	touch2: {
		marginTop: 10,
		alignSelf: 'flex-end',
	},
});
