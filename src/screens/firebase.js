
// firebase.js
import { initializeApp } from 'firebase/app';
import { getAuth, initializeAuth, getReactNativePersistence } from 'firebase/auth'; // Import initializeAuth
import AsyncStorage from '@react-native-async-storage/async-storage';
import { getFirestore } from 'firebase/firestore';

// Your Firebase config
const firebaseConfig = {

    apiKey: "AIzaSyAXcJjyIMGduZfIdLW9yTIiOuXIwcrh6OY",
  
    authDomain: "uccbmobile.firebaseapp.com",
  
    projectId: "uccbmobile",
  
    storageBucket: "uccbmobile.firebasestorage.app",
  
    messagingSenderId: "443836354359",
  
    appId: "1:443836354359:web:3d201bde13e30d4db394b2"
  
  };
  


const app = initializeApp(firebaseConfig);

// Initialize Auth with persistence
const auth = initializeAuth(app, {
  persistence: getReactNativePersistence(AsyncStorage)
});


const firestore = getFirestore(app);


export { auth, firestore };