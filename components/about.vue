<template>
  <section class="about">
    <h1 class="about-title">HELLO!<br>I am Rider, not a rider</h1>
    <p class="about-description">
      I am a front-end engineer at LIG, mainly engaged in Webservice / Website development.
      I like Design and Engineering, prefer 'transition' to 'animation', '2D' to '3D'.<br>
      As well as coding as an engineer, I'd like to talk directly with clients who are enthusiastic about the product and its users and cooperate to create it.
    </p>
  </section>
</template>

<script>
  export default {}
</script>

<style lang="scss" scoped>
  @import '../assets/css/setting';

  .about {
    width: $base-width;
    margin: 0 auto;

    padding: 100px 0;
  }

  .about-title {
    font-size: 48px;
    line-height: 1;

    margin-bottom: 50px;
  }

  .about-description {
    font-size: 24px;
    line-height: 1.75;
    letter-spacing: .05em;
  }

</style>