// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { getFirestore } from 'firebase/firestore';
import { getStorage } from 'firebase/storage';

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: 'AIzaSyCqyvK-HTpw-1DxokmmNPXZ5dPo1Y-eCtc',
    authDomain: 'panorama-studio-437f4.firebaseapp.com',
    projectId: 'panorama-studio-437f4',
    storageBucket: 'panorama-studio-437f4.appspot.com',
    messagingSenderId: '137167676730',
    appId: '1:137167676730:web:438deaf3fe13aa70319c03'
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const storage = getStorage(app);
