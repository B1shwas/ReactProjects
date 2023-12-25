// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAjlQh-FWTq2evMz4V27CvUo6_uku79Iz0",
  authDomain: "vite-contaact.firebaseapp.com",
  projectId: "vite-contaact",
  storageBucket: "vite-contaact.appspot.com",
  messagingSenderId: "924070860563",
  appId: "1:924070860563:web:67e06d3f8259263a7bece6",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
