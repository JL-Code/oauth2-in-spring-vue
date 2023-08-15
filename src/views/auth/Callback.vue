<template>
  <div class="about">
    <h1>Auth Callback</h1>
    <router-link to="/pkce">返回</router-link>
  </div>
</template>
<script setup lang="ts">
import { onMounted } from "vue";
import { useRouter } from "vue-router";
import { userManager } from "../UserManager";

const router = useRouter();

userManager.events.addUserSignedIn(() => {
  alert("addUserSignedIn 用户登录成功");
});

userManager.events.addUserSessionChanged(() => {
  alert("addUserSessionChanged 用户登录成功");
});
// 这个事件会在用户加载时触发。
userManager.events.addUserLoaded(() => {
  alert("addUserLoaded 用户登录成功");
  router.push("/userinfo");
});

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
