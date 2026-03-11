/* Firebase Configuration */

import { initializeApp }

from "https://www.gstatic.com/firebasejs/10.12.2/firebase-app.js";

import { getAuth }

from "https://www.gstatic.com/firebasejs/10.12.2/firebase-auth.js";

import { getFirestore }

from "https://www.gstatic.com/firebasejs/10.12.2/firebase-firestore.js";


/* Replace with your Firebase config */

const firebaseConfig = {
  apiKey: "AIzaSyCmFfPrhLjworsdTOB5-IzYOXmYo24dlyc",
  authDomain: "learning-website-80770.firebaseapp.com",
  projectId: "learning-website-80770",
  storageBucket: "learning-website-80770.firebasestorage.app",
  messagingSenderId: "863559157502",
  appId: "1:863559157502:web:a47c4db9c248bffa2cc7af",
  measurementId: "G-KXWWHYK47Z"
};



/* Initialize Firebase */

const app = initializeApp(firebaseConfig);


/* Initialize Services */

const auth = getAuth(app);

const db = getFirestore(app);


/* Export */

export { auth, db };