<template>
  <div id="app">
    <div :class="['loading', {'is-loaded': isLoaded}]"></div>
    <div class="wave"></div>
    <div class="container">
      <main class="main">
        <Activity />
      </main>
    </div>
  </div>
</template>

<script>
  import {mapGetters} from 'vuex';
  import Activity from '~/components/activity';

  export default {
    name: 'App',
    components: {
      Activity,
    },
    computed: mapGetters({
      isLoaded: 'isLoaded'
    })
  }
</script>
