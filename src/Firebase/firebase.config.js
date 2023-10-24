// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyDYDJDAogqwqSMf8O4IJRs0URTTARALOVA",
    authDomain: "coffee-store-68bce.firebaseapp.com",
    projectId: "coffee-store-68bce",
    storageBucket: "coffee-store-68bce.appspot.com",
    messagingSenderId: "1058753804804",
    appId: "1:1058753804804:web:ebee44d34247d9ef125351"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;