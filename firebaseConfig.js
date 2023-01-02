import { initializeApp } from "firebase/app"
import Constants from "expo-constants"

// Optionally import the services that you want to use
// import {...} from "firebase/auth";
// import {...} from "firebase/database";
import { getFirestore } from "firebase/firestore"
// import {...} from "firebase/functions";
// import {...} from "firebase/storage";

const extra = Constants.manifest.extra

const firebaseConfig = {
  apiKey: extra.firebaseApiKey,
  authDomain: extra.firebaseAuthDomain,
  projectId: extra.firebaseProjectId,
  storageBucket: extra.firebaseStorageBucket,
  messagingSenderId: extra.firebaseMessageingSenderId,
  appId: extra.firebaseAppId,
  measurementId: extra.firebaseMeasurementId,
}

const app = initializeApp(firebaseConfig)
// For more information on how to access Firebase in your project,
// see the Firebase documentation: https://firebase.google.com/docs/web/setup#access-firebase

// Initialize Cloud Firestore and get a reference to the service
export const db = getFirestore(app)
