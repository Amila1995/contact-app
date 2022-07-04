import firebase  from 'firebase';

var firebaseApp = firebase.initializeApp({

  apiKey: "AIzaSyASgw3EaY9SMK87kK_v48Is_0LpZvjxAPQ",
  authDomain: "react-contact-form-66436.firebaseapp.com",
  projectId: "react-contact-form-66436",
  storageBucket: "react-contact-form-66436.appspot.com",
  messagingSenderId: "609960571871",
  appId: "1:609960571871:web:de94a69d713b2c3529ca6a"

});

var db = firebaseApp.firestore();

export {db};