<template>
  <nav class="navbar bg-secondary navbar-expand-lg">
    <div class="container-fluid">
      <router-link class="navbar-brand" to="/"
        ><h1 class="fw-bold">MusiCream</h1></router-link
      >
      <button
        class="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarNav"
        aria-controls="navbarNav"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarNav">
        <ul class="navbar-nav ms-auto me-4 align-items-center">
          <li class="nav-item mx-1">
            <router-link class="nav-link py-auto" to="/"
              ><h5 class="d-inline">Home</h5></router-link
            >
          </li>
          <li class="nav-item mx-1">
            <router-link class="nav-link" to="/about"
              ><h5 class="d-inline">About</h5></router-link
            >
          </li>
          <li class="nav-item mx-1">
            <router-link class="nav-link" to="/"
              ><h5 class="d-inline">Music</h5></router-link
            >
          </li>
          <li class="nav-item mx-1">
            <router-link class="nav-link disabled" to="/"
              ><img
                style="width: 40px"
                src="../assets/images/shopping-cart.png"
                alt="cart"
            /></router-link>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  name: "HeaderC",
};
</script>

<style scoped lang="scss"></style>
