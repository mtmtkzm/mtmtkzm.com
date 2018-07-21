<template>
  <div>
    <h2>Contact Me!</h2>
    <input type="text">
  </div>
</template>

<script>
  export default {

  }
</script>

<style lang="scss" scoped>
  @import '../assets/css/setting';

  div {
    width: 100%;
    height: 300px;
    background-color: #555;

    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;

    position: fixed;
    bottom: 0;
    left: 0;

    input {
      width: 55%;
      border: 1px solid #fff;
      outline: $color-accent 1px solid;
    }
  }
</style>