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
    watch: {
      isShow: function () {
        // Toast 消すときは何もしない
        if(!this.isShow) return;
        // 数秒後に Toast を非表示にする
        setTimeout(this.destroySelf, 4500);
      }
    },
    methods: {
      clickHandler: function () {
        this.destroySelf();
      },
      destroySelf: function () {
        this.$store.commit('destroyToast');
      }
    }
  }
</script>

<style scoped lang="scss">
  .toast {
    position: fixed;
    bottom: 20px;
    left: 20px;
    z-index: 5;
    border-radius: 5px;
    padding: 10px 20px;
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
      fill: var(--color-gray);
    }
  }

  .toast-enter-active,
  .toast-leave-active {
    transition: opacity var(--base-transition), transform var(--base-transition);
  }
  .toast-enter,
  .toast-leave-to {
    opacity: 0;
    transform:  translateX(-5px);
  }
</style>
