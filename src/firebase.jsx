import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDtsYoMN-dGkErryOWxBj1JxLUsO7amgOI",
  authDomain: "fir-login-1f05c.firebaseapp.com",
  projectId: "fir-login-1f05c",
  storageBucket: "fir-login-1f05c.appspot.com",
  messagingSenderId: "900530264128",
  appId: "1:900530264128:web:fb340957cc0a567ff167a5"
};


const app = initializeApp(firebaseConfig);
const auth = getAuth();

export { app, auth };