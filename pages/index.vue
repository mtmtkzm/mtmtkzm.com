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
      <div>
        <p class="history-year">2018</p>
        <ul>
          <li>参画　Vue.js 日本ユーザグループ コアスタッフ</li>
          <li>留学　LIG Philippines. Inc</li>
        </ul>

        <p class="history-year">2017</p>
        <ul>
          <li>入社　株式会社LIG</li>
          <li>卒業　名古屋市立大学 芸術工学部</li>
        </ul>

        <p class="history-year">2016</p>
        <ul>
          <li>創設　OthloTech（学生コミュニティ）</li>
        </ul>

        <p class="history-year">2015</p>
        <ul>
          <li>入社　株式会社LIG　アルバイト</li>
        </ul>

        <p class="history-year">2013</p>
        <ul>
          <li>入学　名古屋市立大学 芸術工学部</li>
        </ul>

        <p class="history-year">2012</p>
        <ul>
          <li>卒業　京都府立向陽高等学校</li>
        </ul>
      </div>
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

    .history-year {
      margin-top: 30px;
      font-weight: bold;
      display: flex;
      align-items: center;

      &::before {
        content: '';
        display: block;
        width: 8px;
        height: 8px;
        border-radius: 50%;
        background-color: var(--secondary-color);
        margin-right: 10px;
      }

      &::after {
        content: '';
        display: block;
        height: 1px;
        background-color: var(--secondary-color);
        transform: scaleY(0.3);
        flex: 1;
        margin-left: 10px;
        transition: background-color var(--base-transition);
      }
    }

    ul {
      margin-top: 5px;
    }

    li {
      font-size: 13px;
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
