import firebase from "firebase/compat/app"
import "firebase/compat/auth"
import "firebase/compat/firestore"
import "firebase/compat/storage"
import { getAuth } from "firebase/auth"

const firebaseConfig = {
  apiKey: "AIzaSyAmJYqVUrbZQUn1_YfbY_0o7dn3MWZkW3Y",
  authDomain: "ziho-c6de7.firebaseapp.com",
  projectId: "ziho-c6de7",
  storageBucket: "ziho-c6de7.appspot.com",
  messagingSenderId: "488124820643",
  appId: "1:488124820643:web:d648edaf1334494202e316",
  measurementId: "G-GJ3R41CH05",
}

firebase.initializeApp(firebaseConfig)
console.log("FIREBASE INITIALIZED", firebase)
// !firebase.app.length && firebase.initializeApp(firebaseConfig);

const db = firebase.firestore()

const mapUserFromFirebaseAuthToUser = (user) => {
  console.log("I AM IN THE MAPUSERFROMFIREBASEAUTHTOUSER")
  const { displayname, email, photoURL, uid } = user
  return {
    avatar: photoURL,
    username:
      (displayname && displayname) || "horizon-code",
    email,
    uid,
  }
}

export const checkAuthUser = (setUser) => {
  console.log("I AM IN THE CHECKAUTHMETHOD")
  const auth = getAuth()
  return auth.onAuthStateChanged((user) => {
    console.log(user)
    const normalizedUser = user
      ? mapUserFromFirebaseAuthToUser(user)
      : null
    setUser(
      normalizedUser,
      console.log(
        "SETTING THE NORMALIZED",
        normalizedUser || null
      )
    )
  })
}

export const loginWithGitHub = () => {
  console.log("I AM IN THE loginWithGitHub")
  const githubProvider =
    new firebase.auth.GithubAuthProvider()
  return firebase
    .auth()
    .signInWithPopup(githubProvider)
    .then((user) => {
      console.log(user)
      return mapUserFromFirebaseAuthToUser(user)
    })
    .catch((error) => {
      console.log(error)
    })
}

export const addZiht = ({
  avatar,
  content,
  img,
  userId,
  username,
}) => {
  console.log("I AM IN THE addZiht")
  return db.collection("zihts").add({
    avatar,
    content,
    img,
    userId,
    username,
    createdAt: firebase.firestore.Timestamp.fromDate(
      new Date()
    ),
    likesCount: 0,
    sharedCount: 0,
  })
}

export const fetchLastZihts = () => {
  return db
    .collection("zihts")
    .orderBy("createdAt", "desc")
    .limit(10)
    .get()
    .then((snapshot) => {
      return snapshot.docs.map((doc) => {
        const data = doc.data()
        const { createdAt } = data
        return {
          ...data,
          id: doc.id,
          createdAt: +createdAt.toDate(),
        }
      })
    })
}

export const uploadImage = (file) => {
  const ref = firebase.storage().ref(`images/${file.name}`)
  // const ref = firebase
  //   .storage()
  //   .ref("images")
  //   .child(file.name)

  const task = ref.put(file)

  return task
}
