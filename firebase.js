import * as firebase from 'firebase/app';
import 'firebase/auth';
import { getAuth } from 'firebase/auth';
import { getDatabase } from 'firebase/database';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {
	initializeAuth,
	getReactNativePersistence,
} from 'firebase/auth/react-native';

const firebaseConfig = {
	apiKey: 'AIzaSyArV8IiWZMpVL-m9rA-hYN7V3MGG08pbD8',
	authDomain: 'athleteapp-edbf6.firebaseapp.com',
	databaseURL: 'https://athleteapp-edbf6-default-rtdb.firebaseio.com',
	projectId: 'athleteapp-edbf6',
	storageBucket: 'athleteapp-edbf6.appspot.com',
	messagingSenderId: '41610979163',
	appId: '1:41610979163:web:8b4320241a342ccd9edc7e',
	measurementId: 'G-PSTDTE3CQ9',
};

const app = firebase.initializeApp(firebaseConfig);
var auth = initializeAuth(app, {
	persistence: getReactNativePersistence(AsyncStorage),
});
auth = getAuth(app);

const db = getDatabase(app);
export { auth, db };
