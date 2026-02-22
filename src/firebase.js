import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
const firebaseConfig = {
  apiKey: "AIzaSyD11NRDqARETIDwmWp2h0k5aggqj6g0FfM",
  authDomain: "civilisation-sprit.firebaseapp.com",
  projectId: "civilisation-sprit",
  storageBucket: "civilisation-sprit.firebasestorage.app",
  messagingSenderId: "155737286502",
  appId: "1:155737286502:web:30131d038f6522e937caa7",
  measurementId: "G-0LR3Y373V8",
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();
