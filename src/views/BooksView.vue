<template>
  <div class="container py-5">
    <div v-for="book in books" :key="book.title" class="card mb-3 shadow-sm d-flex flex-row">
      <img :src="book.coverUrl" alt="Book Cover" class="card-img img-fluid" style="width: 200px; height: auto;">
      <div class="card-body d-flex flex-column justify-content-between align-items-start">
        <div class="text-start">
          <h4 class="card-title fs-1 mx-4 align-text-center">{{ book.title }}<button type="button" class="btn align-text-top"><img class="image-fluid" height="30" width="30" src=".././assets/star_outline.png"></button></h4> 
          <p class="card-text fs-4 mx-4">{{ book.author }}</p> 
          <p class="card-text mx-4">Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede mollis pretium. Integer tincidunt. Cras dapibu</p>
        </div>
        <div class="mx-4">
          <button type="button" class="btn btn-primary">Read</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { getDocs } from "firebase/firestore";
import { booksRef } from '@/main.js';

const querySnapshot = await getDocs(booksRef);
const books = [];
querySnapshot.forEach((doc) => {
  books.push({
    "author": doc.data()["Author"], 
    "title": doc.data()["Title"],
    "coverUrl": doc.data()["Cover_url"]
  });
});

export default {
  data() {
    return {
      books: books
    };
  },
};
</script>
