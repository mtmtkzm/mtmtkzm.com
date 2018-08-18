<template>
  <div>
    <div
      class="l-contents"
      :style="`margin-bottom: ${footerHeight}`"
    >
      <my-header/>
      <nuxt/>
    </div>

    <my-footer
      class="l-footer"
      ref="footer"
    />
  </div>
</template>

<script>
  import MyHeader from '~/components/common-header'
  import MyFooter from '~/components/common-footer'

  export default {
    components: {
      MyFooter,
      MyHeader,
    },

    data() {
      return {
        footerHeight: '0',
      }
    },

    mounted: function () {
      this.footerHeight = `${this.$refs.footer.$el.clientHeight}px`;
    },
  }
</script>

<style lang="scss" scoped>
  .l-contents {
    width: 100%;
    min-height: 100vh;
    background-color: $color-primary;
    position: relative;
    z-index: 1;

    box-shadow: -3px 4px 16px 4px #00000055;
  }

  .l-footer {
    width: 100%;
    position: fixed;
    bottom: 0;
    left: 0;
  }
</style>
