<template>
  <div id="app">
    <div :class="['loading', {'is-loaded': isLoaded}]"></div>
    <div class="wave"></div>
    <div class="container">
      <main class="main">

        <!--<activity></activity>-->
      </main>
    </div>
  </div>
</template>

<script>
  import {mapGetters} from 'vuex';
  // import activity from 'components/activity';

  export default {
    name: 'App',
    components: {
      // activity,
    },
    computed: mapGetters({
      isLoaded: 'isLoaded'
    })
  }
</script>
