<template>
  <div class="container d-flex justify-content-center align-items-center vh-75 mt-5">
    <div class="card shadow-sm col-10">
      <div class="card-body text-center">
        <div class="d-flex justify-content-center mb-3">
          <img :src="avatarUrl" class="rounded-circle img-thumbnail" style="width: 150px; height: 150px;">
        </div>
        <div class="d-flex justify-content-around mb-3">
          <button class="btn btn-primary" @click="changeAvatarFromDevice">Change Photo</button>
        </div>
        <p>Username: {{ username }}</p>
        <p>Email: {{ email }}</p>
      </div>
    </div>
  </div>
</template>

<script>
import { getCurrentUser } from 'vuefire'
import { usersRef } from '@/main.js';
import { getDoc, doc } from 'firebase/firestore';
import { ref as storageRef } from 'firebase/storage'
import { useFirebaseStorage, useStorageFile, useStorageFileUrl } from 'vuefire'

try{
  var user = await getCurrentUser()
  const specificUserDocRef = doc(usersRef, user.uid);

  var avatarUrl = '';
  var username = '';
  var email = '';
  const storage = useFirebaseStorage()

  const mountainFileRef = storageRef(storage, 'avatars/'+user.uid+'.jpg')
  const {
    url,
  } = useStorageFileUrl(mountainFileRef)

  avatarUrl = url

  await getDoc(specificUserDocRef)
    .then(docSnapshot => {
      if (docSnapshot.exists) {
        const userData = docSnapshot.data();
        username = userData["Username"];
        email = user.email
      }
    })
  }
  catch(error){
    console.log(error)
  }

export default {
  data() {
    return {
      user: user,
      avatarUrl: avatarUrl,
      email: email,
      username: username,
    };
  },
  methods: {
    async changeAvatarFromDevice() {
      const fileInput = document.createElement('input');
      fileInput.type = 'file';
      fileInput.accept = 'image/*';
      fileInput.addEventListener('change', (event) => {
        const reader = new FileReader();
        reader.onload = (e) => {
            this.avatarUrl = e.target.result;
        };
        reader.readAsDataURL(event.target.files[0]);
        const storage = useFirebaseStorage()
            const mountainFileRef = storageRef(storage, 'avatars/'+this.user.uid+'.jpg')
            const {
                upload,
              } = useStorageFile(mountainFileRef)
            
            console.log(this.avatarUrl)
        upload(event.target.files[0])
      });
      fileInput.click();
    },
  },
};
</script>