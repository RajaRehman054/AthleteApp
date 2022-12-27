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
import Icon2 from 'react-native-vector-icons/FontAwesome';

export default ProfileSetup1 = ({ navigation }) => {
	const main = () => {};
	return (
		<View style={styles.main}>
			<Image
				source={require('../assets/pics/whitelogo.png')}
				style={styles.image}></Image>
			<Text style={styles.text}>Type of Profile</Text>
			<TouchableOpacity
				style={styles.touch}
				onPress={() => navigation.navigate('ProfileSetup2')}>
				<Text>
					<Icon name='person' color={colors.royalBlue} size={160} />
				</Text>
				<Text style={styles.text2}>Individual</Text>
			</TouchableOpacity>
			<TouchableOpacity
				style={styles.touch}
				onPress={() => navigation.navigate('ProfileSetup2')}>
				<Text>
					<Icon2 name='users' color={colors.royalBlue} size={160} />
				</Text>
				<Text style={styles.text2}>Team</Text>
			</TouchableOpacity>
		</View>
	);
};

const styles = StyleSheet.create({
	main: {
		flex: 1,
		backgroundColor: colors.royalBlue,
		padding: 20,
		alignItems: 'center',
	},
	image: {
		width: '100%',
		height: 150,
		resizeMode: 'cover',
	},
	text: {
		fontSize: 35,
		fontFamily: 'Poppins-Bold',
		marginTop: '5%',
		color: 'snow',
	},
	text2: {
		fontFamily: 'Poppins-Bold',
		margin: '5%',
		color: colors.royalBlue,
	},
	touch: {
		backgroundColor: 'snow',
		width: '75%',
		alignItems: 'center',
		justifyContent: 'center',
		height: '30%',
		borderRadius: 18,
		margin: 10,
		alignSelf: 'center',
	},
});
