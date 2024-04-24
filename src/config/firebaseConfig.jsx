
import { initializeApp } from "firebase/app";
import {getFirestore} from '@firebase/firestore'
import {getStorage} from 'firebase/storage'
import {getAuth} from 'firebase/auth'



const firebaseConfig = {
  apiKey: "AIzaSyBBW1hWNYQXSNn1kikdM63mHd9zz7vpth0",
  authDomain: "gestion-app-daniel.firebaseapp.com",
  projectId: "gestion-app-daniel",
  storageBucket: "gestion-app-daniel.appspot.com",
  messagingSenderId: "681965184351",
  appId: "1:681965184351:web:f47d3e4c6d9db1524e82ea"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const initDataBase = getFirestore(app)
export const initStorage = getStorage(app)
export const initAuth = getAuth(app)