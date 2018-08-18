<template>
  <header class="header">
    <div class="header-inner">
      <h1>
        <p class="title">MTMTKZM</p>
        <p class="subtitle"> Rider - Kazuma Matsumoto</p>
      </h1>
    </div>
  </header>
</template>

<script>
  export default {

  }
</script>

<style lang="scss" scoped>

  .header {
    padding: 32px 24px 0;
  }

  .header-inner {
    max-width: $max-width;
    margin: 0 auto;
  }


  h1 {
    font-family: 'Montserrat';

    p {
      display: block;
      line-height: 1;
    }

    .title {
      font-size: 24px;
      font-weight: 700;
    }

    .subtitle {
      margin-top: 5px;
      font-size: 16px;
      font-weight: 400;
    }
  }
</style>
