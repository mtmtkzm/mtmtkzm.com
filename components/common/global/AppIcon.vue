<template>
  <svg class="icon">
    <use :xlink:href="`#icon-${name}`"/>
  </svg>
</template>

<script>
  export default {
    props: {
      name: {
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
