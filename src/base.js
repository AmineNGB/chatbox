import Rebase from 're-base'
import firebase from 'firebase/app'
import 'firebase/database'

const apiKey = process.env.REACT_APP_CHAT_KEY

const firebaseApp = firebase.initializeApp({
    apiKey: apiKey,
    authDomain: "chatbox-57417.firebaseapp.com",
    databaseURL: "https://chatbox-57417.firebaseio.com",
})

const base = Rebase.createClass(firebase.database())

export { firebaseApp }

export default base