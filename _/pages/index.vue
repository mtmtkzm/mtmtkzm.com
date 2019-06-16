<template>
  <div class="l-page-index">
    <section class="hello">
      <h2 @click="toggleShowWorld">
        <span>Hello,</span>
        <transition name="hello-world">
          <span class="hello-world" v-show="showWorld">
            <AppIcon name="globe"/>
          </span>
        </transition>
      </h2>
      <ArticleBody>
        <p>初めまして、ライダーです。
          <br>株式会社LIGでフロントエンドエンジニアとして、受託でWebサイトやWebサービスの開発をしています。
        </p>

        <p>仕事（会社）では、かっこいいものより便利なものを作ることに携わりたいと思っています。</p>

        <p class="more-about">
          <nuxt-link to="/about">More profile
            <AppIcon name="arrow-right"/>
          </nuxt-link>
        </p>
      </ArticleBody>
    </section>

    <section class="articles">
      <h2>Articles</h2>
      <template v-if="isLoadingArticles">Loading Articles ....</template>
      <template v-else>
        <ul class="article-list">
          <li v-for="article in articles" :key="article.url" class="article-item">
            <a :href="article.url" target="_blank">
              <article>
                <div class="article-item-header">
                  <time>{{ article.dateText }}</time>
                  <span>#{{ article.type }}</span>
                </div>
                <div class="article-item-body">
                  <h3>{{ article.title }}</h3>
                </div>
              </article>
            </a>
          </li>
        </ul>
      </template>
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
        <a href="//maner.gallery" target="_blank" rel="noopener" class="work work-l work-maner"></a>
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
import ArticleBody from "~/components/common/ArticleBody";

export default {
  components: {
    ArticleBody
  },
  data() {
    return {
      showWorld: false
    };
  },
  computed: {
    articles: function() {
      return this.$store.getters.recentArticles;
    },
    isLoadingArticles: function() {
      return this.$store.state.articles.isLoading;
    }
  },
  mounted: function() {
    this.$store.dispatch("getArticles");
  },
  methods: {
    toggleShowWorld: function() {
      this.showWorld = !this.showWorld;
    }
  }
};
</script>

<style scoped lang="postcss">
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

      .app-icon {
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
      transform: scale(0.95);
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

    .app-icon {
      margin-left: 12px;
    }
  }
}

.articles {
  padding: 0 24px;

  h2 {
    font-size: 56px;
    font-weight: bold;
    padding: 36px 0 0;
  }

  .article-item {
    &:not(:first-of-type) {
      &::before {
        content: '';
        display: block;
        width: 100%;
        height: 1px;
        background-color: var(--color-gray);
        transform: scaleY(0.25);
      }
    }

    a {
      display: block;
      width: 100%;
      height: 100%;
      padding: 16px 0;
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
      content: "";
      display: block;
      height: 1px;
      background-color: var(--color-secondary);
      transform: scaleY(0.25);
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
    background: url("~assets/images/works/maner.png") center center/cover;
  }

  .work-lig-projects {
    background: url("~assets/images/works/lig-projects.png") center center/cover;
  }

  .work-lig-articles {
    background: url("~assets/images/works/lig-articles.png") center center/cover;
  }
}
</style>
