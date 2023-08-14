<template>
  <h1>Facebook JSSDK Method Login</h1>
  <!-- <div id="fb-root"></div> -->
  <!-- FB 登录按钮容器，内部会自动嵌入一个 iframe -->
  <!-- <div
    class="fb-login-button"
    data-width="Facebook"
    data-size="large"
    data-button-type=""
    data-layout="default"
    data-auto-logout-link="false"
    data-use-continue-as="false"
  ></div> -->
  <button type="button" @click="login">login</button>
  <button type="button" @click="logout">logout</button>
</template>

<script setup lang="ts">
import { ref, onMounted } from "vue";
const accessToken = ref("");
onMounted(() => {
  // setTimeout(() => {
  //   FB.getLoginStatus(function (response) {
  //     console.log("getLoginStatus");
  //     statusChangeCallback(response);
  //   });
  // }, 3000);
  // FB.init({
  //   appId: "6564974263560642", // gamuesd test 590325646345784 // gameusd 6564974263560642
  //   autoLogAppEvents: true,
  //   xfbml: true,
  //   version: "v17.0",
  // });
});

function statusChangeCallback(response) {
  console.log("login status response", response);
}

function login() {
  FB.login(function (response) {
    // handle the response
    console.log(response);
    if (response.authResponse) {
      alert("登录成功");
      localStorage.setItem("fb-token", response.authResponse.accessToken);
    }
  });
}
function logout() {
  var token = localStorage.getItem("fb-token");
  FB.logout(function (response) {
    // user is now logged out
    console.log(response);
    alert("退出成功");
  });
}
</script>
