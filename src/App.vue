<i18n>
  {
    "en": {
      "title": "@:company-name - yeee hawwww!!!"
    }
  }
</i18n>

<template>
  <div id="app">
    <header>
      <h1>
        {{$t('title')}}
      </h1>
    </header>
    <img src="./assets/logo.png">
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'app'
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
