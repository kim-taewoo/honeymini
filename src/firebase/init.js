import firebase from "firebase/app";
import firestore from "firebase/firestore";

// Initialize Firebase
var config = {
  apiKey: "AIzaSyAs19mi2jc9Jx1AfbbStOQTY15OFBI1H64",
  authDomain: "honeymini.firebaseapp.com",
  databaseURL: "https://honeymini.firebaseio.com",
  projectId: "honeymini",
  storageBucket: "honeymini.appspot.com",
  messagingSenderId: "828510582709",
  appId: "1:828510582709:web:ebbcf6a6839180d9"
};
const firebaseApp = firebase.initializeApp(config);

export default firebaseApp.firestore();
