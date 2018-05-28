<template>
  <div class="activity">
    <Activity-item :activities="activities" />

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
  import {mapGetters} from 'vuex';
  import ActivityItem from '~/components/activity-item';

  export default {
    components: {
      ActivityItem,
    },
    created () {
      console.time('通信と整形にかかった時間：');
      this.$store.dispatch('getActivitiesData');
    },
    computed: mapGetters({
      activities: 'activities'
    })
  }
</script>
