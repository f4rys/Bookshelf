<template>
    <div style="height: 100vh">
        <vue-reader :title=book.title @update:location="locationChange" :location=page :url=epubUrl :epubInitOptions="{ openAs: 'epub' }" />
    </div>
</template>

<script>
import { booksRef, usersRef } from '@/main.js';
import { getDoc, doc, updateDoc } from 'firebase/firestore';
import { ref as storageRef } from 'firebase/storage'
import { getCurrentUser, useFirebaseStorage, useStorageFileUrl } from 'vuefire'
import { VueReader } from 'vue-reader'

const urlParams = new URLSearchParams(window.location.search);
const bookId = urlParams.get('bookId');

var user = await getCurrentUser();
var specificUserDocRef;
var page = 0;

if(user){
  specificUserDocRef = doc(usersRef, user.uid);

await getDoc(specificUserDocRef)
    .then(async docSnapshot => {
      console.log(docSnapshot)
      if (docSnapshot.exists) {
        var userData = docSnapshot.data();
        if(userData["Saved_progress"][bookId]){
          page = userData["Saved_progress"][bookId]
        }
        else{
          await updateDoc(specificUserDocRef, {
            [`Saved_progress.${bookId}`]: 0
          });
        }
      }
    });
}

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
      epubUrl: null,
      page: page
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
    },
    async locationChange(epubcifi) {
      if(user){
        await updateDoc(specificUserDocRef, {
           [`Saved_progress.${bookId}`]: epubcifi
          });
        }
    }
  },
  beforeMount(){
    this.getUrl();
  }
};
</script>
  