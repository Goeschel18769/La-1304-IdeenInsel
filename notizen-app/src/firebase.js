import firebase from 'firebase/app';
import 'firebase/firestore';
import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyC54JJ26eBARgd-7vyII4iCicpySAHSo2E",
    authDomain: "ideen-insel.firebaseapp.com",
    projectId: "ideen-insel",
    storageBucket: "ideen-insel.appspot.com",
    messagingSenderId: "840487975322",
    appId: "1:840487975322:web:d20916b6d2de18fc366223",
    measurementId: "G-4GFPELV1MM"
  };


  const app = initializeApp(firebaseConfig);
  const db = getFirestore(app);
  
  export { db };