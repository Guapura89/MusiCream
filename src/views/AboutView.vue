<template>
  <div class="w-100 text-center">
    <h1>Hello {{ name }}</h1>
  </div>
</template>

<script>
export default {
  name: "AboutView",
  data() {
    return {
      name: "Carlos",
    };
  },
};
</script>

<style lang="scss"></style>
