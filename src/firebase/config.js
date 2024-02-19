import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA6qSgf29Z1WTHybtlVVijPDrCZt-xJDZ4",
  authDomain: "madd-gallery-firegram.firebaseapp.com",
  databaseURL: "https://madd-gallery-firegram-default-rtdb.firebaseio.com",
  projectId: "madd-gallery-firegram",
  storageBucket: "madd-gallery-firegram.appspot.com",
  messagingSenderId: "810385123118",
  appId: "1:810385123118:web:200d64a21679c5a018fcbf",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const projectStorage = getStorage(app);
const projectFirestore = getFirestore(app);
//const projectStorage = firebase.storage();
//const projectFirestore = firebase.firestore();

export { projectStorage, projectFirestore };
