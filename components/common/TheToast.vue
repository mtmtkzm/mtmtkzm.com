<template>
  <transition name="toast">
    <div
      v-show="isShow"
      class="toast"
      @click="clickHandler"
    >
      <p class="toast-inner">
        <AppIcon :name="body.icon"/>
        {{ body.text }}
      </p>
    </div>
  </transition>
</template>

<script>
  export default {
    computed: {
      body: function () {
        return this.$store.state.toast.body;
      },
      isShow: function () {
        return this.$store.state.toast.isShow;
      }
    },
    methods: {
      clickHandler: function () {
        this.$store.commit('destroyToast');
      }
    }
  }
</script>

<style scoped lang="scss">
  .toast {
    position: fixed;
    bottom: 10px;
    left: 10px;
    z-index: 5;
    border-radius: 5px;
    padding: 5px 15px;
    color: var(--color-gray);
    background-color: #fff;
    box-shadow: 0 2px 10px 0 rgba(#303030, .5);
  }

  .toast-inner {
    display: flex;
    align-items: center;
    justify-content: center;

    .icon {
      width: 16px;
      height: 16px;
      margin-right: 6px;
    }
  }
</style>
