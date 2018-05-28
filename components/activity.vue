<template>
  <transition-group
    name="activity__item"
    tag="div"
    :class="['activity', {'is-show': true}]"
  >

    <div
      v-for="(item, index) in activities"
      :key="index"
      :class="['activity__item', 'activity__item--'+item.type]"
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

    </div>
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

<style lang="scss" scoped>
  @import '../assets/css/setting';

  .activity {
    width: 100%;
    height: 400px;
    padding: 50px 0;
    overflow-x: scroll;
    overflow-y: hidden;

    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    justify-content: center;

    &__item {
      $item-width: 400px;
      max-width: $item-width;
      margin: 25px 0 25px 50px;

      &--date {
        height: 100%;
        margin-left: 100px;
        writing-mode: vertical-lr;
        letter-spacing: .2em;
        display: flex;
        justify-content: center;
        align-items: center;
      }

      &--flickr {
        width: $item-width * 0.9;
        height: $item-width * 0.75 * 0.9; // Keep ratio 4:3
        > a {
          width: 100%;
          height: 100%;
          box-sizing: border-box;
          padding: 12px 20px;
          background-position: center center;
          background-size: cover;
          background-repeat: no-repeat;
          position: relative;

          > h2 {
            position: absolute;
            bottom: 10px;
            color: $color-white;
          }
        }
      }

      > a {
        display: block;
        color: $color-black;
        text-decoration: none;

        > img {
        }

        > h2 {
          font-size: 16px;
          letter-spacing: .1em;

          margin: 12px 0 0;
        }

        > p {
          overflow: hidden;
          text-overflow: ellipsis;
          white-space: nowrap;

          margin: 5px 0 0;
        }
      }

    }


    // Animation (transition-group)
    $this: &;

    &__item {
      &-enter-active,
      &-leave-active {
        transition-timing-function: ease-in-out;
        transition-duration: 450ms;
        transition-property: all;
        @for $i from 1 through 100 {
          &:nth-child(#{$i}) {
            transition-delay: ($i * 50ms) + 50;
          }
        }
      }

      &-enter,
      &-leave-to {
        opacity: 0;
        transform: translateX(20px);
        pointer-events: none;
      }

      &-enter-to,
      &-leave {
        opacity: 1;
        transform: translateX(0);
        pointer-events: auto;
      }
    }
  }

</style>