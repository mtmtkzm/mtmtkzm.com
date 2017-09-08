<template>
  <div class="activity-list js-activity js-fade-activity-list">
    <article v-for="activity in activities"
             :class="['activity-list__item',
                       'activity-list__item--'+activity.type,
                       'js-fade-activity-list-item',
                       {'is-show': true} ]">

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
         target="_blank"
         :style="'background-image: url('+ activity.photo +')'"
      >
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
  </div>
</template>

<script>
  export default {
    props: [
      'activities',
    ],
  }
</script>
