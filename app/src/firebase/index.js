import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'
import { firebaseConfig } from './config';

const firebaseApp = firebase.initializeApp(firebaseConfig);
const settings = {timestampsInSnapshots: true}
firebaseApp.firestore().settings(settings)
export const firestore = firebaseApp.firestore();
