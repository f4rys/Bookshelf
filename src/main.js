import { createApp } from 'vue'
import { initializeApp } from 'firebase/app'
import App from './App.vue'
import router from './router'
import 'bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'
import { getFirestore, collection } from 'firebase/firestore'
import { VueFire, VueFireAuth } from 'vuefire'
import Toast from "vue-toastification";
import "vue-toastification/dist/index.css";

export const firebaseApp = initializeApp({
    apiKey: "AIzaSyCT_KOnb23EtDhDKWmu-K2nt3B_RxccNLo",
    authDomain: "bookshelf-2c44f.firebaseapp.com",
    projectId: "bookshelf-2c44f",
    storageBucket: "bookshelf-2c44f.appspot.com",
    messagingSenderId: "916356885521",
    appId: "1:916356885521:web:cda0cfffafe67407a9d5b0",
    measurementId: "G-7WB07KJS2L"
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