<template>
  <div>
    <h1>UserInfo</h1>
    <p>{{ userinfo }}</p>
  </div>
</template>
  
  <script setup lang="ts">
import { onMounted, reactive } from "vue";
import { userManager } from "./UserManager";

const userinfo = reactive({});

onMounted(async () => {
  const user = await userManager.getUser();
  console.log("user", user);
  Object.assign(userinfo, user || {});
});
</script>
  