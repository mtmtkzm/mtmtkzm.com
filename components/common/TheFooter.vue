<template>
  <div>
    <footer class="footer">
      <div class="footer-inner">
        <h2>Say Hello.</h2>
        <ul>
          <li>
            <a
              href="//github.com/mtmtkzm"
              @click="sendGaEvent('gitHub')"
            >
              GitHub
            </a>
          </li>
          <li>
            <a
              href="//twitter.com/mtmtkzm"
              @click="sendGaEvent('twitter')"
            >
              Twitter
            </a>
          </li>
          <li>
            <a
              href="//www.wantedly.com/users/17812476"
              @click="sendGaEvent('wantedly')"
            >
              Wantedly
            </a>
          </li>
          <li>
            <p @click="sendGaEvent('mail')">mtmtkzm00@gmail.com</p>
          </li>
        </ul>
      </div>
    </footer>
  </div>
</template>

<script>
  export default {
    methods: {
      sendGaEvent: function(type) {
        this.$ga.event({
          eventCategory: 'Click Contact at Footer',
          eventAction: 'Clicked',
          eventLabel: type, // mail | twitter | github | wantedly
          eventValue: 1
        })
      }
    }
  }
</script>

<style scoped lang="scss">

  .footer {
    padding: 32px 24px 48px;
    background-color: var(--color-gray);
    color: white;
  }

  .footer-inner {
    max-width: var(--max-width);
    margin: 0 auto;
  }

  h2 {
    font-size: 36px;
    font-weight: bold;
  }

  ul {
    margin-top: 16px;
    margin-left: 20px;

    list-style: circle;
  }

</style>
