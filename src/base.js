import Rebase from 're-base'
import firebase from 'firebase/app'
import 'firebase/database'

const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyDFnvK-Cf03PMMW_mAiD-zSLInR4gT0MsI",
    authDomain: "chatbox-57417.firebaseapp.com",
    databaseURL: "https://chatbox-57417.firebaseio.com",
})

const base = Rebase.createClass(firebase.database())

export { firebaseApp }

export default base