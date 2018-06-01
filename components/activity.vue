<template>
  <section class="container">
    <h2 class="heading2">My latest activity on the Web</h2>

    <transition-group
      :class="['activity', {'is-show': isShow}]"
      tag="div"
      name="activity__item"
    >

      <div
        v-for="(item, index) in activities" :key="index"
        :class="['activity__item', 'activity__item--'+item.type]"
      >
        <p v-if="item.type === 'date'">{{ item.date }}</p>
        <a
          v-if="item.type === 'codepen' ||
                item.type === 'qiita' ||
                item.type === 'ligblog' ||
                item.type === 'hatena' ||
                item.type === 'github'"
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
    computed: mapGetters({
      isLoaded: 'isLoaded',
    })
  }
</script>

<style lang="scss" scoped>
  @import '../assets/css/setting';

  .heading2 {
    font-size: 24px;
    text-shadow: 3px 2px 0 #fff;
  }

  .activity {
    width: 100%;
    height: 360px;
    padding: 20px 0 0;
    overflow-x: scroll;
    overflow-y: hidden;

    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    justify-content: center;

    &::-webkit-scrollbar {
      height: 5px;
      &-track {
        background-color: #dcdcdc;
      }
      &-thumb {
        background: $linear-gradient;
      }
    }

    &:after { // spacer
      content: '';
      display: block;
      height: 100%;
      width: 50px;
    }

    &__item {
      $item-width: 360px;
      max-width: $item-width;
      margin: 20px 50px 20px 0;

      &--date {
        height: 100%;
        margin-left: 50px;
        writing-mode: vertical-lr;
        transform: rotate(180deg);
        letter-spacing: .2em;
        display: flex;
        justify-content: center;
        align-items: center;

        &:first-of-type {
          margin-left: 0;
        }
      }

      &--flickr {
        width: $item-width * 0.9;
        height: $item-width * 0.75 * 0.9; // Keep ratio 4:3
        > a {
          width: 100%;
          height: 100%;
          box-sizing: border-box;
          padding: 12px 20px;
          background: center center/cover no-repeat;

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

        @for $i from 1 through 50 {
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