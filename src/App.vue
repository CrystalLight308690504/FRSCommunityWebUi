<template>
  <div id="app">
    <navigation v-bind:user="user" v-on:setUser="user = $event"/>
    <router-view name="contents"></router-view>
  </div>
</template>
<script>
  export default {
    data(){
      return {
        user:this.$store.state.user,
      }

    },
    watch:{
      user:function(newval,olval){
        console.log("老值" + olval);
        console.log("新值" + newval);
      }
    }
  }
</script>
<style>
body {
  padding: 0;
  margin: 0;
}

:root {
  --color-basis: #409EFF;
}

a {
  text-decoration: none;
  color: var(--color-basis);
  cursor: pointer;
}
</style>
