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

export default Register = ({ navigation }) => {
	const [name, setName] = useState('');
	const [user, setUser] = useState('');
	const [pass, setPass] = useState('');
	const [show, setShow] = useState(false);
	const main = () => {};
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
					<Text style={styles.text}>Create A New Account</Text>
					<Text style={styles.touch}>
						Please put your information below to create a new
						account and find yourself an athlete partner
					</Text>
					<TextInput
						outlineColor={colors.royalBlue2}
						theme={{
							colors: { text: 'blue', primary: 'darkblue' },
							roundness: 12,
						}}
						style={styles.textInput}
						mode='outlined'
						value={name}
						onChangeText={setName}
						placeholder='Full Name'></TextInput>
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
						placeholder='Username'></TextInput>
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
						style={[
							styles.btn,
							{
								backgroundColor:
									user !== '' && pass !== '' && name !== ''
										? colors.royalBlue2
										: 'white',
							},
						]}
						disabled={
							user === '' || pass === '' || name === ''
								? true
								: false
						}
						onPress={() => navigation.navigate('ProfileSetup1')}>
						<Text style={styles.text3}>Register Now</Text>
					</TouchableOpacity>
					<TouchableOpacity
						style={styles.touch}
						onPress={() => navigation.navigate('Login')}>
						<Text>
							Already have an Account?
							<Text style={styles.link}>Sign In</Text>
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
		height: 150,
		resizeMode: 'cover',
	},
	text: {
		fontSize: 35,
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
	},
	touch: {
		fontFamily: 'Poppins',
		margin: 10,
		alignSelf: 'center',
	},
	main: { padding: 20 },
});
