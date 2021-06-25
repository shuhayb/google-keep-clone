import firebase from 'firebase';
  const firebaseConfig = {
    apiKey: "AIzaSyDJvkXCb4FpIPDGUJ3PYv_QJNPgTS0_9rc",
    authDomain: "keep-clone-109bb.firebaseapp.com",
    projectId: "keep-clone-109bb",
    storageBucket: "keep-clone-109bb.appspot.com",
    messagingSenderId: "646113400615",
    appId: "1:646113400615:web:f6ac273122153218783b02",
    measurementId: "G-QBZ2R9Y774"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  firebase.analytics();
export default firebase;