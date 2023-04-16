import { getApp, getApps, initializeApp } from "firebase/app"
import { getFirestore } from "firebase/firestore"
import { getStorage } from "firebase/storage"

const firebaseConfig = {
    apiKey: "AIzaSyBFtzyIZP3UmfktSdAWN1C24sizqRjY88Q",
    authDomain: "food-dlvr.firebaseapp.com",
    databaseURL: "https://food-dlvr-default-rtdb.europe-west1.firebasedatabase.app",
    projectId: "food-dlvr",
    storageBucket: "food-dlvr.appspot.com",
    messagingSenderId: "901779887639",
    appId: "1:901779887639:web:6db71afc83d365c099ae52"
  };
  

  const app = getApps.length > 0 ? getApp() : initializeApp(firebaseConfig)

  const firestore = getFirestore(app)
  const storage = getStorage(app)

  export { app, firestore, storage }