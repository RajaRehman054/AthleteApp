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
export default Otp = ({ navigation }) => {
	const [otp1, setOtp1] = useState('');
	const [otp2, setOtp2] = useState('');
	const [otp3, setOtp3] = useState('');
	const [otp4, setOtp4] = useState('');
	const main = () => {};
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
					<Text style={styles.text}>Verification Code</Text>
					<Text style={styles.touch}>
						We have sent a 4-digit OTP on your email.
					</Text>
					<View style={styles.main2}>
						<TextInput
							style={styles.textInput}
							value={otp1}
							onChangeText={setOtp1}
							keyboardType='numeric'></TextInput>
						<TextInput
							style={styles.textInput}
							value={otp2}
							onChangeText={setOtp2}
							keyboardType='numeric'></TextInput>
						<TextInput
							style={styles.textInput}
							value={otp3}
							onChangeText={setOtp3}
							keyboardType='numeric'></TextInput>
						<TextInput
							style={styles.textInput}
							value={otp4}
							onChangeText={setOtp4}
							keyboardType='numeric'></TextInput>
					</View>
					<TouchableOpacity
						style={[
							styles.btn,
							{
								backgroundColor:
									otp1 !== '' &&
									otp2 !== '' &&
									otp3 !== '' &&
									otp4 !== ''
										? 'lightblue'
										: 'white',
							},
						]}
						disabled={
							otp1 === '' ||
							otp2 === '' ||
							otp3 === '' ||
							otp4 === ''
								? true
								: false
						}
						onPress={() => navigation.navigate('Login')}>
						<Text style={styles.text3}>Verify</Text>
					</TouchableOpacity>
					<TouchableOpacity style={styles.touch}>
						<Text>
							Didn't receive an OTP?
							<Text style={styles.link}>Resend Code</Text>
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
	main: { padding: 20 },
	main2: {
		flexDirection: 'row',
		justifyContent: 'space-evenly',
	},
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
		borderWidth: 1,
		borderColor: '#B3ABBC',
		marginTop: 30,
		padding: 10,
		color: colors.royalBlue2,
		fontSize: 25,
		fontWeight: 'bold',
		alignItems: 'center',
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
});
