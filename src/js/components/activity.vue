<template>
  <div class="activity">
    <div class="activity-nav">
      <h3>Activity</h3>
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
