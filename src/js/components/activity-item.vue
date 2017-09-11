<template>
  <transition-group
    name="activity-list__item"
    tag="div"
    :class="['activity-list', {'is-show': isLoaded}]"
  >
    <article v-for="activity in activities"
             key="activity"
             :class="['activity-list__item', 'activity-list__item--'+activity.type]">
      <!-- Date (日付)-->
      <p v-if="activity.type === 'date'">{{ activity.date }}</p>
      <!-- GitHub -->
      <a v-if="activity.type === 'github'" :href="activity.url" target="_blank">
        <img :src="'./assets/svg/'+activity.type+'.svg'">
        <h2>{{ activity.title }}</h2>
        <p>{{ activity.desc }}</p>
      </a>
      <!-- CodePen -->
      <a v-if="activity.type === 'codepen'" :href="activity.url" target="_blank">
        <img :src="'./assets/svg/'+activity.type+'.svg'">
        <h2>{{ activity.title }}</h2>
        <p>{{ activity.desc }}</p>
      </a>
      <!-- Qiita -->
      <a v-if="activity.type === 'qiita'" :href="activity.url" target="_blank">
        <img :src="'./assets/svg/'+activity.type+'.svg'">
        <h2>{{ activity.title }}</h2>
        <p>{{ activity.desc }}</p>
      </a>
      <!-- LIG BLOG -->
      <a v-if="activity.type === 'ligblog'" :href="activity.url" target="_blank">
        <img :src="'./assets/svg/'+activity.type+'.svg'">
        <h2>{{ activity.title }}</h2>
        <p>{{ activity.desc }}</p>
      </a>
      <!-- Flickr -->
      <a v-if="activity.type === 'flickr'"
         :href="activity.url"
         :style="'background-image: url('+ activity.photo +')'"
         target="_blank">
        <img :src="'./assets/svg/'+activity.type+'.svg'">
        <h2>{{ activity.title }}</h2>
      </a>
      <!-- HatenaBlog -->
      <a v-if="activity.type === 'hatena'" :href="activity.url" target="_blank">
        <img :src="'./assets/svg/'+activity.type+'.svg'">
        <h2>{{ activity.title }}</h2>
        <p>{{ activity.desc }}</p>
      </a>
    </article>
  </transition-group>
</template>

<script>
  import {mapGetters, mapActions} from 'vuex';
  export default {
    props: [
      'activities',
    ],
    computed: mapGetters({
      isLoaded: 'isLoaded',
    })
  }
</script>
