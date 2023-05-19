 // Import the functions you need from the SDKs you need
 import { initializeApp } from "https://www.gstatic.com/firebasejs/9.22.0/firebase-app.js";
 import { getAnalytics } from "https://www.gstatic.com/firebasejs/9.22.0/firebase-analytics.js";
 // TODO: Add SDKs for Firebase products that you want to use
 // https://firebase.google.com/docs/web/setup#available-libraries

 // Your web app's Firebase configuration
 // For Firebase JS SDK v7.20.0 and later, measurementId is optional
 const firebaseConfig = {
   apiKey: "AIzaSyDHi0WXilV2fRp3KRScOwKJS-Ln741nbxs",
   authDomain: "amamstore-b892b.firebaseapp.com",
   projectId: "amamstore-b892b",
   storageBucket: "amamstore-b892b.appspot.com",
   messagingSenderId: "569764646765",
   appId: "1:569764646765:web:d9ec926ca50c11d1989464",
   measurementId: "G-JRPMB7HXVP"
 };

 // Initialize Firebase
 const app = initializeApp(firebaseConfig);
 const analytics = getAnalytics(app);