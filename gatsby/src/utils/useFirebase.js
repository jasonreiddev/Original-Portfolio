import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: 'AIzaSyCMisUz5HVjU3IpufE5xFntovsR-1CKDl0',
  authDomain: 'jasonreid-dev.firebaseapp.com',
  databaseURL: 'https://jasonreid-dev-default-rtdb.europe-west1.firebasedatabase.app',
  projectId: 'jasonreid-dev',
  storageBucket: 'jasonreid-dev.appspot.com',
  messagingSenderId: '399791915013',
  appId: '1:399791915013:web:1a14fc0ddb7675833c1c6c',
  measurementId: 'G-X6853DL132',
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

// firebase.analytics()

export default firebase;
