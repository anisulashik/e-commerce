import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyAS_64GGio5nb9TKk8wuhiWE3Oeq6UyipI",
  authDomain: "e-challenge-83ed8.firebaseapp.com",
  projectId: "e-challenge-83ed8",
  storageBucket: "e-challenge-83ed8.appspot.com",
  messagingSenderId: "691133461930",
  appId: "1:691133461930:web:40e93519a73556b66167d3",
  measurementId: "${config.measurementId}"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore(); //realtime database
const auth = firebase.auth();

export { db, auth };

