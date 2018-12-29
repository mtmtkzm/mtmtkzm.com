<template>
  <div>
    <div class="theme-switch">

      <div
        class="toggle"
        @click="toggleChoices"
      >
        <AppIcon name="command"/>
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
          :key="theme.icon"
          :data-index="index"
          @click="() => choiceClickHandler(theme.colors)"
        >
          <AppIcon :name="theme.icon"/>
        </li>
      </transition-group>

    </div>
  </div>
</template>

<script>
  import themes from '~/assets/data/color-themes';

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
      choiceClickHandler: function (colors) {
        this.sendGaEvent(colors.icon);
        this.setTheme(colors);
        this.toggleChoices();
      },
      setTheme: function (colors) {
        Object.keys(colors).forEach(key => {
          document.documentElement.style.setProperty(`--${key}-color`, colors[key]);
        })
      },
      // enter の初めにインデックス×100でディレイを付ける
      beforeEnter(el) {
        el.style.transitionDelay = `${100 * el.dataset.index}ms`
      },
      // enter が終わるか中止されたらディレイを消す
      afterEnter(el) {
        el.style.transitionDelay = ''
      },
      sendGaEvent: function(colorIconName) {
        this.$ga.event({
          eventCategory: 'Switching Color Theme',
          eventAction: 'Switched',
          eventLabel: colorIconName,
          eventValue: 1
        })
      }
    }
  }
</script>

<style scoped lang="scss">
  .theme-switch {
    display: flex;
    flex-direction: row-reverse;
    align-items: center;

    .icon {
      fill: var(--primary-color);
    }
  }

  .toggle {
    width: 52px;
    height: 52px;
    border-radius: 50%;
    background-color: var(--secondary-color);
    color: var(--primary-color);
    display: flex;
    align-items: center;
    justify-content: center;
    margin-left: 10px;
    cursor: pointer;

    transition: color var(--base-transition);
  }

  .choices {
    display: flex;
    list-style: none;

    li {
      margin-right: 16px;

      width: 36px;
      height: 36px;
      border-radius: 20px;
      background-color: var(--secondary-color);
      color: var(--primary-color);

      display: flex;
      align-items: center;
      justify-content: center;
      cursor: pointer;
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
