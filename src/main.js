import "bootstrap/dist/css/bootstrap.css";
import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import "bootstrap/dist/js/bootstrap.js";
import "./assets/style.scss";
import AOS from "aos";
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore/lite";
import { getAuth } from "firebase/auth";
import firebase from "firebase/compat/app";
import "firebase/compat/storage";
import "bootstrap-icons/font/bootstrap-icons";
import Swal from "sweetalert2";

createApp(App).use(router, Swal, AOS.init()).mount("#app");

const firebaseConfig = {
  apiKey: "AIzaSyDsqDELTw6JMb_zlOWnoaU2CEYb3P4_ymo ",
  authDomain: "musicream-e86b1.firebaseapp.com",
  projectId: "musicream-e86b1",
  storageBucket: "musicream-e86b1.appspot.com",
  messagingSenderId: "901603677773",
  appId: "1:901603677773:web:c91a579a22ec701fd0ae04",
};

firebase.initializeApp(firebaseConfig);
var storage = firebase.storage();
// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth();

export { db, auth, storage };
