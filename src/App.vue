<template>
  <div id="app">
    <!--<img alt="Vue logo" src="./assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js App"/>-->
    <Header/>
    <Body/>
  </div>
</template>

<script>
import Header from './components/Header.vue'
import Body from './components/Body.vue'

export default {
  name: 'App',
  components: {
    Header,Body,
  }
}
</script>

<style>

</style>
