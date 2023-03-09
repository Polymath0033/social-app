// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
export const firebaseConfig = {
  apiKey: "AIzaSyArOwMZTjlDMNoCQvgNvk47WbReYpZMmqA",
  authDomain: "social-app-b8db9.firebaseapp.com",
  projectId: "social-app-b8db9",
  storageBucket: "social-app-b8db9.appspot.com",
  messagingSenderId: "315711822913",
  appId: "1:315711822913:web:8ca17a0674918b4efcbac0",
};

// Initialize Firebase
//export default
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
