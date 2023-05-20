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





firebase.initializeApp(firebaseConfig);
var messagesRef = firebase.database().ref('Checking');
document.getElementById(
   'contactForm').addEventListener('submit', submitForm);
//uploading file in storage
function uploadimage(){
   var type = getInputVal('types');
var storage = firebase.storage();
var file=document.getElementById("files ").files[0];
var storageref=storage.ref();
var thisref=storageref.child(type).child(file.name).put(file);
thisref.on('state_changed',function(snapshot) {


}, function(error) {

}, function() {
// Uploaded completed successfully, now we can get the download URL
thisref.snapshot.ref.getDownloadURL().then(function(downloadURL) {
  //getting url of image
  document.getElementById("url ").value=downloadURL;
  alert('uploaded successfully');
  saveMessage(downloadURL);
 });
});

// Get values
var url = getInputVal('url');
// Save message
// saveMessage(url);
}
function getInputVal(id){
  document.getElementById('contactForm').reset();

}


// Function to get form values
function getInputVal(id){
return document.getElementById(id).value;
}

// Save message to firebase database
function saveMessage(url){
var newMessageRef = messagesRef.push();
newMessageRef.set({
 imageurl:url,
});
}