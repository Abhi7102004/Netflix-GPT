// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBui6qwX-me-o1XtlgoZqeRCGjHYMSYIrU",
  authDomain: "netflix-gpt-ca0ba.firebaseapp.com",
  projectId: "netflix-gpt-ca0ba",
  storageBucket: "netflix-gpt-ca0ba.appspot.com",
  messagingSenderId: "403646462011",
  appId: "1:403646462011:web:7921b67440d60c0107c41e",
  measurementId: "G-MJ0PMR28L0"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth=getAuth();