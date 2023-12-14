
  // Import the functions you need from the SDKs you need
  import { initializeApp } from "https://www.gstatic.com/firebasejs/10.1.0/firebase-app.js";
  import {getAuth } from "https://www.gstatic.com/firebasejs/10.1.0/firebase-auth.js"
  // TODO: Add SDKs for Firebase products that you want to use
  // https://firebase.google.com/docs/web/setup#available-libraries


  // Your web app's Firebase configuration
  const firebaseConfig = {
    apiKey: "AIzaSyAvOpmkqCOs07OAlW-Rye6XK71ImPg9Vzs",
    authDomain: "szlogin-3defb.firebaseapp.com",
    projectId: "szlogin-3defb",
    storageBucket: "szlogin-3defb.appspot.com",
    messagingSenderId: "548414642727",
    appId: "1:548414642727:web:3fdda574598be6f3154c02"
  };

  // Initialize Firebase
  export const app = initializeApp(firebaseConfig);
  export const auth = getAuth(app)
