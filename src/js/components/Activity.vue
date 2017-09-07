<template>
  <div class="activity">
    <div class="activity-nav">
      <h3>Activity</h3>
      <ul>
        <li><a href="">GitHub</a></li>
        <li><a href="">Qiita</a></li>
        <li><a href="">LIG BLOG</a></li>
        <li><a href="">Flickr</a></li>
        <li><a href="">CodePen</a></li>
      </ul>
    </div>
    <div class="activity-list js-activity js-fade-activity-list"></div>
  </div>
</template>

<script>
  import {mapGetters, mapActions} from 'vuex';

  export default {
    methods: {
      getActivitiesData (e) {
        this.$store.dispatch('getActivitiesData');
      }
    },
    created () {
      this.getActivitiesData();
    }
  }
</script>
