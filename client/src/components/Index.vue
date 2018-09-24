<template>
  <div id="index">
    <router-link to="/login">Login</router-link>
    <h1>Hello Index Page</h1>
  </div>
</template>

<script>
export default {
  name: 'index'
  // data: {
  //   msg: 'Welcome to Your Vue.js App'
  // }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
