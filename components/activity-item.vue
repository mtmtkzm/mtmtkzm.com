<template>
  <transition-group
    name="activity-list__item"
    tag="div"
    :class="['activity-list', {'is-show': true}]"
  >
    <article
      v-for="(item, index) in activities"
      :key="index"
      :class="['activity-list__item', 'activity-list__item--'+item.type]"
    >

      <!-- Date (日付)-->
      <p v-if="item.type === 'date'">{{ item.date }}</p>

      <a
        v-if="item.type === 'github'"
        :href="item.url"
        target="_blank"
      >
        <img :src="`/svg/${item.type}.svg`">
        <h2>{{ item.title }}</h2>
        <p>{{ item.desc }}</p>
      </a>

      <a
        v-if="item.type === 'codepen'"
        :href="item.url"
        target="_blank"
      >
        <img :src="`/svg/${item.type}.svg`">
        <h2>{{ item.title }}</h2>
        <p>{{ item.desc }}</p>
      </a>

      <a
        v-if="item.type === 'qiita'"
        :href="item.url"
        target="_blank"
      >
        <img :src="`/svg/${item.type}.svg`">
        <h2>{{ item.title }}</h2>
        <p>{{ item.desc }}</p>
      </a>

      <a
        v-if="item.type === 'ligblog'"
        :href="item.url"
        target="_blank"
      >
        <img :src="`/svg/${item.type}.svg`">
        <h2>{{ item.title }}</h2>
        <p>{{ item.desc }}</p>
      </a>

      <a
        v-if="item.type === 'flickr'"
        :href="item.url"
        :style="'background-image: url('+ item.photo +')'"
        target="_blank"
      >
        <img :src="`/svg/${item.type}.svg`">
        <h2>{{ item.title }}</h2>
      </a>

      <a
        v-if="item.type === 'hatena'"
        :href="item.url"
        target="_blank"
      >
        <img :src="`/svg/${item.type}.svg`">
        <h2>{{ item.title }}</h2>
        <p>{{ item.desc }}</p>
      </a>

    </article>
  </transition-group>
</template>

<script>
  import {mapGetters} from 'vuex';
  export default {
    props: [
      'activities',
    ],
    computed: mapGetters({
      isLoaded: 'isLoaded',
    })
  }
</script>
