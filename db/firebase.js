import { initializeApp } from 'firebase/app';
import 'firebase/firestore'
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyA9OgAnUrKaDJIjmnaewU_lv3x5LocZlCg",
    authDomain: "react-native-apptask.firebaseapp.com",
    projectId: "react-native-apptask",
    storageBucket: "react-native-apptask.appspot.com",
    messagingSenderId: "663992463425",
    appId: "1:663992463425:web:6a0474ff82072ed6ab16c0"
  };
  
  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  const db = getFirestore(app);

  export default {app,db}