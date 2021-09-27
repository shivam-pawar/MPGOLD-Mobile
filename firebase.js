import firebase from "firebase/app";
import "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCIlIcwJK00oWryRKwNnegwDQsva43_PoU",
  authDomain: "mpgold-web.firebaseapp.com",
  projectId: "mpgold-web",
  storageBucket: "mpgold-web.appspot.com",
  messagingSenderId: "196964633316",
  appId: "1:196964633316:web:845befeb40777ca81e7af1",
};

let Firebase;

if (firebase.apps.length === 0) {
  Firebase = firebase.initializeApp(firebaseConfig);
}

export default Firebase;
