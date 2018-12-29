<template>
  <svg class="icon"><use :xlink:href="`#icon-${id}`"/></svg>
</template>

<script>
  export default {
    props: {
      id: {
        type: String,
        default: ""
      }
    }
  };
</script>

<style>
  .icon {
    width: 18px;
    height: 18px;
    fill: var(--secondary-color);
  }
</style>
