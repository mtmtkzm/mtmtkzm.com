<template>
  <div class="error">

    <div class="introduction">
      <template v-if="error.statusCode === 404">
        <h2>NOT FOUND</h2>
        <p>This page is no longer available. Please look for the page from the following list. Sorry for inconvenience.</p>
        <p>
          アクセスされたページはすでに削除されたか、ご利用いただけません。 下記リストよりお目当のページをお探しください。
          また、サイト内のリンク切れを発見した場合、Twitter <a href="//twitter.com/mtmtkzm" target="_blank"><icon :id="`twitter`"/></a>、
          もしくはメール <a href="mailto:hello@mtmtkzm.com"><icon :id="`mail`"/></a>にて
          管理者までご一報いただけますと幸いです。早急に対応させていただきます。
        </p>
      </template>
      <template v-else>
        <h2>ERROR</h2>
      </template>
    </div>

    <ul>
      <li>
        <nuxt-link to="/">TOP PAGE</nuxt-link>
      </li>
      <li>
        <nuxt-link to="/">ABOUT ME</nuxt-link>
      </li>
    </ul>

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
    </ul>
  </div>
</template>
<script>
  import icon from '@/components/icon';
  export default {
    props: {
      error: {},
    },
    components: {
      icon,
    },
  }
</script>

<style scoped>
  .error {
    max-width: var(--max-width);
    margin: 0 auto;
    padding: 0 24px;
  }


  a {
    display: inline-flex;
    align-items: center;
    justify-content: center;

    .icon {
      width: 14px;
      transform: translate(-4px, 4px);
    }
  }

  h2 {
    font-size: 56px;
    font-weight: bold;
    padding: 48px 0 10px;
  }


  p + p {
    margin-top: 24px;
  }

  ul {
    margin-top: 24px;
    margin-left: 18px;
    list-style-type: circle;
  }

</style>
