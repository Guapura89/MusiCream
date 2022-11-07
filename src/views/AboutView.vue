<template>
  <Header />
  <h1>Hello {{ name }}</h1>
</template>

<script>
import Header from "@/components/Header.vue";
export default {
  name: "AboutView",
  data() {
    return {
      name: "Carlos",
    };
  },
  components: {
    Header,
  },
};
</script>

<style lang="scss"></style>
