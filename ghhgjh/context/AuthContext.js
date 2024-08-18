"use client"
import { useContext, createContext, useState, useEffect } from 'react';
import { RecaptchaVerifier, signOut, onAuthStateChanged, signInWithPhoneNumber } from "firebase/auth";
import { auth, db } from '@/app/firebase';
import { collection, query, where, getDocs, addDoc } from 'firebase/firestore';


const AuthContext = createContext()

// Turn off phone auth app verification.
auth.settings.appVerificationDisabledForTesting = true;

export const AuthContextProvider = ({children}) => {
  const [user, setUser] = useState(null)
  const [confirmationResult, setConfirmationRresult] = useState(null);

  const setupRecaptcha = () => {
    if (!window.recaptchaVerifier) {
      window.recaptchaVerifier = new RecaptchaVerifier(auth, 'recaptcha-container', {
        'size': 'invisible',
        'callback': (response) => {
          // reCAPTCHA solved, allow signInWithPhoneNumber.
        }
      }, auth);
    }
  };

  const phoneLogIn = (phoneNumber) => {
    setupRecaptcha();
    const appVerifier = window.recaptchaVerifier;
    phoneNumber = formatPhoneNumber(phoneNumber);
    signInWithPhoneNumber(auth, phoneNumber, appVerifier)
      .then((confirmationResult) => {
        // You might want to store confirmationResult somewhere to use it later for verification
        setConfirmationRresult(confirmationResult);
      }).catch((error) => {
        console.error("Error during sign-in with phone number:", error);
      });
  }
  const formatPhoneNumber = (number) => {
    // Ensure the phone number includes the '+' sign and country code
    if (!number.startsWith('+')) {
      return `+${number}`;
    }
    return number;
  };

  const verifyCode = (verificationCode, onSuccess) => {
    confirmationResult.confirm(verificationCode)
      .then((result) => {
        setUser(result.user);
        if(onSuccess) {
          onSuccess();
        }
      }).catch((error) => {
        console.error("Error during confirmation:", error);
      });
  };

  const logOut = () => {
    signOut(auth);
  }

  useEffect(() =>{
    const unsubscribe = onAuthStateChanged(auth, async (currentUser) => {
      if(currentUser) {
        const usersRef = collection(db, 'accounts');
        const q = query(usersRef, where('authUserID', '==', currentUser.uid));
        const querySnapshot = await getDocs(q);

        if(querySnapshot.empty) {
          await addDoc(usersRef, {
            authUserID: currentUser.uid,
            createdOn: Date.now(),
            pointTotal: 0
          })
        }
        setUser(currentUser);
      } else{
        setUser(null);
      }
      
    });
    return () => unsubscribe();
  }, [user]);
  
  return (
    <AuthContext.Provider value={{ user, phoneLogIn, verifyCode, logOut }}>
      {children}
      <div id="recaptcha-container"></div>
    </AuthContext.Provider>
  )
}

export const UserAuth = () => {
  return useContext(AuthContext)
}