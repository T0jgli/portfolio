// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics, isSupported } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: NEXT_apiKey,
    authDomain: NEXT_authDomain,
    projectId: NEXT_projectId,
    storageBucket: NEXT_storageBucket,
    messagingSenderId: NEXT_messagingSenderId,
    appId: NEXT_appId,
    measurementId: NEXT_measurementId,
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const analytics = isSupported().then((yes) => (yes ? getAnalytics(app) : null));
