<template>
  <div id="app">
    <div id="nav">
      <!-- <LoginComponent></LoginComponent>       -->
    </div>
    <router-view :key="$route.path" />
  </div>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>

<script>
// import LoginComponent from '@/components/LoginComponent';
// export default {
//   components: {
//     LoginComponent
//   }
// }
</script>