<template>
  <div>
    <footer class="footer">
      <div class="footer-inner">
      <h2>Say Hello.</h2>
        <ul>
          <li>
            <a href="//github.com/mtmtkzm">GitHub</a>
          </li>
          <li>
            <a href="//twitter.com/mtmtkzm">Twitter</a>
          </li>
          <li>
            <a href="//www.wantedly.com/users/17812476">Wantedly</a>
          </li>
          <li>
            <p>hello@mtmtkzm.com</p>
          </li>
        </ul>
      </div>
    </footer>
  </div>
</template>

<script>
  export default {
    components: {}
  }
</script>

<style scoped>

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
  }

</style>
