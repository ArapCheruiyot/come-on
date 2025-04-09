// firebase-auth.js

// Initialize Firebase
const firebaseConfig = {
  apiKey: "AIzaSyDlaiCiuvrn5gKzdnP9oei22r4SRZHjuG0",
  authDomain: "starry-compiler-443015-t5.firebaseapp.com",
  databaseURL: "https://starry-compiler-443015-t5-default-rtdb.firebaseio.com",
  projectId: "starry-compiler-443015-t5",
  storageBucket: "starry-compiler-443015-t5.firebasestorage.app",
  messagingSenderId: "990024267481",
  appId: "1:990024267481:web:79aacd7ae7e84ebf5c70c8",
  measurementId: "G-XRMKTBJ8XV"
};

// Initialize Firebase
const app = firebase.initializeApp(firebaseConfig);
const auth = firebase.auth();

// Google Sign-In function
function signInWithGoogle() {
  const provider = new firebase.auth.GoogleAuthProvider();
  
  // Sign-in using Google Popup
  auth.signInWithPopup(provider)
    .then((result) => {
      // Signed in successfully
      const user = result.user;
      console.log('User signed in:', user);

      // Redirect to the dashboard or homepage
      window.location.href = "dashboard.html";  // Change to your page after sign-in
    })
    .catch((error) => {
      // Handle Errors
      console.error("Error during Google Sign-In:", error.message);
      alert("Error during sign-in: " + error.message);
    });
}
