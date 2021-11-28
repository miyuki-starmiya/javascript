<template>
  <div id="app">
    <img alt="ichigo" src="./assets/ichigo02.jpg" id="top-image">
    <Home />
  </div>
</template>

<script>
import Home from './pages/Home.vue'

export default {
  name: 'App',
  components: {
    Home,
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

#top-image {
  max-width: 500px;
}
</style>
