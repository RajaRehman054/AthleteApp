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
import { useState, useEffect } from 'react';
import Icon from 'react-native-vector-icons/Ionicons';
import Icon2 from 'react-native-vector-icons/AntDesign';

export default ProfileSetupTeam = ({ navigation }) => {
	const main = () => {};
	return (
		<View style={styles.main}>
			<Image
				source={require('../assets/pics/whitelogo.png')}
				style={styles.image}></Image>
			<Text style={styles.text}>Play With Others</Text>
			<TouchableOpacity
				style={styles.touch}
				onPress={() => navigation.navigate('TabNavigator')}>
				<Text>
					<Icon2
						name='addusergroup'
						color={colors.royalBlue}
						size={160}
					/>
				</Text>
				<Text style={styles.text2}>Create a Team</Text>
			</TouchableOpacity>
			<TouchableOpacity
				style={styles.touch}
				onPress={() => navigation.navigate('TabNavigator')}>
				<Text>
					<Icon name='person' color={colors.royalBlue} size={160} />
				</Text>
				<Text style={styles.text2}>Join a Team</Text>
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
