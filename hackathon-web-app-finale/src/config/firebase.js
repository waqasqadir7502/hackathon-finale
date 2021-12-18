import {initializeApp} from "firebase/app";
import {
    getAuth,
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    onAuthStateChanged,
    signOut,
    sendPasswordResetEmail
} from "firebase/auth";
import {
    getFirestore,
    doc,
    setDoc,
    getDocs ,
    deleteDoc,
    updateDoc,
    addDoc,
    collection,
} from "firebase/firestore"


const firebaseConfig = {
    apiKey: "AIzaSyCmVu_RaNSc01WW_BkFduo8MHjH-_FF7o0",
    authDomain: "hackathon-finale.firebaseapp.com",
    projectId: "hackathon-finale",
    storageBucket: "hackathon-finale.appspot.com",
    messagingSenderId: "192371094366",
    appId: "1:192371094366:web:03126730eccfa6d8de55cf"
};


const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

export {
    auth,
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    onAuthStateChanged,
    signOut,
    sendPasswordResetEmail,

    db,
    doc,
    setDoc,
    getDocs ,
    deleteDoc,
    updateDoc,
    addDoc,
    collection,
}
