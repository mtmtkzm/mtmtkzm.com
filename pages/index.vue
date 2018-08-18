<template>
  <div>
    <my-header/>

    <main>
      <section class="hello">
        <h2>Hello,</h2>
        <p>
          I am a front-end engineer at LIG, engaged in Webservice / Website development mainly.<br>As well as coding as an engineer, I'd like to talk
          directly with clients who are enthusiastic about the product and its users and cooperate to create it.
        </p>
        <p>
          私はLIGのフロントエンドエンジニアであり、主にウェブサービス/ウェブサイト開発に従事しています。<br>私はデザインとエンジニアリングが好きで、2Dから3Dへのアニメーションへの移行を好みます。<br>技術者としてコーディングするだけでなく、製品とそのユーザーに熱心で、協力して作成するクライアントと直接話したいと思います。
        </p>
      </section>

      <section class="works">
        <h2>Works</h2>

        <div class="works-list">
          <div class="work work-l">
            <h3>maner</h3>
          </div>
          <div class="work work-m">
            <h3>LIG BLOG</h3>
          </div>
          <div class="work work-m">
            <h3>LIG Projects</h3>
          </div>
        </div>
      </section>

    </main>

    <my-footer/>
  </div>
</template>

<script>
  import MyHeader from '../components/common-header'
  import MyFooter from '../components/common-footer'

  export default {
    name: 'App',
    components: {
      MyFooter,
      MyHeader,
    },
  }
</script>

<style lang="scss" scoped>

  .hello {
    padding: 0 24px;

    h2 {
      font-size: 56px;
      padding: 32px 0 0;
    }

    p + p {
      margin-top: 32px;
    }
  }

  .works {
    h2 {
      font-size: 56px;
      padding: 32px 24px 0;
    }

    .works-list {
      display: flex;
      flex-wrap: wrap;
    }

    .work {
      display: flex;
      align-items: center;
      justify-content: center;
      height: 100px;

      &-l {
        width: 100%;
        background-color: gray;
      }

      &-m {
        width: 50%;
        background-color: lightgray;
      }

      &-s {
        width: 33.3333%;
        background-color: darkgray;
      }
    }

  }
</style>
