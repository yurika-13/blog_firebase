// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { getAuth, GoogleAuthProvider} from "firebase/auth";
import { getFirestore} from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCnLda_nnS-yhtCpV3A3qcUI5wphapeM7w",
  authDomain: "blog-81f65.firebaseapp.com",
  projectId: "blog-81f65",
  storageBucket: "blog-81f65.appspot.com",
  messagingSenderId: "733181200224",
  appId: "1:733181200224:web:d401517fcb3ba746d58005"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();
const db = getFirestore(app);

export {auth, provider, db}