<template>
  <div>
    <div
      class="l-contents"
      :style="`margin-bottom: ${footerHeight}`"
    >
      <div class="l-content">
        <TheHeader/>
        <nuxt/>
      </div>
      <TheBg class="l-bg"/>
    </div>

    <TheFooter
      class="l-footer"
      ref="footer"
    />

    <TheThemeSwitcher class="l-theme-switch"/>
  </div>
</template>

<script>
  import TheHeader from '~/components/common/TheHeader'
  import TheFooter from '~/components/common/TheFooter'
  import TheBg from '~/components/common/TheBg'
  import TheThemeSwitcher from '~/components//common/TheThemeSwitcher'

  export default {
    components: {
      TheFooter,
      TheHeader,
      TheBg,
      TheThemeSwitcher,
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

<style scoped lang="scss">
  .l-contents {
    width: 100%;
    min-height: 100vh;
    background-color: var(--primary-color);
    position: relative;
    z-index: 1;
    box-shadow: -3px 4px 16px 4px #00000055;

    transition: background-color var(--base-transition);

    .l-bg {
      width: 100%;
      height: 100%;
      margin: 0 auto;

      position: absolute;
      top: 0;
      left: 0;
      right: 0;
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

  .l-theme-switch {
    position: fixed;
    bottom: 40px;
    right: 20px;
    z-index: 3;
  }
</style>
