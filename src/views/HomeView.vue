<template>
  <div class="container mt-5">
    <div class="hero d-flex justify-content-center align-items-center">
      <div class="text-center animate__animated animate__fadeInDown">
        <h1 class="display-4 fw-bold mb-4">Bookshelf</h1>
        <p class="lead text-white">Explore a curated collection of public domain books!</p>
        <router-link class="btn btn-primary btn-lg" to="/books">Start Reading</router-link>
      </div>
    </div>

    <div class="about py-5 mt-5">
      <h2 class="text-center">About Bookshelf</h2>
      <div class="row justify-content-center">
        <div class="col-md-8">
          <p>Bookshelf is your gateway to a curated selection of public domain books. We offer a user-friendly platform to discover some timeless classics and hidden gems, completely free of charge. Start your literary adventure today!</p>
        </div>
      </div>
    </div>

    <div class="features py-5">
      <h2 class="text-center mb-4">What Bookshelf Offers</h2>
      <div class="row">
        <div class="col-md-4">
          <div class="card text-center h-100 py-4 animate__animated animate__fadeInUp">
            <i class="fas fa-book fa-3x"></i>
            <h3 class="card-title">Hand-Picked Collection</h3>
            <p class="card-text">Explore a curated selection of public domain books.</p>
          </div>
        </div>
        <div class="col-md-4">
          <div class="card text-center h-100 py-4 animate__animated animate__zoomIn">
            <i class="fas fa-search fa-3x"></i>
            <h3 class="card-title">Libraries</h3>
            <p class="card-text">Find the nearest library.</p>
          </div>
        </div>
        <div class="col-md-4">
          <div class="card text-center h-100 py-4 animate__animated animate__bounce">
            <i class="fas fa-bookmark fa-3x"></i>
            <h3 class="card-title">Progress Tracking</h3>
            <p class="card-text">Keep track of where you left off.</p>
          </div>
        </div>
      </div>
    </div>

    <div class="cta text-center py-2 mb-4">
      <router-link class="btn btn-lg btn-outline-primary" to="/books">Start Reading Now!</router-link>
    </div>
  </div>
</template>

<style scoped>
.hero {
  background-image: url(".././assets/books.jpg");
  background-size: cover;
  background-position: center;
  min-height: 400px;
  color: #fff;
}

.about {
  background-color: #f5f5f5;
}

.features .card {
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
}

/* Animations from Animate.css */
.animate__animated {
  animation-duration: 1s;
  animation-fill-mode: both;
}
</style>
