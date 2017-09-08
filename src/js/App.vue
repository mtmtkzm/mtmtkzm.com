<template>
  <div id="app">
    <div class="wave"></div>
    <div class="container">
      <main class="main">
        <activity></activity>
      </main>
    </div>
  </div>
</template>

<script>
  import activity from 'components/activity.vue';

  export default {
    name: 'App',
    components: {
      activity,
    },

  }
</script>
