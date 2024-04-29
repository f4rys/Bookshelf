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
          <div class="form-group my-3">
            <label for="confirmPassword">Confirm Password</label>
            <input type="password" class="form-control mt-2" id="confirmPassword" v-model="confirmPassword" required>
          </div>
          <button type="submit" class="btn btn-primary">Sign Up</button>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'SignupView',
  data() {
    return {
      username: '',
      email: '',
      password: '',
      confirmPassword: '',
      agreeToTerms: false,
    };
  },
  methods: {
    handleSubmit() {
      // Implement your signup logic here
      // This could involve making an API call to your backend to create a new user
      console.log('Submitting signup form:', this.username, this.email, this.password);
    },
  },
};
</script>

<style scoped>
  /* Add custom styles here to match your desired design */
</style>
