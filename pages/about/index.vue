<template>
  <div>
    <main class="main">
      <section class="hello">
        <h2>Hello,</h2>
        <div class="portrait">
          <img src="/images/portrait.png">
        </div>
        <p>
          1993年、京都府生まれ。映像制作に興味を持ち浪人を経て大学に入学するも、HTMLを書き始める。
          あれよあれよとWebサイトを作れるようになり、作ったものが世に出て人に見られる快感に溺れる。<br>
          学祭や展示会の告知サイト、ちょっとした受託業務をこなすうちに、株式会社LIGにフロントエンドエンジニアとして就職。
        </p>
        <p>
          器用貧乏型ジェネラリストで、技術に特化はしてませんがプロジェクト全体を見て立ち回ることが得意です。<br>
          3Dよりも2D、アニメーションゴリゴリよりAjaxゴリゴリの方が好きです（比喩）。
        </p>
      </section>
      <section class="history">
        <h2>History</h2>
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

<style lang="scss" scoped>
  .main {
    max-width: var(--max-width);
    margin: 0 auto;
    padding-bottom: 45px;
  }

  .hello {
    padding: 0 24px;

    h2 {
      font-size: 56px;
      font-weight: bold;
      padding: 36px 0 0;
    }

    p {
      margin-top: 32px;
    }
  }

  .portrait {
    width: 100%;
    position: relative;

    img {
      width: 100%;
      position: absolute;
      z-index: 1;
      top: 0;
      left: 0;
      mix-blend-mode: screen;
    }

    &::before {
      content: '';
      display: block;
      width: 100%;
      padding-top: 42.9%;
      background-color: #1B3E91;
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
        }
      }


      dd {
        font-size: 14px;
      }
    }
  }
</style>
