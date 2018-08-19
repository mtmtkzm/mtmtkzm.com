<template>
  <div>
    <div class="bg">
      <svg x="0px" y="0px" width="100%" height="100%">
        <path
          v-for="(path, index) in paths"
          :key="index"
          :d="path[1]"
        >
          <animate
            :repeatCount="`indefinite`"
            :attributeName="`d`"
            :attributeType="`XML`"
            :values="path.join(';')"
            :dur="`4s`"
          ></animate>
        </path>
      </svg>
    </div>
  </div>
</template>

<script>
  import paths from '~/assets/data/animate-paths';

  export default {
    data() {
      return {
        paths,
      }
    },
  }
</script>

<style lang="scss">
  .bg {
    position: relative;
    width: 100%;
    height: 100%;
  }

  svg {
    position: absolute;
  }

  path {
    fill: darken(#C01212, 10%);
    mix-blend-mode: multiply;
    position: relative;
    top: 30px;
    left: 40px;

    &:nth-child(2) {
      animation: fuwafuwa 3s infinite linear alternate;
    }
  }

  @keyframes fuwafuwa {
    0% {
      transform: translate(0, 0) rotate(-10deg);
    }
    50% {
      transform: translate(0, -3vw) rotate(0deg);
    }
    100% {
      transform: translate(0, 0) rotate(10deg);
    }
  }
</style>
