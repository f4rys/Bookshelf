<template>
  <nav class="navbar navbar-expand-lg bg-primary">
    <div class="container-fluid">
      <div class="navbar-brand">
        <img src="./assets/logo.png" alt="Logo" width="30" height="24" class="d-inline-block align-text-top mx-3">
        <router-link class="app-name" to="/">BOOKSHELF</router-link>
      </div>
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
          <li class="nav-item">
            <div class="nav-link"><router-link to="/books">Books</router-link></div>
          </li>
          <li class="nav-item">
            <div class="nav-link"><router-link to="/libraries">Libraries</router-link></div>
          </li>
        </ul>
        <ul class="navbar-nav mb-2 mb-lg-0">
          <li class="nav-item dropdown">
            <div class="nav-link dropdown-toggle text-light" role="button" data-bs-toggle="dropdown" aria-expanded="false">Account</div>
            <ul class="dropdown-menu" data-bs-theme="dark">
              <li><div class="dropdown-item"><router-link to="/profile">Profile</router-link></div></li>
              <li><div class="dropdown-item"><router-link to="/shelf">Your shelf</router-link></div></li>
              <li><div class="dropdown-item">Log out</div></li>
            </ul>
          </li>
          <li class="nav-item">
            <div class="nav-link"><router-link to="/login">Log in</router-link></div>
          </li>
        </ul>
      </div>
    </div>
  </nav>

  <router-view/>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  padding: 30px;
  background-color: #ffdc40;
  color: rgb(255, 255, 255);
}

nav a {
  text-decoration: none;
  color: rgb(255, 255, 255);
}

.app-name {
  font-family: "Lucida Console", "Courier New", monospace;
}

.nav-link:hover {
  transform: scale(1.05);
}

</style>
