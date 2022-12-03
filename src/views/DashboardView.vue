<template>
  <div class="bg-dark dash-header d-flex align-items-center">
    <div class="container">
      <div class="dash-nav">
        <div class="text-center fw-bold text-white">
          <h1>MusiCream Dashboard</h1>
        </div>
      </div>
    </div>
  </div>
  <div class="container">
    <div class="row my-4">
      <div class="col-12 col-lg-6 my-3">
        <div class="text-center">
          <h3>New user history</h3>
        </div>
        <LineBar />
      </div>
      <div class="col-12 col-lg-6 my-3">
        <div class="text-center">
          <h3>Sold albums</h3>
          <BarView />
        </div>
      </div>
    </div>
    <div class="row my-5">
      <div class="col-12 col-lg-6 mx-auto">
        <div class="text-center">
          <h3>Most visited artists</h3>
        </div>
        <DoughnutView />
      </div>
    </div>
  </div>
</template>

<script>
import BarView from "@/components/BarView.vue";
import LineBar from "./../components/LineBar.vue";
import DoughnutView from "@/components/DoughnutView.vue";
export default {
  name: "DashboardView",
  data() {
    return {};
  },
  components: {
    LineBar,
    BarView,
    DoughnutView,
  },
};
</script>

<style scoped lang="scss">
.dash-header {
  height: 100px;
}
</style>
