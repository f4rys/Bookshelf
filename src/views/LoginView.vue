<template>
  <div class="container d-flex justify-content-center align-items-center vh-75 mt-5">
    <div class="card shadow-sm col-md-6">
      <div class="card-header pt-3">
        <h3>Login</h3>
      </div>
      <div class="card-body">
        <form @submit.prevent="handleSubmit">
          <div class="form-group my-3">
            <label for="username">Email</label>
            <input type="text" class="form-control mt-2" id="username" v-model="email" required>
          </div>
          <div class="form-group my-3">
            <label for="password">Password</label>
            <input type="password" class="form-control mt-2 mb-4" id="password" v-model="password" required>
          </div>
          <button type="submit" class="btn btn-primary">Login</button>
          <a href="/signup" class="btn btn-link"><router-link to="/signup">Sign up</router-link></a>
        </form>
          <a class="mt-3 btn btn-lg btn-google btn-block btn-outline align-text-center" @click="loginWithGoogle()"><img src="https://img.icons8.com/color/16/000000/google-logo.png"> LOGIN WITH GOOGLE</a>
      </div>
    </div>
  </div>
</template>

<script>
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { useToast } from "vue-toastification";
import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { usersRef } from '@/main.js';
import { doc, setDoc, getDoc } from 'firebase/firestore';

export default {
  name: 'LoginView',
  data() {
    return {
      email: '',
      password: '',
    };
  },
  methods: {
    async handleSubmit() {
      const auth = getAuth();
        signInWithEmailAndPassword(auth, this.email, this.password)
          .then(() => {
            const toast = useToast();
            toast.success("Login successful.");
            this.$router.push('/profile');
          })
          .catch((error) => {
            const toast = useToast();
            toast.error("Error while logging in: ", error);
          });
    },
    async loginWithGoogle(){
      const provider = new GoogleAuthProvider();
      const auth = getAuth();
      await signInWithPopup(auth, provider)
        .then(async (userCredential) => {
          const user = userCredential.user;
          const newUserDocRef = doc(usersRef, user.uid);

          await getDoc(newUserDocRef).then((doc) => {
                if (!doc.data()) {
                  setDoc(newUserDocRef, {
                      "Username": user.displayName,
                      "Favourite_books": [],
                      "Saved_progress": {}
                    })

                      .catch((error) => {
                        const toast = useToast();
                        toast.error("Logged in but user info not set correctly: ", error);
                      });
                }
                    const toast = useToast();
                    toast.success("Login successful!");
                    this.$router.push('/profile');
            })
        }).catch((error) => {
          console.log(error)
          const toast = useToast();
          toast.error("Error while logging in: ", error);
        });
    }
  },
};
</script>

<style>
.btn-google {
    color: #545454;
    background-color: #ffffff;
    box-shadow: 0 1px 2px 1px #ddd;
    border-radius: 2px;
    text-transform: capitalize;
    font-size: 15px;
    padding: 10px 19px;
    cursor: pointer
}
</style>