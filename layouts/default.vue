<template>
  <div>
    <div
      class="l-contents"
      :style="`margin-bottom: ${footerHeight}`"
    >
      <div class="l-content">
        <my-header/>
        <nuxt/>
      </div>
      <bg class="l-bg"/>
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
  import Bg from '~/components/bg'

  export default {
    components: {
      MyFooter,
      MyHeader,
      Bg,
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

    .l-bg {
      position: absolute;
      top: 0;
      left: 0;
      z-index: 0;
    }

    .l-content {
      position: relative;
      z-index: 1;
    }
  }

  .l-footer {
    width: 100%;

    position: fixed;
    bottom: 0;
    left: 0;
  }

</style>
