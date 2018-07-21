<template>
  <div>
    <p>My Projects</p>
    <div class="projects">
      <div class="maner">maner</div>
      <div class="lig-articles">LIG BLOG<br>ARTICLES</div>
      <div class="lig-projects">LIG<br>PROJECTS</div>
    </div>
  </div>
</template>
<script>
  export default {}
</script>
<style lang="scss" scoped>
  @import '../assets/css/setting';

  .projects {
    display: flex;
    flex-wrap: wrap;

    div {
      height: 50vw;

      display: flex;
      align-items: center;
      justify-content: center;
      text-align: center;
    }

    .maner {
      width: 100%;
      background-color: white;
      color: $color-black;
    }

    .lig-articles {
      width: 50%;
      background-color: lightgray;
      color: $color-black;
    }

    .lig-projects {
      width: 50%;
      background-color: darkgray;
    }
  }
</style>