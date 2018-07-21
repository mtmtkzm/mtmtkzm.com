<template>
  <section class="container">
    <transition-group
      :class="['activity', {'is-show': isShow}]"
      tag="div"
    >

      <div
        v-for="(item, index) in activities" :key="index"
        class="activity__item"
        :class="'activity__item--'+item.type"
      >

        <p v-if="item.type === 'date'"><span>{{ item.date }}</span></p>
        <a
          v-if="item.type === 'codepen' ||
                item.type === 'ligblog' ||
                item.type === 'hatena' ||
                item.type === 'github'||
                item.type === 'qiita'"
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

      </div>
    </transition-group>

  </section>
</template>

<script>
  import {mapGetters} from 'vuex';

  export default {
    props: [
      'activities',
    ],
    data () {
      return {
        isShow: this.isLoaded
      }
    },
    computed: mapGetters([
      'isLoaded',
    ])
  }
</script>

<style lang="scss" scoped>
  @import '../assets/css/setting';
</style>
