import { createI18n } from 'vue-i18n'

const messages = {
  en: {
    nav: { details: 'Details', route: 'Route' },
    hero: { 
      title: 'School Walkathon 2027', 
      subtitle: 'Walking together for a better future',
      btn: 'Donate Now' 
    },
    route: {
      title: 'Activity Route',
      step1: { time: '09:00 AM', name: 'School Assembly', desc: 'Start from Main Entrance' },
      step2: { time: '10:30 AM', name: 'Promenade', desc: 'Checkpoint 1: Water Station' }
    },
    sponsors: { title: 'Supported By' },
    footer: {
      addrLabel: 'Address: ',
      address: '123 Sample St, Hong Kong',
      tel: 'Tel: (852) 1234 5678',
      links: 'Quick Links',
      schoolWeb: 'School Website',
      privacy: 'Privacy Policy'
    }
  },
  zh: {
    nav: { details: '活動詳情', route: '活動路線' },
    hero: { 
      title: '2027 學校步行籌款', 
      subtitle: '攜手同行，共創未來',
      btn: '立即捐款' 
    },
    route: {
      title: '活動路線',
      step1: { time: '09:00 上午', name: '校舍集合', desc: '於學校正門出發' },
      step2: { time: '10:30 上午', name: '海濱長廊', desc: '第一站：補給水站' }
    },
    sponsors: { title: '支持機構' },
    footer: {
      addrLabel: '地址：',
      address: '香港某某區某某街 123 號',
      tel: '電話：(852) 1234 5678',
      links: '快速連結',
      schoolWeb: '學校官網',
      privacy: '隱私政策'
    }
  }
}

const i18n = createI18n({
  legacy: false, // 呢行一定要有
  locale: 'zh',
  fallbackLocale: 'en',
  messages,
})

export default i18n
