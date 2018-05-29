<template>
  <div>
    <div :class="['loading', {'is-loaded': isLoaded}]"></div>
    <div class="wave"></div>


    <main class="contents">

      <About/>
      <div>
        <h2 class="heading2">My activities on the Web</h2>
        <Activity :activities="activities"/>
      </div>

    </main>
  </div>
</template>

<script>
  import {mapGetters} from 'vuex';
  import About from '~/components/about';
  import Activity from '~/components/activity';

  export default {
    name: 'App',
    components: {
      About,
      Activity,
    },
    computed: mapGetters({
      isLoaded: 'isLoaded',
      activities: 'activities'
    }),
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
    background-color: beige;
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
    transform: translate3d(0, 0, 0) scale(1.01);
    z-index: 0;
    filter: blur(5px);

    &::before {
      content: '';
      width: 700vw;
      height: 700vw;
      position: absolute;
      left: -300vw;
      bottom: calc(100vh - 250px);
      background: linear-gradient(40deg, #4EF980, #34C5EC);
      border-radius: 49% 48% 49% 48%;
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
