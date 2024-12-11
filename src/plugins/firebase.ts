// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyA4rkXYJb4N92g3do-lv9sZ8vTR7751iZc",
    authDomain: "vue3-emon.firebaseapp.com",
    projectId: "vue3-emon",
    storageBucket: "vue3-emon.firebasestorage.app",
    messagingSenderId: "88127897349",
    appId: "1:88127897349:web:35625b3dd76f2fecc2816c",
    measurementId: "G-1SSZDZNBB0",
};

// Initialize Firebase
export const firebaseApp = initializeApp(firebaseConfig);
