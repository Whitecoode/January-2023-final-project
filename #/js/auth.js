
// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.22.0/firebase-app.js";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  onAuthStateChanged,
  signOut,
} from "https://www.gstatic.com/firebasejs/9.22.0/firebase-auth.js";
const firebaseConfig = {
  apiKey: "AIzaSyAz7iQQUXTl3Vf1u4jjZJLRyLKL6R7AxP8",
  authDomain: "aman-store-auth.firebaseapp.com",
  projectId: "aman-store-auth",
  storageBucket: "aman-store-auth.appspot.com",
  messagingSenderId: "367395808481",
  appId: "1:367395808481:web:cd1cfcd8d359d573f703a0",
  measurementId: "G-3H183MXKCD"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

const userEmail = document.querySelector('#useremail');
const userPassword = document.querySelector('#userpassword');
const form = document.querySelector('#formregister')
const formSign = document.querySelector('#formregister2')
const button = document.querySelector('.btn-sign button')

const user = {
  email: "",
  password: "",
}


userEmail.addEventListener('change', (e) => {
  user.email = e.target.value;
})
userPassword.addEventListener('change', (e) => {
  user.password = e.target.value;

})

const usersignUp = async () => {
  createUserWithEmailAndPassword(auth, user.email, user.password)
  .then((userCredentials) => {
    const user = userCredentials.user;
    alert('you have created an account successfully')
    window.location.replace('sign.html')
    
    })
    .catch((error) => {
      const errorCode = error.code
    })
};

form?.addEventListener('submit', (e) => {
  e.preventDefault()
  usersignUp()
})

const usersignIn = async () => {
  signInWithEmailAndPassword(auth, user.email, user.password)
    .then((userCredentials) => {
      const user = userCredentials.user;
      console.log(user);
      alert('you have signed in successfully')
      window.location.replace('index.html')
    })
    .catch((error) => {
      const errorCode = error.code
    })
};

formSign.addEventListener('submit', (e) => {
  e.preventDefault()
  usersignIn()
})

