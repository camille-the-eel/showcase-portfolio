<template>
  <TheNav />
  <div class="flex-wrapper">
    <RouterView />
    <TheFooter />
  </div>
</template>

<script>
import { RouterView } from "vue-router";
import TheNav from "@/components/NavSection/TheNav.vue";
import TheFooter from "@/components/FooterSection/TheFooter.vue";

export default {
  name: "App",
  components: {
    RouterView,
    TheNav,
    TheFooter,
  },
};
</script>

<style>
@import "../src/assets/reset.css";
@import "../src/assets/base.css";
@import "../src/assets/app.css";
</style>
