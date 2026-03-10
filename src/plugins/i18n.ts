import { createI18n } from 'vue-i18n'

const messages = {
  en: {
    nav: { details: 'Details' },
    hero: { title: 'Walkathon 2027', subtitle: 'Walking for future', btn: 'Join Us' }
  },
  zh: {
    nav: { details: '活動詳情' },
    hero: { title: '2027 步行籌款', subtitle: '為未來而行', btn: '立即參加' }
  }
}

const i18n = createI18n({
  legacy: false, // 呢行一定要有
  locale: 'zh',
  fallbackLocale: 'en',
  messages,
})

export default i18n
