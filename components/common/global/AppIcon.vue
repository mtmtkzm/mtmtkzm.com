<template>
  <svg class="app-icon">
    <use :xlink:href="`#icon-${name}`" />
  </svg>
</template>

<script>
export default {
  props: {
    name: {
      type: String,
      default: ''
    }
  }
}
</script>

<style>
.app-icon {
  width: 18px;
  height: 18px;
  fill: var(--color-secondary);
}
</style>
