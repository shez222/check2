import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getAppCheck, initializeAppCheck, ReCaptchaV3Provider } from "firebase/app-check";

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAr-yQEsSPLMdinQ8GHITRYFUbiTwd8KAc",
  authDomain: "school-web-c3ed5.firebaseapp.com",
  projectId: "school-web-c3ed5",
  storageBucket: "school-web-c3ed5.appspot.com",
  messagingSenderId: "1066637057144",
  appId: "1:1066637057144:web:504912fab65a5f2333e18d",
  measurementId: "G-H26P0TE4N0"
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
