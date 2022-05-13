
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyC9NsRKyVn7SIf9GjZeGzlIkkD4x16B9ZA",
    authDomain: "slack-clone-react-feaae.firebaseapp.com",
    projectId: "slack-clone-react-feaae",
    storageBucket: "slack-clone-react-feaae.appspot.com",
    messagingSenderId: "227494960387",
    appId: "1:227494960387:web:24095a077483fb8d0fdd36",
    measurementId: "G-Y02XCPLEH1"
  };
  

  const firebaseApp=firebase.initializeApp(firebaseConfig)
  const db=firebaseApp.firestore()
  const auth=firebase.auth()
  const provider= new firebase.auth.GoogleAuthProvider();

  export  {db,auth,provider};
  