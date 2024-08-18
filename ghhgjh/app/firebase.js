import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getAppCheck, initializeAppCheck, ReCaptchaV3Provider } from "firebase/app-check";

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyC1SPNqM9kB708ZwtxLhlagSfIg82vLDUU",
  authDomain: "test-3aa9d.firebaseapp.com",
  projectId: "test-3aa9d",
  storageBucket: "test-3aa9d.appspot.com",
  messagingSenderId: "111464666312",
  appId: "1:111464666312:web:fb0801c08699ccfebd41fd",
  measurementId: "G-33F68Q2RD6"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth(app);

var appCheck;
if (typeof window !== "undefined") {
  appCheck = initializeAppCheck(app, {
    provider: new ReCaptchaV3Provider("6LeBjBgqAAAAAFNi6Qk-ByG99-VQY0Qdcrl7J-ST"),
    isTokenAutoRefreshEnabled: true
  });
}

export { auth, db };
