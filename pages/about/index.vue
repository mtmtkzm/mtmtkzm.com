<template>
  <div class="l-page-about">
    <section class="hello">
      <h2 class="portrait">
        <img src="~/assets/images/portrait.png" alt="MTMTKZM - Kazuma Matsumoto">
      </h2>

      <ArticleBody>
        <p>初めまして。いわゆる中型バイクに乗れます。ライダーなので。</p>
        <p>
          1993年、京都府出身。浪人を経て名古屋市立大学 芸術工学部に入学しました。<br>
          作ったものが世に出て人に見られることが楽しく、学祭・展示会の告知サイト、ちょっとした受託業務をこなすうちに、
          株式会社LIGにフロントエンドエンジニアとして就職しました。<br>
        </p>

        <h3>いまやりたいこと</h3>
        <p>
          主な業務はWebサイト・Webサービスを制作することです。<br>
          受託制作で数をこなした経験を活かし、<em>Webサービスの立ち上げを、より自分ごととしてやっていきたい・やってみたい</em>と思っています。<br>
          戦えるスキルセットは、Vue / Nuxt です。
        </p>

        <h3>得意なこと</h3>
        <p>Web開発にとらわれず、器用貧乏にことをこなせます。</p>
        <p>
          イベント運営や企画などが好きです。<br>
          今は、<em>Vue.js 日本ユーザグループ コアメンバー</em>としてVue Fes Japan等イベント運営に関わっています。また、<em>デジタルハリウッド大学 STUDIO 上野 by LIG の講師</em>としてJavaScript 入門講座を担当しています。<br>過去には、OthloTech（学生コミュニティ）を創設しイベントを企画・運営していました。
        </p>

        <h3>スキルセット</h3>
        <p>Webフロントエンドなら概ね大丈夫です。</p>
        <ul class="skills">
          <li>ES2015+</li>
          <li>Vue</li>
          <li>Nuxt</li>
          <li>jQuery</li>
          <li>Express</li>
          <li>EJS</li>
          <li>SCSS</li>
          <li>Post CSS</li>
          <li>Bulma</li>
          <li>Bootstrap</li>
          <li>WordPress</li>
          <li>Node</li>
          <li>Laravel</li>
          <li>Sketch</li>
          <li>UI Design</li>
          <li>English</li>
        </ul>

        <h3>仕事をください</h3>
        <p class="social-links">
          <a
            href="//twitter.com/mtmtkzm"
            @click="sendGaEvent('twitter')"
          >
            <AppIcon name="twitter"/>
            @mtmtkzm
          </a>
          <a
            href="mailto:mtmtkzm00@gmail.com"
            @click="sendGaEvent('mail')"
          >
            <AppIcon name="mail"/>
            mtmtkzm00@gmail.com
          </a>
        </p>
      </ArticleBody>
    </section>
  </div>
</template>

<script>
  import ArticleBody from '~/components/common/ArticleBody';

  export default {
    components: {
      ArticleBody
    },
    methods: {
      sendGaEvent: function(type) {
        this.$ga.event({
          eventCategory: 'Click Contact at About',
          eventAction: 'Clicked',
          eventLabel: type, // mail | twitter
          eventValue: 1
        })
      }
    }
  }
</script>

<style scoped lang="scss">
  .l-page-about {
    padding-bottom: 45px;
  }

  .hello {
    padding: 0 24px;

    .social-links {
      display: inline-flex;
      flex-direction: column;

      a {
        display: flex;
        align-items: center;
      }

      .icon {
        margin-right: 12px;
      }
    }

    .skills {
      display: flex;
      flex-wrap: wrap;
      margin-top: 24px;
      list-style: none;
      margin-left: 0;

      li {
        &::after {
          content: '/';
          display: inline-block;
          margin: 0 5px;
        }
      }
    }
  }

  .portrait {
    width: 100%;
    position: relative;
    margin-top: 45px;
    margin-bottom: 24px;

    img {
      width: 100%;
      position: absolute;
      z-index: 1;
      top: 0;
      left: 0;
      /*mix-blend-mode: screen;*/
      opacity: 0.9;
    }

    &::before {
      content: '';
      display: block;
      width: 100%;
      padding-top: 42.9%;
      background-color: var(--primary-color);

      transition: background-color var(--base-transition);
    }
  }
</style>
