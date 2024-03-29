import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore"

const firebaseConfig = {
  apiKey: process.env.REACT_APP_API_KEY,
  authDomain: process.env.REACT_APP_AUTH_DOMAIN,
  projectId: process.env.REACT_APP_PROJECT_ID,
  storageBucket: process.env.REACT_APP_STORAGE_BUCKET,
  messagingSenderId: process.env.REACT_APP_MESSAGING_SENDER_ID,
  appId: process.env.REACT_APP_APP_ID
};

// Initialize Firebase
const app = initializeApp(firebaseConfig)
const auth = getAuth(app);
const db = getFirestore(app);

const id = () => {
  let id = ''
  const chars = 'abcdefghijklmnopqrstuvwxyz0123456789'
  for (let index = 0; index < 10; index++) {
    id += chars[Math.floor(Math.random() * chars.length)]

  }
  return id
}

const converter = (num, sign) => {
 
  let result = num.toFixed(2)
  sign === '.' ? result = result : result = result.replace('.', ',')
  return result
}

export {
  converter,
  auth,
  id,
  db
}