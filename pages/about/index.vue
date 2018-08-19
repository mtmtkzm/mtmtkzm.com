<template>
  <div>
    <main class="main">
      <section class="hello">
        <h2>Hello,</h2>
        <img src="/images/portrait.png">
        <p>
          I am a front-end engineer at LIG, engaged in Webservice / Website development mainly.<br>As well as coding as an engineer, I'd like to talk
          directly with clients who are enthusiastic about the product and its users and cooperate to create it.
        </p>
        <p>
          私はLIGのフロントエンドエンジニアであり、主にウェブサービス/ウェブサイト開発に従事しています。<br>技術者としてコーディングするだけでなく、製品とそのユーザーに熱心で、協力して作成するクライアントと直接話したいと思います。
        </p>
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

    p {
      margin-top: 32px;
    }

    img {
      max-width: 100%;
    }
  }
</style>
