import { initializeApp } from 'firebase/app';
import {
  getAuth,
  signInWithRedirect,
  signInWithPopup,
  GoogleAuthProvider,
} from 'firebase/auth';

import { getFirestore, doc, getDoc, setDoc } from 'firebase/firestore';

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyDd5VmQ0LSz5_6Nk4pGTusAytuRO1s9M0I',
  authDomain: 'crwn-clothing-db-4bb84.firebaseapp.com',
  projectId: 'crwn-clothing-db-4bb84',
  storageBucket: 'crwn-clothing-db-4bb84.appspot.com',
  messagingSenderId: '940702359462',
  appId: '1:940702359462:web:6ab17719da7ee68b663967',
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);

const provider = new GoogleAuthProvider();
provider.setCustomParameters({
  prompt: 'select_account',
});

export const auth = getAuth();
export const signInWithGooglePopup = () => signInWithPopup(auth, provider);

//Firesctore
export const db = getFirestore();
export const createUserDocumentFromAuth = async (userAuth) => {
  const userDocRef = doc(db, 'users', userAuth.uid);
  console.log(userDocRef);
  const userSnapshot = await getDoc(userDocRef);
  console.log(userSnapshot);

  ////////////////////////////////////////////////////
  //if user data does not exist
  if (!userSnapshot.exists()) {
    const { displayName, email,createdAt } = userAuth;
    const creat = new Date();

    try {
      await setDoc(userDocRef, {
        displayName,
        email,
        createdAt,
      });
    } catch (error) {
      console.log(`error creating the user${error.message}`);
    }
  }

  //id user data exist
  return userDocRef;
  //return userDocRef
};
