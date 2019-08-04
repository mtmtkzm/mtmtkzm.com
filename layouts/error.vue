<template>
  <div class="error">
    <div class="introduction">
      <template v-if="error.statusCode === 404">
        <h2>404</h2>
        <ArticleBody>
          <p>
            This page is no longer available. Please look for the page from the
            following list. Sorry for inconvenience.
          </p>
          <p>
            アクセスされたページは削除されたか、現在ご利用いただけません。<br />
            下記リストよりお目当のページをお探しください。また、サイト内のリンク切れを発見した場合、
            <a href="//twitter.com/mtmtkzm" target="_blank"
              ><AppIcon name="twitter" /> Twitter</a
            >、もしくは
            <a href="mailto:mtmtkzm00@gmail.com"
              ><AppIcon name="mail" /> メール</a
            >にてご一報いただけますと幸いです。
            早急に対応させていただきます。多分いっぱいあると思います...。
          </p>

          <h3>ページ</h3>
          <ul>
            <li>
              <nuxt-link to="/">TOP PAGE</nuxt-link>
            </li>
            <li>
              <nuxt-link to="/about">ABOUT ME</nuxt-link>
            </li>
          </ul>

          <h3>外部リンク</h3>
          <ul>
            <li>
              <a href="//github.com/mtmtkzm" target="_blank">
                GitHub
              </a>
            </li>
            <li>
              <a href="//twitter.com/mtmtkzm" target="_blank">
                Twitter
              </a>
            </li>
            <li>
              <a href="//www.wantedly.com/users/17812476" target="_blank">
                Wantedly
              </a>
            </li>
          </ul>
        </ArticleBody>
      </template>
    </div>
  </div>
</template>
<script>
import ArticleBody from '~/components/common/ArticleBody'

export default {
  components: {
    ArticleBody
  },
  props: {
    error: {
      type: Object,
      default: () => ({})
    }
  }
}
</script>

<style scoped lang="postcss">
.introduction {
  padding: 0 0 45px;
}
.error {
  max-width: var(--max-width);
  margin: 0 auto;
  padding: 0 24px;
}

h2 {
  font-size: 56px;
  font-weight: bold;
  padding: 48px 0 10px;
}
</style>
