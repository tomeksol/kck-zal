<template>
  <div class="View2">
    <vue-custom-scrollbar class="scroll-area" :settings="settings" @ps-scroll-y="scrollHanle">
      <h2>Przejdz do</h2>
      <nav>
        <router-link to="/View1">Widok 1</router-link>
      </nav>
      <HelloWorld msg="Welcome to Your Vue.js App"/>
    </vue-custom-scrollbar>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from "@/components/HelloWorld.vue";
import vueCustomScrollbar from "vue-custom-scrollbar";
export default {
  name: "View2",
  components: {
    HelloWorld,
    vueCustomScrollbar
  }
};
</script>
<style >
.scroll-area {
  position: relative;
  margin: auto;
  width: 600px;
  height: 600px;
}
</style>
