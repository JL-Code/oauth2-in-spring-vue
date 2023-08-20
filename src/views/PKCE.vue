<template>
  <div>
    <h1>PKCE + Authorization Code Flow</h1>
    <el-button type="button" @click="oauth2Login">PKCE oauth2Login</el-button>
    <el-button type="button" @click="oauth2Logout">PKCE oauth2Logout</el-button>
  </div>
</template>

<script setup lang="ts">
import { oauth2Login,oauth2Logout } from "./UserManager";

</script>
