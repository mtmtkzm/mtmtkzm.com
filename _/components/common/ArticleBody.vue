<template>
  <div class="article-body">
    <slot></slot>
  </div>
</template>

<style scoped lang="postcss">
  h3 {
    margin: 30px 0 10px;
    font-size: 20px;
    font-weight: bold;
  }

  p {
    + p {
      margin-top: 24px;
    }

    em {
      font-weight: bold;
    }
  }

  ul {
    list-style: circle;
    margin-top: 12px;
    margin-left: 20px;
  }
</style>
