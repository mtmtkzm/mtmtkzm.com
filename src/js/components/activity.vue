<template>
  <div class="activity">
    <div class="activity-nav">
      <h3>Activity</h3>
      <ul>
        <!--<li><a href="">GitHub</a></li>-->
        <li><a href="">Qiita</a></li>
        <li><a href="">LIG BLOG</a></li>
        <li><a href="">Flickr</a></li>
        <li><a href="">CodePen</a></li>
      </ul>
    </div>

    <activity-item :activities="activities"></activity-item>
  </div>
</template>

<script>
  import {mapGetters, mapActions} from 'vuex';
  import activityItem from './activity-item';

  export default {
    components: {
      activityItem,
    },
    methods: {
      getActivitiesData (e) {
        this.$store.dispatch('getActivitiesData');
      }
    },
    created () {
      this.getActivitiesData();
    },
    computed: mapGetters({
      activities: 'activities',
      isShowActivityList: true
    })
  }
</script>
