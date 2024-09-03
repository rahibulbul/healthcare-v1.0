const { initializeApp } = require("firebase/app");
const { getDatabase, ref, update, remove } = require("firebase/database");

const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
  authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
  databaseURL: process.env.REACT_APP_FIREBASE_DATABASE_URL,
  projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
  storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.REACT_APP_FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.REACT_APP_FIREBASE_APP_ID,
  measurementId: process.env.REACT_APP_FIREBASE_MEASUREMENT_ID,
};

const app = initializeApp(firebaseConfig);
const database = getDatabase(app);

// Test updating
const testUpdate = () => {
  const testRef = ref(database, "dummynotifications/0/0");
  update(testRef, { isRead: true })
    .then(() => console.log("Update successful"))
    .catch((error) => console.error("Update failed:", error));
};

// Test removing
const testRemove = () => {
  const testRef = ref(database, "dummynotifications/0/0");
  remove(testRef)
    .then(() => console.log("Remove successful"))
    .catch((error) => console.error("Remove failed:", error));
};

testUpdate();
testRemove();
