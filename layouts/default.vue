<template>
  <div>
    <div
      class="l-contents"
      :style="`margin-bottom: ${footerHeight}`"
    >
      <div class="l-content">
        <TheHeader/>
        <main class="l-main">
          <nuxt/>
        </main>
      </div>

      <TheBg class="l-bg"/>
    </div>

    <TheFooter
      class="l-footer"
      ref="footer"
    />

    <TheWeatherSwitcher class="l-weather-switch"/>

    <TheToast/>
  </div>
</template>

<script>
  import TheHeader from '~/components/common/TheHeader'
  import TheFooter from '~/components/common/TheFooter'
  import TheBg from '~/components/common/TheBg'
  import TheWeatherSwitcher from '~/components/common/TheWeatherSwitcher'
  import TheToast from '~/components/common/TheToast'

  export default {
    components: {
      TheFooter,
      TheHeader,
      TheBg,
      TheWeatherSwitcher,
      TheToast,
    },

    data() {
      return {
        footerHeight: '0',
      }
    },

    mounted: function () {
      this.setFooterHeight();
      this.setToastByQuery();
    },

    methods: {
      setFooterHeight: function () {
        this.footerHeight = `${this.$refs.footer.$el.clientHeight}px`;
      },

      setToastByQuery: function () {
        // Query に sent-instance-message があったら
        if (!this.$route.query.hasOwnProperty('sent-instance-message')) return;
        this.$store.commit('setToast', {
          text: 'Thanks for the message!',
          icon: 'send'
        });
      }
    }
  }
</script>

<style scoped lang="postcss">
  .l-main {
    max-width: var(--max-width);
    margin: 0 auto;
  }

  .l-contents {
    width: 100%;
    min-height: 100vh;
    background-color: var(--color-primary);
    position: relative;
    z-index: 1;
    box-shadow: -3px 4px 16px 4px rgba(#000, .5);
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

  .l-weather-switch {
    width: 100%;
    padding: 0 calc((100% - 650px) / 2);
    position: fixed;
    bottom: 20px;
    right: 20px;
    z-index: 3;
  }
</style>
