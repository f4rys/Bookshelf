<template>
  <div class="container d-flex justify-content-center align-items-center vh-75 mt-5">
    <div class="card shadow-sm col-md-6">
      <div class="card-header pt-3">
        <h3>Login</h3>
      </div>
      <div class="card-body">
        <form @submit.prevent="handleSubmit">
          <div class="form-group my-3">
            <label for="username">Username or Email</label>
            <input type="text" class="form-control mt-2" id="username" v-model="email" required>
          </div>
          <div class="form-group my-3">
            <label for="password">Password</label>
            <input type="password" class="form-control mt-2 mb-4" id="password" v-model="password" required>
          </div>
          <button type="submit" class="btn btn-primary">Login</button>
          <a href="/signup" class="btn btn-link"><router-link to="/signup">Sign up</router-link></a>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { useToast } from "vue-toastification";

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
          // eslint-disable-next-line no-unused-vars
          .catch((error) => {
            const toast = useToast();
            toast.success("Error while logging in.");
          });
    },
  },
};
</script>