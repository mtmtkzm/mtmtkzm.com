<template>
  <div class="l-page-index">
    <section class="hello">
      <h2>Hello,</h2>
      <p>
        初めまして、ライダーです。株式会社LIGでフロントエンドエンジニアとして働いています。じっくりひとつの技術極めることが得意ではない一方、サービスの案を考えたり作ったりすることが好きで得意です。
      </p>
      <p class="link-about">
        <nuxt-link to="/about">
          More profile
          <AppIcon name="arrow-right"/>
        </nuxt-link>
      </p>
    </section>
    <section class="history">
      <h2>Career</h2>
      <dl>
        <dt>2018</dt>
        <dd>留学　LIG Philippines. Inc</dd>

        <dt>2017</dt>
        <dd>入社　株式会社LIG</dd>
        <dd>卒業　名古屋市立大学 芸術工学部</dd>

        <dt>2016</dt>
        <dd>創設　OthloTech（学生コミュニティ）</dd>

        <dt>2015</dt>
        <dd>入社　株式会社LIG　アルバイト</dd>

        <dt>2013</dt>
        <dd>入学　名古屋市立大学 芸術工学部</dd>

        <dt>2012</dt>
        <dd>卒業　京都府立向陽高等学校</dd>
      </dl>
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
  </div>
</template>

<style scoped lang="scss">
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

  .history {
    padding: 0 24px;

    h2 {
      font-size: 56px;
      font-weight: bold;
      padding: 36px 0 0;
    }

    dl {

      dt {
        margin-top: 15px;

        display: flex;
        align-items: center;

        &::after {
          content: '';
          display: block;
          flex: 1;
          height: 1px;
          background-color: var(--secondary-color);
          margin-left: 10px;
          transform: scaleY(0.3);

          transition: background-color var(--base-transition);
        }
      }

      dd {
        font-size: 13px;
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
