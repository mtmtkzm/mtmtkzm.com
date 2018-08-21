<template>
  <div>
    <main class="main">
      <section class="hello">
        <h2 class="portrait">
          <img src="/images/portrait.png" alt="MTMTKZM - Kazuma Matsumoto">
        </h2>
        <p>
          1993年、京都府出身。映像制作に興味を持ち浪人を経て大学に入学するも、HTMLを書き始めます。<br>
          作ったものが世に出て人に見られる快感に溺れるようになり、学祭や展示会の告知サイト、ちょっとした受託業務をこなすうちに、
          株式会社LIGにフロントエンドエンジニアとして就職しました。
        </p>
        <p>
          じっくりひとつの技術極めることが得意ではない一方、サービスの案を考えたり作ったりすることが好きで、プロジェクト全体を見て立ち回ることが得意です。<br>
          つまり、器用貧乏型のジェネラリスト体質です。いつか器用大富豪になれることを夢見ています。
        </p>
        <p>
          また、会社への相談はもちろん、個人でも受託Web開発をやっていきたいと思っています。その他 協業でもイベント登壇でもお気軽にご連絡くださればと思います。
        </p>

        <p class="social-links">
          <a href="//twitter.com/mtmtkzm">
            <icon :id="`twitter`"/>@mtmtkzm
          </a>
          <a href="mailto:hello@mtmtkzm.com">
            <icon :id="`mail`"/>hello@mtmtkzm.com
          </a>
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
    </main>
  </div>
</template>

<script>
  import icon from '@/components/icon';

  export default {
    components: {
      icon
    }
  }
</script>

<style scoped>
  .main {
    max-width: var(--max-width);
    margin: 0 auto;
    padding-bottom: 45px;
  }

  .hello {
    padding: 0 24px;

    p {
      margin-top: 36px;
    }

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
  }

  .portrait {
    width: 100%;
    position: relative;
    margin-top: 45px;

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
</style>
