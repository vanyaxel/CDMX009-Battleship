import firebase from 'firebase/app';
import 'firebase/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyA6oJWriSlX4_WcfHsEXDINatgTZ9iuVKs",
    authDomain: "battle-ship-d97c1.firebaseapp.com",
    databaseURL: "https://battle-ship-d97c1.firebaseio.com",
    projectId: "battle-ship-d97c1",
    storageBucket: "battle-ship-d97c1.appspot.com",
    messagingSenderId: "120893882974",
    appId: "1:120893882974:web:4491f6b01bc5c6abcfaacf"
};

firebase.initializeApp(firebaseConfig);

export default firebase;