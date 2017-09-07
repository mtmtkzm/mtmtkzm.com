<template>
  <div id="app">
    <div class="wave"></div>
    <div class="container">
      <header></header>
      <main class="main">
        <activity></activity>
      </main>
      <footer>Footer</footer>
    </div>
  </div>
</template>

<script>
  import activity from 'components/Activity.vue';

  export default {
    name: 'App',
    components: {
      activity,
    }
  }
</script>
