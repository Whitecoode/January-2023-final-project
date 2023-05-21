 // Import the functions you need from the SDKs you need
 import { initializeApp } from "https://www.gstatic.com/firebasejs/9.22.0/firebase-app.js";
 import {
     getAuth,
     createUserWithEmailAndPassword,
     signInWithEmailAndPassword,
     onAuthStateChanged,
     signOut,
 } from "https://www.gstatic.com/firebasejs/9.22.0/firebase-auth.js";
 import { getAnalytics } from "https://www.gstatic.com/firebasejs/9.22.0/firebase-analytics.js";
 // TODO: Add SDKs for Firebase products that you want to use
 // https://firebase.google.com/docs/web/setup#available-libraries

 // Your web app's Firebase configuration
 // For Firebase JS SDK v7.20.0 and later, measurementId is optional
 const firebaseConfig = {
   apiKey: "AIzaSyA2xka8SDGGwf7CdYCjG3o0pHPBmdLFlqw",
   authDomain: "authentication-2bc42.firebaseapp.com",
   databaseURL: "https://authentication-2bc42-default-rtdb.firebaseio.com",
   projectId: "authentication-2bc42",
   storageBucket: "authentication-2bc42.appspot.com",
   messagingSenderId: "208618224206",
   appId: "1:208618224206:web:5ee918517fe48f1a90211f",
   measurementId: "G-RNN70XCW0W"
 };

 // Initialize Firebase
 const app = initializeApp(firebaseConfig);
 const analytics = getAnalytics(app);
 const auth = getAuth(app);


 const username = document.querySelector("#username")
 const userEmail = document.querySelector("#e-mail")
 const userPassword = document.querySelector("#password")
//  const userPassword2 = document.querySelector("#password")
 const login = document.querySelector("#login")
 // const secretContent = document.querySelector("secretContent")
//  const signUpBtn = document.querySelector("#signUpBtn")
 const signInBtn = document.querySelector("#signInBtn")

 // secretContent.style.display = 'none';


 const userSignIn = async() => {
     const signInEmail = userEmail.value;
     const signInPassword = userPassword.value;
     signInWithEmailAndPassword(auth, signInEmail, signInPassword)
     .then((userCredential) =>{
         const user = userCredential.user;
         alert("You have signed in successfully!");
         window.location.replace('./index.html')
     })
     .catch((error) => {
     
         alert(error);
         login.reset()
     })
 }

 signInBtn.addEventListener('click', userSignIn)