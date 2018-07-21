<template>
  <div>
    <Loading/>
    <div class="wave"></div>

    <main>
      <div class="contents">
        <Header/>
        <About/>
        <Activity :activities="activities"/>
        <Projects/>
      </div>

      <Footer/>
    </main>

  </div>
</template>

<script>
  import {mapGetters} from 'vuex';
  import Header from '~/components/common-header';
  import Footer from '~/components/common-footer';
  import About from '~/components/about';
  import Loading from '~/components/loading';
  import Activity from '~/components/activity';
  import Projects from '~/components/projects';

  export default {
    name: 'App',
    components: {
      Header,
      Footer,
      About,
      Loading,
      Activity,
      Projects
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

  main {
    position: relative;
  }

  .contents {
    background-color: $color-accent;
    position: absolute;
    top: 0;

    margin-bottom: 300px;
    z-index: 2;
  }
</style>
