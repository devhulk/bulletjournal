import firebase from "firebase";
import "firebase/firestore";

// firebase init goes here
const config = {
  apiKey: "AIzaSyAOPbee4EG6JP1--KXAW9-C7BGvryWArhA",
  authDomain: "personal-task-manager-30d80.firebaseapp.com",
  databaseURL: "https://personal-task-manager-30d80.firebaseio.com",
  projectId: "personal-task-manager-30d80",
  storageBucket: "personal-task-manager-30d80.appspot.com",
  messagingSenderId: "65801586417"
};
firebase.initializeApp(config);

// firebase utils
const db = firebase.firestore();
const auth = firebase.auth();
const currentUser = auth.currentUser;

// firebase collections
const usersCollection = db.collection("users");
const postsCollection = db.collection("posts");
const commentsCollection = db.collection("comments");
const likesCollection = db.collection("likes");

let fb = {
  db,
  auth,
  currentUser,
  usersCollection,
  postsCollection,
  commentsCollection,
  likesCollection
};

export default fb;
