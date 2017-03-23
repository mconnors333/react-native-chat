import * as firebase from 'firebase'


  // Initialize Firebase
const config = {
    apiKey: "AIzaSyBq-Iv9wbSd9xubtrG2wG27Fqd53pfW-0Y",
    authDomain: "chatapp-6c443.firebaseapp.com",
    databaseURL: "https://chatapp-6c443.firebaseio.com",
    storageBucket: "chatapp-6c443.appspot.com",
    messagingSenderId: "1015830569526"
  };

firebase.initializeApp(config);

export default firebase;
