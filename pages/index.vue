<template>
  <div>
    <Loading/>
    <div class="wave"></div>

    <main class="contents">
      <About/>
      <Activity :activities="activities"/>
    </main>

  </div>
</template>

<script>
  import {mapGetters} from 'vuex';
  import About from '~/components/about';
  import Loading from '~/components/loading';
  import Activity from '~/components/activity';

  export default {
    name: 'App',
    components: {
      About,
      Loading,
      Activity,
    },
    computed: mapGetters([
      'isLoaded',
      'activities'
    ]),
    created () {
      this.$store.dispatch('getActivitiesData');
    },
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

    &.is-loaded {
      opacity: 0;
      pointer-events: none;
    }
  }

  .wave {
    position: absolute;
    width: 100vw;
    height: 100vh;
    overflow: hidden;
    transform: translate3d(0, 0, 0);
    z-index: 0;

    &::before {
      content: '';
      width: 500vw;
      height: 500vw;
      position: absolute;
      left: -200vw;
      bottom: calc(100vh - 250px);
      background: $linear-gradient;
      border-radius: 49% 47% 49% 47%;
      filter: blur(5px);

      animation: wave 60s infinite linear;
    }

    @keyframes wave {
      from {
        transform: rotate(0deg);
      }
      to {
        transform: rotate(360deg);
      }
    }

  }

</style>
