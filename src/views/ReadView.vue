<template>
    <div class="container py-5">
        <h2>{{ book["Author"] }} - {{ book["Title"] }}</h2> 
    </div>
    <div style="height: 100vh">
        <vue-reader :url=epubUrl :epubInitOptions="{ openAs: 'epub' }" />
    </div>
</template>
  
<script>
import { booksRef } from '@/main.js';
import { usersRef } from '@/main.js';
import { getCurrentUser } from 'vuefire'
import { getDoc, doc } from 'firebase/firestore';
import { ref as storageRef } from 'firebase/storage'
import { useFirebaseStorage, useStorageFileUrl } from 'vuefire'
import { VueReader } from 'vue-reader'

const urlParams = new URLSearchParams(window.location.search);
const bookId = urlParams.get('bookId');

var user = await getCurrentUser();
const specificUserDocRef = doc(usersRef, user.uid);
// eslint-disable-next-line no-unused-vars
var userData;

await getDoc(specificUserDocRef)
    .then(docSnapshot => {
      if (docSnapshot.exists) {
        userData = docSnapshot.data();
      }
    });

const bookDocRef = doc(booksRef, bookId);
var bookData;

await getDoc(bookDocRef)
    .then(docSnapshot => {
      if (docSnapshot.exists) {
        bookData = docSnapshot.data();
      }
    });

export default {
    components:{
        VueReader
    },
  data() {
    return {
      book: bookData,
      epubUrl: null
    };
  },
  methods:{
    async getUrl(){
      const storage = useFirebaseStorage()
      const mountainFileRef = storageRef(storage, 'books/'+ bookId + ".epub")
      const {
      url,
      } = useStorageFileUrl(mountainFileRef)

      this.epubUrl = url
    }
  },
  beforeMount(){
    this.getUrl();
  }
};
</script>
  