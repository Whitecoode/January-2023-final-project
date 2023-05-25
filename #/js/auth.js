
// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.22.0/firebase-app.js";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  onAuthStateChanged,
  signOut,
} from "https://www.gstatic.com/firebasejs/9.22.0/firebase-auth.js";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
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
// const firstName = document.querySelector('#first');
// const lastName = document.querySelector('#last');
// const confirmPassword = document.querySelector('#confirmpassword');
// const address = document.querySelector('#address');
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
// firstName.addEventListener('change', (e)=>{
//   const first = (e.target.value)
// })
// lastName.addEventListener('change', (e)=>{
//   const last = (e.target.value)
// })
// confirmPassword.addEventListener('change', (e)=>{
//   const confirmpassword = (e.target.value)
// })
// address.addEventListener('change', (e)=>{
//   const address = (e.target.value)
// })

const usersignUp = async () => {
  // console.log(signupEmail)
  createUserWithEmailAndPassword(auth, user.email, user.password)
  .then((userCredentials) => {
    const user = userCredentials.user;
    alert('you have created an account successfully')
    window.location.replace('sign.html')
    
    })
    .catch((error) => {
      const errorCode = error.code
      // const errorMessage = error.message
      // console.error(errorCode + errorMessage)

      // console.log(error.message)
    })
};

form?.addEventListener('submit', (e) => {
  e.preventDefault()
  usersignUp()
})

const usersignIn = async () => {
  // console.log(signupEmail)
  signInWithEmailAndPassword(auth, user.email, user.password)
    .then((userCredentials) => {
      const user = userCredentials.user;
      console.log(user);
      alert('you have signed in successfully')
      window.location.replace('index.html')
    })
    .catch((error) => {
      const errorCode = error.code
      // const errorMessage = error.message
      // console.error(errorCode + errorMessage)
      // console.log(error.message)
    })
};

formSign.addEventListener('submit', (e) => {
  e.preventDefault()
  usersignIn()
})

