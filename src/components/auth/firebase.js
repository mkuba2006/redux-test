import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from 'firebase/auth'


const firebaseConfig = {
  apiKey: "AIzaSyC2aAoVKOC_uvsdNI17jZlgZ9bqgYFeY8A",
  authDomain: "redux-test-db.firebaseapp.com",
  projectId: "redux-test-db",
  storageBucket: "redux-test-db.appspot.com",
  messagingSenderId: "565626444489",
  appId: "1:565626444489:web:9090f63fa90af9595acb18",
  measurementId: "G-LER0JP33Z1"
};


const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)
const analytics = getAnalytics(app);