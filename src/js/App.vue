<template>
  <div id="app">
    <div :class="['loading', {'is-loaded': isLoaded}]"></div>
    <div class="wave"></div>
    <div class="container">
      <main class="main">
        <activity></activity>
      </main>
    </div>
  </div>
</template>

<script>
  import {mapGetters, mapActions} from 'vuex';
  import activity from 'components/activity.vue';

  export default {
    name: 'App',
    components: {
      activity,
    },
    computed: mapGetters({
      isLoaded: 'isLoaded'
    })
  }
</script>
