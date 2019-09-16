<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
<template>
  <div id="app">
    <div id="nav">
      <router-link to="/View1">Widok 1</router-link>|
      <router-link to="/View2">Widok 2</router-link>
    </div>
    <router-view/>
  </div>
</template>
