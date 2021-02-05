<template>
  <div class="home">
      <router-link to="/">Login</router-link> |
        <router-link to="/signup">SignUp</router-link>
        <login-component v-if="isLoginActive"></login-component>
        <sign-up-component v-else></sign-up-component>
  </div>
</template>

<script>
// @ is an alias to /src
import LoginComponent from "@/components/LoginComponent.vue";
import SignUpComponent from "@/components/SignUpComponent.vue";


export default {
  name: "Home",
  data() {
      return {
          isLoginActive: Boolean
      }
  },
  components: {
    LoginComponent,
    SignUpComponent
  },
  created() {
    let path = window.location.pathname;
    console.log(window.location.pathname);
    if (path == '/') {
        this.isLoginActive = true;
    } else if (path == '/signup') {
        this.isLoginActive = false;
    }
  }
};
</script>
