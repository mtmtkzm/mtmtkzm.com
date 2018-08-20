<template>
  <div>
    <div class="theme-switcher">

      <div
        class="toggle"
        @click="toggleChoices"
      >
        {i}
      </div>

      <ul
        class="choices"
        v-show="isChoicesOpen"
      >
        <li
          v-for="theme in themes"
          :key="theme.label"
          @click="()=>setTheme(theme.colors)"
        >
          {{theme.label}}
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
  import themes from '../assets/data/color-themes';
  import themeSwitcher from '../assets/js/theme-switcher';

  export default {
    data () {
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
      }
    },
    mounted: function () {

    }
  }
</script>

<style scoped>
  .theme-switcher {
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
</style>
