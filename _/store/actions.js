import getLigblog from '~/assets/js/services/get-ligblog';
import getQiita from '~/assets/js/services/get-qiita';

export const getArticles = async ({ commit }) => {
  const ligblogArticles = await getLigblog();
  const qiitaArticles = await getQiita();
  commit('setArticles', [ ...ligblogArticles, ...qiitaArticles ]);
};
