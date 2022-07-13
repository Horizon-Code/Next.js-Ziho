// $ npm install --save firebase-admin
const admin = require("firebase-admin")

const serviceAccount = require("./firebase-keys.json")

try {
  admin.initializeApp({
    credential: admin.credential.cert(serviceAccount),
  })
} catch (e) {
  console.error(e)
}

export const firestore = admin.firestore()
