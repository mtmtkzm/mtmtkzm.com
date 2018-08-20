<template>
  <div>
    <div class="theme-switch">

      <div
        class="toggle"
        @click="toggleChoices"
      >
        {i}
      </div>

      <transition-group
        tag="ul"
        class="choices"
        name="choice"
        @before-enter="beforeEnter"
        @after-enter="afterEnter"
        @enter-cancelled="afterEnter"
      >
        <li
          v-show="isChoicesOpen"
          v-for="(theme, index) in themes"
          :key="theme.label"
          :data-index="index"
          @click="() => setTheme(theme.colors)"
        >
          {{theme.label}}
        </li>
      </transition-group>

    </div>
  </div>
</template>

<script>
  import themes from '../assets/data/color-themes';
  import themeSwitcher from '../assets/js/theme-switcher';

  export default {
    data() {
      return {
        themes,
        isChoicesOpen: false,
      }
    },
    methods: {
      toggleChoices: function () {
        this.isChoicesOpen = !this.isChoicesOpen;
      },
      setTheme: function (colors) {
        themeSwitcher.update(colors);
      },
      // enter の初めにインデックス×100でディレイを付ける
      beforeEnter(el) {
        el.style.transitionDelay = `${100 * el.dataset.index}ms`
      },
      // enter が終わるか中止されたらディレイを消す
      afterEnter(el) {
        el.style.transitionDelay = ''
      }
    },
    mounted: function () {

    },
  }
</script>

<style scoped>
  .theme-switch {
    display: flex;
    flex-direction: row-reverse;
    align-items: center;
  }

  .toggle {
    width: 52px;
    height: 52px;
    border-radius: 50%;
    background-color: #fff;
    color: var(--primary-color);

    display: flex;
    align-items: center;
    justify-content: center;

    margin-left: 10px;
  }

  .choices {
    display: flex;
    list-style: none;

    li {
      margin-right: 16px;

      width: 36px;
      height: 36px;
      border-radius: 20px;
      background-color: #fff;
      color: var(--primary-color);

      display: flex;
      align-items: center;
      justify-content: center;
    }
  }

  /* For transition group */
  .choice-enter-active,
  .choice-leave-active {
    transition: transform 250ms, opacity 250ms;
  }

  .choice-enter,
  .choice-leave-to {
    opacity: 0;
    transform: translateX(5px);
  }

</style>
