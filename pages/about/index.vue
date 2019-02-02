<template>
  <div class="l-page-about">
    <section class="hello">
      <h2 class="portrait">
        <img src="~/assets/images/portrait.png" alt="MTMTKZM - Kazuma Matsumoto">
      </h2>

      <ArticleBody>
        <p>初めまして。ライダーです。<br>いわゆる中型バイクに乗れます。</p>
        <p>
          1993年、京都府出身。浪人を経て名古屋市立大学 芸術工学部に入学しました。<br>
          作ったものが世に出て人に見られることが楽しく、学祭・展示会の告知サイト、ちょっとした受託業務をこなすうちに、
          株式会社LIGにフロントエンドエンジニアとして就職しました。<br>
          いまの主な業務はWebサイト・Webサービスを制作することです。
        </p>

        <h3>得意なこと</h3>
        <p>Webサイト・サービス開発が得意です。が、Web開発にとらわれず、器用貧乏にことをこなせるとおもいます。</p>
        <p>
          他には、イベント運営や企画などが好きです。<br>
          いまは、<em>Vue.js 日本ユーザグループ コアスタッフ</em>として、イベント運営に関わっています。<br>
          また、<em>デジタルハリウッド大学 STUDIO上野 by LIG の講師</em>としてJavaScript 入門講座を担当していたり、過去には、OthloTech（学生コミュニティ）を創設しイベントを企画・運営していました。
        </p>

        <h3>いまやりたいこと</h3>
        <p>
          受託制作で数をこなした経験を活かし、Webサービスの立ち上げを、<em>より自分ごととして</em>やっていきたい・やってみたいと思っています。<br>
          どちらかというと、エンタメなサービスより不便を便利にするサービスが好きです。
        </p>

        <h3>スキルセット</h3>
        <ul class="skills">
          <li>ES2015+</li>
          <li>Vue</li>
          <li>Nuxt</li>
          <li>jQuery</li>
          <li>Express</li>
          <li>EJS</li>
          <li>SCSS</li>
          <li>Post CSS</li>
          <li>Node</li>
          <li>WordPress</li>
          <li>Laravel</li>
          <li>Sketch</li>
          <li>UI Design</li>
          <li>English</li>
        </ul>

        <h3>一緒に仕事をしましょう</h3>
        <p class="social-links">
          <a
            href="//twitter.com/mtmtkzm"
            target="_blank"
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

<style scoped lang="postcss">
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

      .app-icon {
        margin-right: 12px;
      }
    }

    .skills {
      display: flex;
      flex-wrap: wrap;
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
      background-color: var(--color-primary);

      transition: background-color var(--base-transition);
    }
  }
</style>
