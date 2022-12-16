import { initializeApp } from "firebase/app"
import { getFirestore } from "firebase/firestore"
import { config } from "./config"

const firebaseApp = initializeApp(config.firebase)
const firestore = getFirestore(firebaseApp)
export default firestore
