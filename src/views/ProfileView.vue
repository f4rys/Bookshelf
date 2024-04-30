<template>
  <div class="container d-flex justify-content-center align-items-center vh-75 mt-5">
    <div class="card shadow-sm col-md-10">
      <div class="card-body text-center">
        <div class="d-flex justify-content-center mb-3">
          <img :src="avatarUrl" class="rounded-circle img-thumbnail" style="width: 150px; height: 150px;">
        </div>
        <div class="d-flex justify-content-around mb-3">
          <button class="btn btn-primary" @click="changeAvatarFromDevice">Change Photo</button>
        </div>
        <p>Username: {{ username }}</p>
        <p>Email: {{ email }}</p>
        <router-link class="btn btn-secondary" to="/shelf">Go to Your Shelf</router-link>
      </div>
    </div>
  </div>
</template>

<script>
import { useCurrentUser } from 'vuefire'
import { usersRef } from '@/main.js';
import { getDoc, doc } from 'firebase/firestore';

try{
  const user = useCurrentUser();
  console.log(user.uid)

  const specificUserDocRef = doc(usersRef, user.uid);

  getDoc(specificUserDocRef)
    .then(docSnapshot => {
      if (docSnapshot.exists) {
        const userData = docSnapshot.data();
        // Use the fetched user data
        console.log(userData);
      } else {
        // Document not found
      }
    })
    .catch(error => {
      console.error("Error fetching user doc:", error);
    });
  }
  catch(error){
    console.log(error)
  }

export default {
  data() {
    return {
      avatarUrl: '', // Replace with default avatar path
      email: 'email@example.com',
      username: 'JohnDoe93'
    };
  },
  methods: {
    changeAvatarFromDevice() {
      // Implement logic to open file selection dialog and update avatarUrl
      const fileInput = document.createElement('input');
      fileInput.type = 'file';
      fileInput.accept = 'image/*';
      fileInput.addEventListener('change', (event) => {
        const reader = new FileReader();
        reader.onload = (e) => {
          this.avatarUrl = e.target.result;
          // Implement logic to upload image to server (if needed)
        };
        reader.readAsDataURL(event.target.files[0]);
      });
      fileInput.click();
    },
  },
};
</script>