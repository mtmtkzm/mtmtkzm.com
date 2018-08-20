<template>
  <div>
    <div class="theme-switcher">
      <div class="toggle">
        <a href="">{i}</a>
      </div>
      <ul>
        <li><a href="">朝</a></li>
        <li><a href="">昼</a></li>
        <li><a href="">夜</a></li>
      </ul>
    </div>
  </div>
</template>

<script>
  import themes from '../assets/data/color-themes';
  export default {
    data () {
      return {
        themes: {

        }
      }
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

  ul {
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
