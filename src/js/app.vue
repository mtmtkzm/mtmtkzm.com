<template>
  <div id="app">
    <h1>{{msg}}</h1>
  </div>
</template>

<script>
  export default {
    name: 'app',
    data () {
      return {
        msg: 'Welcome to Your Vue.js App'
      }
    }
  }
</script>
<style lang="scss">
  #app {

    h1 {
      color: red;
    }

  }

  :local {

    .baz {
      color: #f00;

      p {
        font-size: 20px;
      }
    }

  }
</style>
<style lang="scss" scoped>
  #app {
    text-align: center;

  }
</style>


