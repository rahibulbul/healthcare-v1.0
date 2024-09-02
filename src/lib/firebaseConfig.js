import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getDatabase } from "firebase/database";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  // apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
  // authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
  // databaseURL:
  //   "https://healthcare-insurance-2118b-default-rtdb.europe-west1.firebasedatabase.app",
  // projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
  // storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
  // messagingSenderId: process.env.REACT_APP_FIREBASE_MESSAGING_SENDER_ID,
  // appId: process.env.REACT_APP_FIREBASE_APP_ID,
  // measurementId: process.env.REACT_APP_FIREBASE_MEASUREMENT_ID,
  apiKey: "AIzaSyBzBFKBSqorar-8aJ-FbYO-nDw1cWmLsBU",
  authDomain: "healthcare-insurance-2118b.firebaseapp.com",
  databaseURL:
    "https://healthcare-insurance-2118b-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "healthcare-insurance-2118b",
  storageBucket: "healthcare-insurance-2118b.appspot.com",
  messagingSenderId: "885642929542",
  appId: "1:885642929542:web:dd4985f418e0dc7b713807",
  measurementId: "G-8TK72SYGQ4",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const database = getDatabase(app);
const auth = getAuth(app);

export { app, analytics, database, auth };
