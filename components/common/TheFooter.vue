<template>
  <div>
    <footer class="footer">
      <div class="footer-inner">
        <h2>Say Hello.</h2>
        <ul>
          <li>
            <a
              href="//github.com/mtmtkzm"
              target="_blank"
              @click="sendGaEvent('gitHub')"
            >
              GitHub
            </a>
          </li>
          <li>
            <a
              href="//twitter.com/mtmtkzm"
              target="_blank"
              @click="sendGaEvent('twitter')"
            >
              Twitter
            </a>
          </li>
          <li>
            <a
              href="//www.wantedly.com/users/17812476"
              target="_blank"
              @click="sendGaEvent('wantedly')"
            >
              Wantedly
            </a>
          </li>
          <li>
            <p
              class="footer-link-mail"
              @click="mailClickHandler('mail', 'mtmtkzm00@gmail.com')"
            >
              mtmtkzm00@gmail.com
            </p>
          </li>
        </ul>
      </div>
    </footer>
  </div>
</template>

<script>
  export default {
    methods: {
      mailClickHandler: function (gaEventType, copyingText) {
        this.sendGaEvent(gaEventType);
        this.copyText(copyingText);
      },
      sendGaEvent: function(type) {
        this.$ga.event({
          eventCategory: 'Click Contact at Footer',
          eventAction: 'Clicked',
          eventLabel: type, // mail | twitter | github | wantedly
          eventValue: 1
        })
      },
      async copyText(text) {
        try {
          await this.$copyText(text);
        } catch (e) {
          console.error(e);
        }
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

  .footer-link-mail {
    display: inline-block;
    cursor: pointer;
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
