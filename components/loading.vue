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
</style>