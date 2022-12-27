import { Text, View, TouchableOpacity, Image } from 'react-native';
import styles from './styles';

const img1 = require('../assets/pics/image2.png');

export default function Participants({ navigation }) {
	return (
		<View style={styles.particpantView}>
			<View style={styles.particpantbarView}>
				<View style={styles.particpantimageView}>
					<Image source={img1} style={styles.participantimg}></Image>
				</View>
				<View style={styles.participantinnerview}>
					<Text style={{ color: 'black' }}>Mick</Text>
					<Text style={{ color: 'black' }}>Team lead</Text>
					<TouchableOpacity style={styles.message2button}>
						<Text style={styles.text8}>Message</Text>
					</TouchableOpacity>
				</View>
			</View>

			<View style={styles.particpantbarView}>
				<View style={styles.particpantimageView}>
					<Image source={img1} style={styles.participantimg}></Image>
				</View>

				<View style={styles.participantinnerview}>
					<Text style={{ color: 'black' }}>Mick</Text>
					<Text style={{ color: 'black' }}>Team lead</Text>
					<TouchableOpacity style={styles.message2button}>
						<Text style={styles.text8}>Message</Text>
					</TouchableOpacity>
				</View>
			</View>
		</View>
	);
}
