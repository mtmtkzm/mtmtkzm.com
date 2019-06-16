<template>
  <footer class="footer">
    <div class="footer-inner">
      <h2>Say Hello.</h2>
      <ul>
        <li>
          <a
            href="//twitter.com/mtmtkzm"
            target="_blank"
            @click="sendGaEvent('twitter')"
          >Twitter</a>
        </li>
        <li>
          <a
            href="//github.com/mtmtkzm"
            target="_blank"
            @click="sendGaEvent('gitHub')"
          >GitHub</a>
        </li>
        <li>
          <a
            href="//www.wantedly.com/users/17812476"
            target="_blank"
            @click="sendGaEvent('wantedly')"
          >Wantedly</a>
        </li>
        <li>
          <p
            class="footer-link-mail"
            @click="mailClickHandler('mail', 'mtmtkzm00@gmail.com')"
          >mtmtkzm00@gmail.com</p>
        </li>
      </ul>

      <div class="footer-message">
        <InstanceMessage/>
      </div>
    </div>
  </footer>
</template>

<script>
  import InstanceMessage from '~/components/common/InstanceMessage';

  export default {
    components: {
      InstanceMessage
    },
    methods: {
      mailClickHandler: function (gaEventType, copyingText) {
        this.sendGaEvent(gaEventType);
        this.copyText(copyingText);
        this.$store.commit('setToast', {
          text: 'Copied!',
          icon: 'check'
        });
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

<style scoped lang="postcss">

  .footer {
    box-sizing: border-box;
    padding: 36px 24px 72px;
    background-color: var(--color-gray);
    color: white;

    h2 {
      font-size: 36px;
      font-weight: bold;
    }

    ul {
      margin-top: 16px;
      display: flex;
      align-items: center;
      flex-wrap: wrap;

      li {
        &:not(:last-of-type) {
          &::after {
            content: '|';
            margin: 0 10px;
          }
        }
      }
    }
  }

  .footer-inner {
    max-width: var(--max-width);
    margin: 0 auto;
  }

  .footer-link-mail {
    display: inline-block;
    cursor: pointer;
  }

  .footer-message {
    margin-top: 20px;
  }
</style>
