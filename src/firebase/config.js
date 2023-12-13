// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBhnLy6AebglUCZxyoW421zcC5ovnsZYtM",
  authDomain: "comision49870juanpesce.firebaseapp.com",
  projectId: "comision49870juanpesce",
  storageBucket: "comision49870juanpesce.appspot.com",
  messagingSenderId: "684077335086",
  appId: "1:684077335086:web:96cc52e1658f60f3e0d5bf"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const firebaseConnect = () => app