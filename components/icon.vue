<template>
  <svg class="icon" role="img">
    <use :xlink:href="`#icon-${id}`"></use>
  </svg>
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
