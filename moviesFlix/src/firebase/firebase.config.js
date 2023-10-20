// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: 'AIzaSyBKq2vJCISvGyDZHgle6gJ7tGLkpZoMJjU',
    authDomain: 'moviesflix-624a8.firebaseapp.com',
    projectId: 'moviesflix-624a8',
    storageBucket: 'moviesflix-624a8.appspot.com',
    messagingSenderId: '316537365191',
    appId: '1:316537365191:web:543b6e0a1cc9b1dbb714e2',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;
