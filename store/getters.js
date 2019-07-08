import dayjs from 'dayjs'

export default {
  weathers: state => {
    return state.weathers.filter(weather => weather !== state.weather)
  },
  // 直近1年の記事を日付順に
  recentArticles: state => {
    const sortedArticles = state.articles.list
    return sortedArticles
      .filter(
        article =>
          Date.parse(new Date()) - article.date <
          (1000 * 60 * 60 * 24 * 365) / 2
      )
      .sort((a, b) => b.date - a.date)
      .map(item => {
        item.dateText = dayjs(new Date(item.date)).format('YYYY.MM.DD')
        return item
      })
  }
}
