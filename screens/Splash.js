import { StyleSheet, ImageBackground, Image } from 'react-native';
export default Splash = () => {
	return (
		<ImageBackground
			source={require('../assets/pics/bg.jpg')}
			resizeMode='cover'
			style={styles.imageBackground}
			imageStyle={{ opacity: 0.6 }}>
			<Image
				source={require('../assets/pics/whitelogo.png')}
				style={styles.image}></Image>
		</ImageBackground>
	);
};

const styles = StyleSheet.create({
	imageBackground: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
		backgroundColor: '#2A5EE0',
	},
	image: {
		width: '100%',
		height: 300,
		resizeMode: 'cover',
	},
});
