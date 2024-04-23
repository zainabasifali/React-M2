import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyBtqxIPxNMRumpmKGdnTNLj_WXr4cd0xVU",
    authDomain: "library-management-syste-20378.firebaseapp.com",
    projectId: "library-management-syste-20378",
    storageBucket: "library-management-syste-20378.appspot.com",
    messagingSenderId: "601567989357",
    appId: "1:601567989357:web:5ed1faef412580a6def964",
    measurementId: "G-VS34CQST2J"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);