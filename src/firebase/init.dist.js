import firebase from 'firebase/app';
import firestore from 'firebase/firestore';

const config = {
    apiKey: "...",
    authDomain: "...",
    databaseURL: "...",
    projectId: "...",
    storageBucket: "...",
    messagingSenderId: "..."
};

const firebaseApp = firebase.initializeApp(config);

firebaseApp.firestore().settings({
    timestampsInSnapshots: true
});

export default firebaseApp.firestore();