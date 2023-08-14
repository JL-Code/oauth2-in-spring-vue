<template>
  <div class="about">
    <h1>Auth Callback</h1>
  </div>
</template>
<script setup lang="ts">
import { onMounted } from "vue";
import { useRoute } from "vue-router";

import { userManager } from "../UserManager";

const route = useRoute();
onMounted(() => {
  // console.log("route query", route.query);
  userManager.signinCallback(window.location.href);
});
</script>
<style>
@media (min-width: 1024px) {
  .about {
    min-height: 100vh;
    display: flex;
    align-items: center;
  }
}
</style>
