<template>
  <div>
    <main class="main">
      <section class="hello">
        <h2>Hello,</h2>
        <p>
          I am a front-end engineer at LIG, engaged in Webservice / Website development mainly.<br>As well as coding as an engineer, I'd like to talk
          directly with clients who are enthusiastic about the product and its users and cooperate to create it.
        </p>
        <p>
          私はLIGのフロントエンドエンジニアであり、主にウェブサービス/ウェブサイト開発に従事しています。<br>技術者としてコーディングするだけでなく、製品とそのユーザーに熱心で、協力して作成するクライアントと直接話したいと思います。
        </p>
      </section>

      <section class="works">
        <h2>Works</h2>

        <div class="works-list">
          <a
            href="//maner.gallery"
            target="_blank"
            rel="noopener"
            class="work work-l work-maner"
          ></a>
          <a
            href="//liginc.co.jp/author/kazuma"
            target="_blank"
            rel="noopener"
            class="work work-m work-lig-articles"
          ></a>
          <a
            href="//liginc.co.jp/works/index/user/rider/"
            target="_blank"
            rel="noopener"
            class="work work-m work-lig-projects"
          ></a>
        </div>
      </section>

    </main>
  </div>
</template>

<style lang="scss" scoped>

  .main {
    max-width: $max-width;
    margin: 0 auto;
  }

  .hello {
    padding: 0 24px;

    h2 {
      font-size: 56px;
      padding: 36px 0 0;
    }

    p + p {
      margin-top: 32px;
    }
  }

  .works {

    h2 {
      font-size: 56px;
      padding: 48px 24px 12px;
    }

    .works-list {
      display: flex;
      flex-wrap: wrap;
    }

    .work {
      display: flex;
      align-items: center;
      justify-content: center;
      height: 50vw;
      max-height: calc(#{$max-width} / 2);
      cursor: url('/images/cursor-works.svg') 4 4, pointer;

      &-l {
        width: 100%;
      }

      &-m {
        width: 50%;
      }

      &-s {
        width: 33.3333%;
      }

    }

    .work-maner {
      background: url('/images/maner.png') center center/cover;
    }

    .work-lig-projects {
      background: url('/images/lig-projects.png') center center/cover;
    }

    .work-lig-articles {
      background: url('/images/lig-articles.png') center center/cover;
    }

  }
</style>
