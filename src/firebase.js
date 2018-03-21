import firebase from 'firebase/app'
import 'firebase/auth'
import 'firebase/database'
// Initialize Firebase
const config = {
  apiKey: "AIzaSyCP0Sn-vT0Qp60wQG_KFUFzI7n3JxbYgTI",
  authDomain: "todo-test-36b9a.firebaseapp.com",
  databaseURL: "https://todo-test-36b9a.firebaseio.com",
  projectId: "todo-test-36b9a",
  storageBucket: "",
  messagingSenderId: "933356674359"
}

export default firebase.initializeApp(config)
export const auth = firebase.auth()
export const db = firebase.database()