<template>
  <div>
    <h1>OAuth2 in Spring</h1>
    <button type="button" @click="login">PKCE Login</button>
  </div>
</template>

<script setup lang="ts">
import pkceChallenge from "pkce-challenge";

const login = () => {
  generateUri().then((uri: string) => {
    window.location.href = uri;
  });
};

// function generateUri() {
//   return new Promise((resolve: (uri: string) => void) => {
//     pkceChallenge().then((pkce) => {
//       localStorage.setItem("pkce_code_verifier", pkce.code_verifier);
//       let uri = `http://localhost:9000/oauth2/authorize?client_id=public-client&response_type=code&code_challenge=
// ${pkce.code_challenge}&code_challenge_method=S256&redirect_uri=https%3A%2F%2Fw9pl7f-5173.csb.app%2Foauth2%2Fvue3`;
//       resolve(uri);
//     });
//   });
// }
const redirectUri = "https://w9pl7f-5173.csb.app/pkce";
const baseUrl = "http://localhost:9000";
async function generateUri() {
  const pkce = await pkceChallenge();
  localStorage.setItem("pkce_code_verifier", pkce.code_verifier);
  let uri = `${baseUrl}/oauth2/authorize?client_id=public-client&response_type=code&code_challenge=
${
  pkce.code_challenge
}&code_challenge_method=S256&redirect_uri=${encodeURIComponent(redirectUri)}`;

  return uri;
}
</script>
