import firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyAUcMiiDBe9RwtiCzRCLGQYUeU14zuRrV8",
    authDomain: "temporal-data-store.firebaseapp.com",
    projectId: "temporal-data-store",
    storageBucket: "temporal-data-store.appspot.com",
    messagingSenderId: "465134646354",
    appId: "1:465134646354:web:b1dab7f14f6ff4a9fe1b8b",
    measurementId: "G-0PMY9GPT4F"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);

  const db = firebaseApp.firestore();
  const auth = firebase.auth();

 export { db, auth}; 