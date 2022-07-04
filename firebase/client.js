import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import { getAuth, onAuthStateChanged } from "firebase/auth";


const firebaseConfig = {
  apiKey: "AIzaSyAmJYqVUrbZQUn1_YfbY_0o7dn3MWZkW3Y",
  authDomain: "ziho-c6de7.firebaseapp.com",
  projectId: "ziho-c6de7",
  storageBucket: "ziho-c6de7.appspot.com",
  messagingSenderId: "488124820643",
  appId: "1:488124820643:web:d648edaf1334494202e316",
  measurementId: "G-GJ3R41CH05"
};

firebase.initializeApp(firebaseConfig);
console.log('FIREBASE INITIALIZED',firebase)
// !firebase.app.length && firebase.initializeApp(firebaseConfig);

const mapUserFromFirebaseAuthToUser = (user)=>{
  console.log('I AM IN THE MAPUSERFROMFIREBASEAUTHTOUSER')
  const {displayname,email,photoURL} = user;
  return {
    avatar: photoURL,
    username: displayname,
    email
  }
}

export const checkAuthUser = (setUser) => {
  console.log('I AM IN THE CHECKAUTHMETHOD')	
  const auth = getAuth();
  return auth.onAuthStateChanged(user=>{
    const normalizedUser = mapUserFromFirebaseAuthToUser(user);
    setUser(normalizedUser,console.log('SETTING THE NORMALIZED USER'));
    // if(mapUserFromFirebaseAuthToUser){
    //   const normalizedUser = mapUserFromFirebaseAuthToUser(user);
    //   setUser(normalizedUser,console.log('SETTING THE NORMALIZED USER'));
    // }
  })
}

export const loginWithGitHub = () => {
  console.log('I AM IN THE loginWithGitHub')	
  const githubProvider = new firebase.auth.GithubAuthProvider();
  return firebase
    .auth()
    .signInWithPopup(githubProvider)
    .then(user=>{return mapUserFromFirebaseAuthToUser(user)})
    .catch(error=>{console.log(error)});
}
  