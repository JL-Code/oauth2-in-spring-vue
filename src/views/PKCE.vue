<template>
  <div>
    <h1>PKCE + Authorization Code Flow</h1>
    <button type="button" @click="oauth2Login">PKCE oauth2Login</button>
  </div>
</template>

<script setup lang="ts">
import { oauth2Login } from "./UserManager";
</script>
