import Rebase from 're-base'
import firebase from 'firebase/app'
import 'firebase/database'

const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyBiK04sdQjGPYSG0Kn1M1pVeMCQmMWrhf0",
  authDomain: "recettes-app-b9577.firebaseapp.com",
  databaseURL: "https://recettes-app-b9577.firebaseio.com"
})

const base = Rebase.createClass(firebaseApp.database())

// This is a named export
export { firebaseApp }

// this is a default export
export default base
