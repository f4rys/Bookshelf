import { createApp } from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import 'bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'
import { initializeApp } from 'firebase/app'
import { getFirestore, collection } from 'firebase/firestore'
import { VueFire, VueFireAuth } from 'vuefire'

export const firebaseApp = initializeApp({
    apiKey: "AIzaSyDEPKlqj6wIO8Vz4OHIrdCkaFYEbopqDKc",
    authDomain: "bookapp-302e2.firebaseapp.com",
    projectId: "bookapp-302e2",
    storageBucket: "bookapp-302e2.appspot.com",
    messagingSenderId: "254959568814",
    appId: "1:254959568814:web:54863ac7805fdbd7576a3f"
})

const db = getFirestore(firebaseApp)
export const booksRef = collection(db, 'Books')
export const usersRef = collection(db, 'Users')
export const storesRef = collection(db, 'Bookstores')

createApp(App).use(router).use(VueFire, {
    firebaseApp,
    modules: [
      VueFireAuth(),
    ],
  }).mount('#app')