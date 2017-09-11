<template>
  <div class="activity">
    <h3>Activity</h3>
    <activity-item :activities="activities"></activity-item>
    <div class="activity-nav">
      <p>View more on</p>
      <ul>
        <li>github</li>
        <li>qiita</li>
        <li>codepen</li>
        <li>ligblog</li>
      </ul>
    </div>
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
      getActivitiesData () {
        console.time('通信と整形にかかった時間：');
        this.$store.dispatch('getActivitiesData');
      }
    },
    created () {
      this.getActivitiesData();
    },
    computed: mapGetters({
      activities: 'activities'
    })
  }
</script>
