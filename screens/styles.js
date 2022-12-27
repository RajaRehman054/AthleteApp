import { StyleSheet } from 'react-native';

export default StyleSheet.create({
	//header
	headerbar: {
		flexDirection: 'row',
		height: 180,
		backgroundColor: '#020D28',
		borderBottomLeftRadius: 15,
		borderBottomRightRadius: 15,
	},
	leftview1: {
		width: '30%',
	},
	rightview2: {
		width: '70%',
	},
	rightview3: {
		height: '43%',
		flexDirection: 'row',
		justifyContent: 'space-between',
	},
	rightview4: {
		height: '43%',
		flexDirection: 'row',
	},
	rightview5: {
		height: '14%',
		flexDirection: 'row',
		alignSelf: 'center',
	},
	settings: {
		marginRight: 10,
		alignSelf: 'center',
	},
	messagebutton: {
		backgroundColor: 'white',
		padding: 5,
		paddingLeft: 22,
		paddingRight: 22,
		alignItems: 'center',
		width: '50%',
		borderRadius: 30,
		marginRight: 3,
	},
	settingsbutton: {
		backgroundColor: '#020D28',
		padding: 3,
		paddingLeft: 22,
		paddingRight: 22,
		borderColor: 'white',
		borderWidth: 2,
		alignItems: 'center',
		width: '50%',
		borderRadius: 30,
		marginRight: 3,
	},
	buttonview: {
		flexDirection: 'row',
		height: '40%',
		width: '95%',
		alignSelf: 'center',
		marginLeft: 5,
	},
	leftview6: {
		marginTop: 50,
		height: '72%',
	},
	headerimg: {
		marginLeft: 'auto',
		marginRight: 'auto',
	},
	text1: {
		color: 'white',
		fontSize: 22,
		marginLeft: 10,
		alignSelf: 'center',
	},
	text2: {
		color: 'white',
		fontSize: 22,
	},
	text3: {
		color: 'white',
		fontSize: 16,
		marginTop: 6,
	},
	text4: {
		color: 'white',
		fontSize: 12,
	},
	text5: {
		color: 'white',
		fontSize: 10,
	},
	location: {
		marginTop: 2,
	},

	//switchbar
	switchbar: {
		height: 50,
	},
	switchbarcont: {
		flexDirection: 'row',
		width: '45%',
		justifyContent: 'space-between',
		marginTop: 'auto',
		marginBottom: 'auto',
		marginLeft: 10,
	},

	//participantScreen

	midview: {},
	particpantView: {
		width: '95%',
		marginLeft: 'auto',
		marginRight: 'auto',
		flexDirection: 'row',
		justifyContent: 'space-between',
	},
	particpantbarView: {
		width: '49%',
		flexDirection: 'row',
		backgroundColor: 'white',
		marginTop: 5,
		marginBottom: 5,
		borderRadius: 15,
		height: 90,
		shadowColor: '#171717',
		shadowOffset: { width: -2, height: 4 },
		shadowOpacity: 0.2,
		shadowRadius: 3,
		elevation: 10,
	},
	message2button: {
		backgroundColor: '#020D28',
		alignItems: 'center',
		width: '85%',
		borderRadius: 19,
	},
	participantimg: {
		width: 50,
		height: 50,
		marginLeft: 'auto',
		marginRight: 'auto',
		borderRadius: 10,
	},
	particpantimageView: {
		width: '40%',
		justifyContent: 'center',
		marginLeft: 'auto',
		marginRight: 'auto',
	},
	participantinnerview: {
		width: '60%',
		justifyContent: 'space-between',
		marginBottom: 5,
		marginTop: 5,
	},
	text8: {
		color: 'white',
		alignSelf: 'center',
		padding: 5,
		fontWeight: 'bold',
		fontSize: 12,
	},

	//matches View

	matchView3: {
		width: '95%',
		marginLeft: 'auto',
		marginRight: 'auto',
	},
	matchbar4: {
		width: '100%',
		backgroundColor: 'white',
		marginTop: 5,
		marginBottom: 5,
		borderRadius: 15,
		height: 130,
		shadowColor: '#171717',
		shadowOffset: { width: -2, height: 4 },
		shadowOpacity: 0.2,
		shadowRadius: 3,
		elevation: 10,
	},
	newmatchbutton: {
		backgroundColor: '#020D28',
		alignItems: 'center',
		width: '50%',
		borderRadius: 20,
		alignSelf: 'flex-end',
		marginBottom: 5,
	},
	viewbutton: {
		backgroundColor: '#020D28',
		alignItems: 'center',
		width: '50%',
		borderRadius: 19,
	},
	text9: {
		color: 'white',
		alignSelf: 'center',
		padding: 5,
		fontWeight: 'bold',
		fontSize: 10,
	},
	text10: {
		color: 'white',
		alignSelf: 'center',
		padding: 7,
		fontWeight: 'bold',
		fontSize: 14,
	},
	matchimage: {
		width: '25%',
		height: 130,
		alignItems: 'center',
		justifyContent: 'center',
	},
	barinner: {
		height: 40,
		flexDirection: 'row',
		alignItems: 'center',
		justifyContent: 'space-between',
	},

	// tournament View

	tournamentview1: {
		width: '95%',
		marginLeft: 'auto',
		marginRight: 'auto',
	},
	tournamentbar3: {
		width: '100%',
		backgroundColor: 'white',
		marginTop: 5,
		marginBottom: 5,
		borderRadius: 15,
		height: 200,
		shadowColor: '#171717',
		shadowOffset: { width: -2, height: 2 },
		shadowOpacity: 0.2,
		shadowRadius: 3,
		elevation: 10,
	},

	//matchnow view & edit team view

	inputView7: {
		width: '80%',
		marginLeft: 'auto',
		marginRight: 'auto',
	},
	text12: {
		color: 'white',
		justifyContent: 'center',
		alignSelf: 'center',
		marginTop: 'auto',
		marginBottom: 'auto',
		padding: 8,
		fontWeight: 'bold',
		fontSize: 14,
	},

	input: {
		borderWidth: 1,
		height: 46,
		padding: 15,
		borderRadius: 12,
		marginBottom: 10,
		marginTop: 5,
	},
	button11: {
		backgroundColor: '#020D28',
		marginTop: 5,
		marginBottom: 5,
		borderRadius: 12,
		height: 55,
	},

	// edit team
	menubar: {
		flexDirection: 'row',
		height: 220,
		backgroundColor: '#020D28',
		borderBottomLeftRadius: 15,
		borderBottomRightRadius: 15,
		alignItems: 'center',
		justifyContent: 'center',
		marginBottom: 20,
	},
	view1: {
		width: '90%',
		height: '90%',
	},

	view3: {
		height: '20%',
		flexDirection: 'row',
		justifyContent: 'space-between',
	},
	icon1: {
		alignItems: 'center',
		justifyContent: 'center',
	},

	view6: {
		alignItems: 'center',
		justifyContent: 'center',
		height: '80%',
	},

	// match now view
	matchmenubar: {
		flexDirection: 'row',
		height: 180,
		backgroundColor: '#020D28',
		borderBottomLeftRadius: 15,
		borderBottomRightRadius: 15,
		marginBottom: 20,
	},

	backarrow: {
		marginLeft: 10,
	},

	matchview6: {
		marginTop: 'auto',
		height: '85%',
	},
});
