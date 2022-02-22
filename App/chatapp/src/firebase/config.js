import firebase from "firebase/app";

import 'firebase/analytics';
import 'firebase/auth';
import 'firebase/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyBTFS3dX1e3R27wdXlW_FWVlxmzzvRwJ4g",
    authDomain: "chatapp-5b4fc.firebaseapp.com",
    projectId: "chatapp-5b4fc",
    storageBucket: "chatapp-5b4fc.appspot.com",
    messagingSenderId: "1012686616944",
    appId: "1:1012686616944:web:5e84ad7b6ddbc4a0e937b5",
    measurementId: "G-005WLJHMQY"
};

firebase.initializeApp(firebaseConfig);
firebase.analytics();

const auth = firebase.auth();
const db = firebase.firestore();

auth.useEmulator('http://localhost:9099');
if (window.location.hostname === 'localhost') {
     db.useEmulator('localhost', '8080');
}

export {db,auth};
export default firebase;