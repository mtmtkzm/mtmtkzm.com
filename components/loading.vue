<template>
  <div class="loading" :class="{'is-loaded': isLoaded}"></div>
</template>

<script>
  import {mapGetters} from 'vuex';

  export default {
    computed: mapGetters([
      'isLoaded'
    ]),
    created() {
      // 毎度ローディングするために、はじめにfalse をセット
      this.$store.dispatch('setIsLoaded', false);
    }
  }
</script>

<style lang="scss" scoped>
  @import '../assets/css/setting';

  .loading {
    width: 100vw;
    height: 100vh;
    position: fixed;
    top: 0;
    left: 0;
    z-index: 99;
    background: $linear-gradient;
    transition: all .2s ease-in-out;
    opacity: 1;
    pointer-events: auto;

    &.is-loaded {
      opacity: 0;
      pointer-events: none;
    }
  }
</style>