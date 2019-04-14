import app from "firebase/app";
import "firebase/auth";
import 'firebase/database';

const config = {
  apiKey: "AIzaSyDeWScRIDEvGlstPg2zrduF1Eu9fK24-u0",
  authDomain: "jobula-rasa.firebaseapp.com",
  databaseURL: "https://jobula-rasa.firebaseio.com",
  projectId: "jobula-rasa",
  storageBucket: "jobula-rasa.appspot.com",
  messagingSenderId: "457887154270"
};

class Firebase {
  constructor() {
    app.initializeApp(config);

    this.auth = app.auth();
    this.db = app.database();
  }

  doCreateUserWithEmailAndPassword = (email, password) =>
    this.auth.createUserWithEmailAndPassword(email, password);

  doSignInWithEmailAndPassword = (email, password) =>
    this.auth.signInWithEmailAndPassword(email, password);

  doSignOut = () => this.auth.signOut();

  doPasswordReset = email => this.auth.sendPasswordResetEmail(email);

  doPasswordUpdate = password => this.auth.currentUser.updatePassword(password);

  user = uid => this.db.ref(`users/${uid}`);

  users = () => this.db.ref('users');
}

export default Firebase;
