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
import { getCurrentUser } from 'vuefire'
import { usersRef } from '@/main.js';
import { getDoc, doc } from 'firebase/firestore';

try{
  const user = await getCurrentUser()
  const specificUserDocRef = doc(usersRef, user.uid);

  var avatarUrl = '';
  var username = '';
  var email = '';

  await getDoc(specificUserDocRef)
    .then(docSnapshot => {
      if (docSnapshot.exists) {
        const userData = docSnapshot.data();
        avatarUrl = userData["Avatar_url"];
        username = userData["Username"];
        email = user.email
      }
    })
  }
  catch(error){
    console.log(error)
  }

export default {
  setup(){

  },
  data() {
    return {
      avatarUrl: avatarUrl,
      email: email,
      username: username,
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