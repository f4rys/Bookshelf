<template>
  <div class="container py-5">
    <div v-for="book in books" :key="book.title" class="card mb-3 shadow-sm d-flex flex-column">
      <div class="d-flex flex-row align-items-center">
        <img :src="book.coverUrl" alt="Book Cover" class="card-img img-fluid" style="width: 200px; height: auto;">
        <div class="card-body d-flex flex-column justify-content-between align-items-start">
          <div class="text-start">
            <h4 class="card-title fs-1 mx-4 align-text-center">{{ book.title }}
              <button type="button" class="btn align-text-top" @click="updateFavourite(book)">
                <div v-if="user">
                  <img v-if="book.isFavourite" class="image-fluid" height="30" width="30" src=".././assets/star.png">
                  <img v-if="!book.isFavourite" class="image-fluid" height="30" width="30" src=".././assets/star_outline.png">
                </div>
              </button>
            </h4>
            <p class="card-text fs-4 mx-4">{{ book.author }}</p>
          </div>
        </div>
      </div>
      <hr class="my-3">  <div class="card-body">
        <p class="card-text mx-4">{{ book.synopsis }}</p>
        <div class="mx-4">
          <button v-if="!book.isSaved" type="button" class="btn btn-primary" @click="openBook(book.id)">Read</button>
          <button v-if="book.isSaved" type="button" class="btn btn-primary" @click="openBook(book.id)">Continue reading</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { getDocs, getDoc, doc, updateDoc, arrayUnion, arrayRemove } from "firebase/firestore";
import { booksRef, usersRef } from '@/main.js';
import { getCurrentUser } from 'vuefire'

var user = await getCurrentUser();
var specificUserDocRef;

var userData;
var userSavedProgress = {};
var userFavourites = [];
var books = [];

if(user){
  specificUserDocRef = doc(usersRef, user.uid);

  await getDoc(specificUserDocRef)
    .then(docSnapshot => {
      if (docSnapshot.exists) {
        userData = docSnapshot.data();
      }
    });

  userSavedProgress = userData["Saved_progress"]
  userFavourites = userData["Favourite_books"];
}

const querySnapshot = await getDocs(booksRef);
querySnapshot.forEach((doc) => {
  var isFavourite;
  var isSaved;
  if(userFavourites.includes(doc.id)){
    isFavourite = true
  }
  if(doc.id in userSavedProgress){
    isSaved = true
  }
  books.push({
    "id": doc.id,
    "author": doc.data()["Author"], 
    "title": doc.data()["Title"],
    "synopsis": doc.data()["Synopsis"],
    "coverUrl": doc.data()["Cover_url"],
    "isFavourite": isFavourite,
    "isSaved": isSaved
  });
});

export default {
  data() {
    return {
      books: books,
      user: user
    };
  },
  methods:{
    async updateFavourite(book){
      if(!book.isFavourite){
        await updateDoc(specificUserDocRef, {
        Favourite_books: arrayUnion(book.id),
        }).catch(error => {
        console.log(error);
        });
        book.isFavourite = true
        navigator.vibrate(500);
      }
      else{
        await updateDoc(specificUserDocRef, {
        Favourite_books: arrayRemove(book.id)
        }).catch(error => {
        console.log(error);
        });
        book.isFavourite = false
        navigator.vibrate(500);
      }
    },
    openBook(id){
      const url = new URL(window.location.origin +'/read');
      const searchParams = new URLSearchParams({"bookId": id});
      url.search = searchParams.toString();
      window.location.href = url.toString();
    }
  }
};
</script>