<template>
  <div class="l-page-index">
    <section class="hello">
      <h2 @click="toggleShowWorld">
        <span>Hello,</span>
        <transition
          name="hello-world"
        >
          <span
            class="hello-world"
            v-show="showWorld"
          >
            <AppIcon name="globe"/>
          </span>
        </transition>
      </h2>
      <ArticleBody>
        <p>
          初めまして、ライダーです。<br>
          株式会社LIGでフロントエンドエンジニアとして、受託でWebサイトやWebサービスの開発をしています。
        </p>

        <p>
          これから少しずつ、力を入れていきたいと思っています。
        </p>

        <ul>
          <li>健康管理をする</li>
          <li>週末フリーランスな動き</li>
          <li>OSSへのコミット</li>
          <li>趣味らしい趣味を見つける</li>
          <li>デザインツールを使いこなす</li>
        </ul>

        <p class="more-about">
          <nuxt-link to="/about">
            More profile
            <AppIcon name="arrow-right"/>
          </nuxt-link>
        </p>
      </ArticleBody>
    </section>

    <section class="career">
      <h2>Career</h2>
      <div>
        <p class="career-year">2019</p>
        <ul>
          <li>未定 なにしようかな！</li>
        </ul>
        <p class="career-year">2018</p>
        <ul>
          <li>参画 Vue.js JP コアスタッフ</li>
          <li>講師 デジハリ STUDIO上野 by LIG</li>
          <li>留学 LIG Philippines. Inc</li>
        </ul>

        <p class="career-year">2017</p>
        <ul>
          <li>入社 株式会社LIG</li>
          <li>卒業 名古屋市立大学 芸術工学部</li>
        </ul>

        <p class="career-year">2016</p>
        <ul>
          <li>創設 OthloTech（学生コミュニティ）</li>
        </ul>

        <p class="career-year">2015</p>
        <ul>
          <li>入社 株式会社LIG アルバイト</li>
        </ul>

        <p class="career-year">2013</p>
        <ul>
          <li>入学 名古屋市立大学 芸術工学部</li>
        </ul>

        <p class="career-year">2012</p>
        <ul>
          <li>卒業 京都府立向陽高等学校</li>
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

<script>
  import ArticleBody from '~/components/common/ArticleBody';
  export default {
    components: {
      ArticleBody
    },
    data () {
      return {
        showWorld: false,
      }
    },
    methods: {
      toggleShowWorld: function () {
        this.showWorld = !this.showWorld;
      }
    }
  }
</script>

<style scoped lang="scss">
  .hello {
    padding: 0 24px;

    h2 {
      font-size: 56px;
      font-weight: bold;
      padding: 48px 0 10px;
      overflow: hidden;
      display: flex;
      align-items: center;

      .hello-world {
        display: flex;
        align-items: center;
        margin-left: 12px;

        .icon {
          width: 48px;
          height: 48px;
        }
      }

      .hello-world-enter-active,
      .hello-world-leave-active {
        transition: all var(--base-transition);
      }
      .hello-world-enter,
      .hello-world-leave-to {
        opacity: 0;
        transform: scale(.95);
      }
    }

    .more-about {
      display: flex;
      align-items: center;
      justify-content: flex-end;
      margin-top: 12px;

      a {
        display: flex;
        align-items: center;
      }

      .icon {
        margin-left: 12px;
      }
    }
  }

  .career {
    padding: 0 24px;

    h2 {
      font-size: 56px;
      font-weight: bold;
      padding: 36px 0 0;
    }

    .career-year {
      margin-top: 30px;
      font-weight: bold;
      display: flex;
      align-items: center;

      &::before,
      &::after {
        content: '';
        display: block;
        height: 1px;
        background-color: var(--secondary-color);
        transform: scaleY(0.3);
        flex: 1;
        transition: background-color var(--base-transition);
      }

      &::before {
        flex: 1;
        margin-right: 10px;
      }

      &::after {
        flex: 32;
        margin-left: 10px;
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
