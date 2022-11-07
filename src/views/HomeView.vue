<template>
  <Header />
  <div class="home">
    <div class="container">
      <!-- Welcome container -->
      <div class="row wellcome__container">
        <div
          class="wellcome-item__container col-12 col-md-6 p-1 p-md-4 d-flex flex-column justify-content-center text-center"
        >
          <h1 class="fw-bold">Welcome to MusiCream</h1>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Odio
            cupiditate voluptatem, saepe rerum, molestiae perferendis earum
            inventore officia veniam laboriosam cumque facilis pariatur
            voluptate? Minus, doloremque. Officia, aperiam. Exercitationem
            reiciendis.
          </p>
        </div>
        <div
          class="wellcome-item__container col-12 col-md-6 d-flex justify-content-center text-center"
        >
          <div>
            <img class="w-75" src="../assets/images/listen.png" alt="listen" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Header from "../components/Header.vue";
export default {
  name: "HomeView",
  data() {
    return {};
  },
  components: {
    Header,
  },
};
</script>

<style scoped lang="scss">
.home {
  .wellcome__container {
    margin: 200px 0;
    .wellcome-item__container {
    }
  }
}
</style>
