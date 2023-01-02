import * as dotenv from "dotenv"
dotenv.config()

module.exports = ({ config }) => {
  return {
    ...config,
    extra: {
      firebaseApiKey: process.env.FIREBASE_API_KEY,
      firebaseAuthDomain: process.env.FIREBASE_AUTH_DOMAIN,
      firebaseProjectId: process.env.FIREBASE_PROJECT_ID,
      firebaseStorageBucket: process.env.FIREBASE_STORAGEBUCKET,
      firebaseMessageingSenderId: process.env.FIREBASE_MESSAGINGSENDER_ID,
      firebaseAppId: process.env.FIREBASE_APP_ID,
      firebaseMeasurementId: process.env.FIREBASE_MEASUREMENT_ID,
      eas: {
        projectId: process.env.PROJECT_ID,
      },
    },
    owner: "john6",
  }
}
