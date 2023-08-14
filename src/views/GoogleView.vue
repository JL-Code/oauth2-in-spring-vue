<template>
  <h1>Google Login</h1>
  <!-- <div
    id="g_id_onload"
    data-client_id="381022810268-fjlfjm16kn3pgm8slt9t51fpoati0kse.apps.googleusercontent.com"
    data-context="signin"
    data-ux_mode="popup"
    data-login_uri="https://w9pl7f-5173.csb.app/auth/callback"
    data-auto_prompt="false"
  ></div> -->
  <!-- <div
    class="g_id_signin"
    data-type="standard"
    data-shape="rectangular"
    data-theme="outline"
    data-text="signin_with"
    data-size="large"
    data-logo_alignment="left"
  ></div> -->
  <div id="google-login-btn"></div>
</template>

<script setup lang="ts">
import { ref, onMounted } from "vue";
const authResp = ref({});
onMounted(() => {
  var el: HTMLElement = document.getElementById("google-login-btn");
  console.log("el", el);
  console.log("google", google.accounts.id);
  google.accounts.id.initialize({
    client_id:
      "381022810268-fjlfjm16kn3pgm8slt9t51fpoati0kse.apps.googleusercontent.com",
    ux_mode: "redirect", // popup, redirect
    login_uri: "https://84nxsz-3000.csb.app/auth/callback",
    // callback: callbackFn,
  });
  google.accounts.id.renderButton(el, { type: "standard", theme: "outline" });
});

function callbackFn(response) {
  alert("google callback success");
  console.log("response", response);
}
</script>
