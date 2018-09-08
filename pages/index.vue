<template>
  <div>
    <main class="main">
      <section class="hello">
        <h2>Hello,</h2>
        <p>
          My name is Rider. I am a Front-End Developer engaging in development of Webservice / Website at LIG inc which
          has Motto "LIFE IS GOOD".<br>
          Not just coding as an engineer, I'd like to lead products along with my friends/partners/clients to success.
        </p>
        <p>
          初めまして、ライダーです。株式会社LIGでフロントエンドエンジニアとして働いています。じっくりひとつの技術極めることが得意ではない一方、サービスの案を考えたり作ったりすることが好きで得意です。
        </p>
        <p class="link-about">
          <nuxt-link to="/about">
            More profile
            <icon :id="`arrow-right`"/>
          </nuxt-link>
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

<script>
  import icon from '@/components/icon';

  export default {
    components: {
      icon,
    },
  }
</script>

<style scoped>
  .main {
    max-width: var(--max-width);
    margin: 0 auto;
  }

  .hello {
    padding: 0 24px;

    h2 {
      font-size: 56px;
      font-weight: bold;
      padding: 48px 0 10px;
    }

    p + p {
      margin-top: 36px;
    }

    .link-about {
      display: flex;
      align-items: center;
      justify-content: flex-end;

      a {
        display: flex;
        align-items: center;
      }

      .icon {
        margin-left: 12px;
      }
    }
  }

  .works {

    h2 {
      font-size: 56px;
      font-weight: bold;
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
      max-height: calc(var(--max-width) / 2);

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
