import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
    apiKey: "AIzaSyDY_qRnuIYkgHWH280BJFUxUus4PwqzIsg",
    authDomain: "cardwiz-d6347.firebaseapp.com",
    projectId: "cardwiz-d6347",
    storageBucket: "cardwiz-d6347.appspot.com",
    messagingSenderId: "505633735047",
    appId: "1:505633735047:web:4c1b4d637cc24c38de1322",
    measurementId: "G-FM6KRTBFVJ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const db = getFirestore(app);
export default db;