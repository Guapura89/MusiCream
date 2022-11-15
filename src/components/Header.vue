<template>
  <nav
    class="navbar navbar-expand-lg navbar-dark"
    style="position: absolute; width: 100%; z-index: 2"
  >
    <div class="container">
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
              ><h5 class="d-inline fw-bold">Home</h5></router-link
            >
            <p @click="scrollToBottom">hello</p>
          </li>

          <li class="nav-item mx-1">
            <router-link class="nav-link" to="##albums-title1"
              ><h5 class="d-inline fw-bold">Music</h5></router-link
            >
          </li>

          <li class="nav-item mx-1">
            <router-link class="nav-link" to="/"
              ><h5 class="d-inline fw-bold">About</h5></router-link
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
//import AppVue from "@/App.vue";
import HomeView from "@/views/HomeView.vue";
export default {
  name: "HeaderC",
  data() {
    return {};
  },
  components: {
    // eslint-disable-next-line vue/no-unused-components
    HomeView,
  },
  methods: {
    scrollToBottom() {
      HomeView.$refs["albums-title-1"].scrollIntoView({ behavior: "smooth" });
    },
  },
};
</script>

<style scoped lang="scss"></style>
