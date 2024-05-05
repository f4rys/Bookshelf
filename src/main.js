import { createApp } from 'vue'
import { initializeApp } from 'firebase/app'
import App from './App.vue'
import router from './router'
import './registerServiceWorker'
import 'bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'
import { getFirestore, collection } from 'firebase/firestore'
import { VueFire, VueFireAuth } from 'vuefire'
import Toast from "vue-toastification";
import "vue-toastification/dist/index.css";

export const firebaseApp = initializeApp({
    apiKey: "AIzaSyDEPKlqj6wIO8Vz4OHIrdCkaFYEbopqDKc",
    authDomain: "bookapp-302e2.firebaseapp.com",
    projectId: "bookapp-302e2",
    storageBucket: "bookapp-302e2.appspot.com",
    messagingSenderId: "254959568814",
    appId: "1:254959568814:web:54863ac7805fdbd7576a3f"
})

const db = getFirestore(firebaseApp)
export var booksRef = collection(db, 'Books')
export var usersRef = collection(db, 'Users')
export var storesRef = collection(db, 'Bookstores')

createApp(App)
    .use(router)
    .use(VueFire, {
        firebaseApp,
        modules: [
        VueFireAuth(),
        ],
    })
    .use(Toast)
    .mount('#app')