import Rebase from 're-base'
import firebase from 'firebase/app'
import 'firebase/database'

const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyAOMAXHjp-5ro-kJJqAz4De_oDLsbxzGcI",
  authDomain: "recettes-app-b2a72.firebaseapp.com",
  databaseURL: "https://recettes-app-b2a72.firebaseio.com"
})

const base = Rebase.createClass(firebaseApp.database())

// This is a named export
export { firebaseApp }

// this is a default export
export default base
