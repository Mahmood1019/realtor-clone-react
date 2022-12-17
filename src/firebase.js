// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD3lJUvuexjQHr79IQ0tVEXXe0sNHWYCKY",
  authDomain: "realtor-clone-react-96f7f.firebaseapp.com",
  projectId: "realtor-clone-react-96f7f",
  storageBucket: "realtor-clone-react-96f7f.appspot.com",
  messagingSenderId: "90382804367",
  appId: "1:90382804367:web:59a596c7d086d60ddf97fa"
};

// Initialize Firebase
initializeApp(firebaseConfig);
export const db = getFirestore();