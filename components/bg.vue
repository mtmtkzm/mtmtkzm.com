<template>
  <div>
    <div class="bg">
      <svg x="0px" y="0px" width="100%" height="100%">
        <path
          v-for="(path, index) in paths"
          :key="index"
          :d="path[0]"
        >
          <animate
            :repeatCount="`indefinite`"
            :attributeName="`d`"
            :attributeType="`XML`"
            :values="path.join(';')"
            :dur="`12s`"
          />
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

<style scoped>
  .bg {
    position: relative;
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  svg {
    max-width: 700px;
  }

  path {
    fill: var(--primary-color);
    mix-blend-mode: multiply;
    animation: fuwa 9s infinite alternate-reverse;

    transition: fill var(--base-transition);

    &:nth-child(3n-2) {
      animation: fuwa-reverse 18s infinite alternate-reverse;
    }
  }

  @keyframes fuwa {
    0% {
      transform: translate(0, 0) rotate(4deg);
    }
    100% {
      transform: translate(0, 2vw) rotate(0deg);
    }
  }

  @keyframes fuwa-reverse {
    0% {
      transform: translate(0, 1vw) rotate(0deg);
    }
    100% {
      transform: translate(0, 0) rotate(8deg);
    }
  }

</style>
