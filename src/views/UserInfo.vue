<template>
  <div>
    <h1>UserInfo</h1>
    <p>{{ userinfo }}</p>
    <el-button type="button" @click="showIdToken">idToken</el-button>
    <el-button type="button" @click="getOAuth2Attributes">
      getOAuth2Attributes
    </el-button>
    <el-button type="button" @click="getOidcAttributes">getOidcAttributes</el-button>
    <el-button type="button" @click="oauth2Logout">oauth2Logout</el-button>
  </div>
</template>
  
  <script setup lang="ts">
import { onMounted, reactive } from "vue";
import { userManager, oauth2Logout } from "./UserManager";
import axios from "axios";

const userinfo = reactive({});

const showIdToken = async () => {
  const user = await userManager.getUser();
  console.log("user.id_token", user.id_token);
  alert(user.id_token);
};

const getOAuth2Attributes = async () => {
  const user = await userManager.getUser();
  axios
    .get("/api/oauth2/attributes", {
      headers: {
        Authorization: `Bearer ${user.access_token}`,
      },
    })
    .then((res) => {
      alert(JSON.stringify(res.data));
    });
};

const getOidcAttributes = async () => {
  const user = await userManager.getUser();
  axios
    .get("/api/oidc/attributes", {
      headers: {
        Authorization: `Bearer ${user.access_token}`,
      },
    })
    .then((res) => {
      console.log(JSON.stringify(res.data));
      alert(JSON.stringify(res.data));
    });
};

onMounted(async () => {
  const user = await userManager.getUser();
  console.log("user", user);
  Object.assign(userinfo, user || {});
});
</script>
  