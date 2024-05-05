<template>
  <div class="container d-flex justify-content-center align-items-center vh-75 mt-5">
    <div class="card shadow-sm col-md-6">
      <div class="card-header pt-3">
        <h3>Sign Up</h3>
      </div>
      <div class="card-body">
        <form @submit.prevent="handleSubmit">
          <div class="form-group my-3">
            <label for="username">Username</label>
            <input type="text" class="form-control mt-2" id="username" v-model="username" required>
          </div>
          <div class="form-group my-3">
            <label for="email">Email</label>
            <input type="email" class="form-control mt-2" id="email" v-model="email" required>
          </div>
          <div class="form-group my-3">
            <label for="password">Password</label>
            <input type="password" class="form-control mt-2" id="password" v-model="password" required>
          </div>
          <button type="submit" class="btn btn-primary">Sign Up</button>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
import { usersRef } from '@/main.js';
import { doc, setDoc } from 'firebase/firestore';
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { useToast } from "vue-toastification";

export default {
  name: 'SignupView',
  data() {
    return {
      username: '',
      email: '',
      password: '',
    };
  },
  methods: {
    handleSubmit() {
      const auth = getAuth();
      createUserWithEmailAndPassword(auth, this.email, this.password)
        .then((userCredential) => {
          const user = userCredential.user;
          const newUserDocRef = doc(usersRef, user.uid);

          setDoc(newUserDocRef, {
            "Username": this.username,
            "Favourite_books": [],
            "Saved_progress": []
          })
            .then(() => {
              const toast = useToast();
              toast.success("Signed up successfully!");
              this.$router.push('/profile');
            })
            .catch((error) => {
              const toast = useToast();
              toast.error("Signed up but user info not set correctly: ", error);
            });
          })
        .catch((error) => {
          const toast = useToast();
          toast.error("Error while signing up: ", error);
        });
    },
  },
};
</script>