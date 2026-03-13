import { createI18n } from 'vue-i18n'

const messages = {
  en: {
    nav: { 
      details: 'Together we dream, together we build',
      renovation: 'School Renovation Project',
      route: 'Route' ,
      map: 'Map',
      video: 'Promotional Video'
    },
    details:{ 
      caption01: 'For a century, under the stewardship of the Salesian Society, St. Louis School has continuously journeyed alongside our youth. Our Founder St. John Bosco’s profound “Dream at Nine” kindled a lifelong mission for the young. Over these hundred years, generations of devoted priests and educators have carried this dream forward. Nurturing our students with loving-kindness, they have cultivated the seeds of Scientia et Pietas deep within the heart of every Aloysian.',
      caption02: 'Standing at this centenary milestone, we continue to uphold the Preventive System of Education as our guiding compass. Rooted in this visionary legacy, we embrace the future with innovation. As we unite all staff, students, and alumni, let us honour our theme: “Together we dream, together we build”. Through this shared endeavour, we will carry the Aloysian spirit forward and write the next glorious chapter together.',
      caption03: 'The 2027 School Walkathon will be held on X X, 2027. All students, teachers, and parents are encouraged to join us for a day of fun and fundraising!' },
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
    },
    video: { title: 'promotional video'},
    map: { 
      title: 'Route Map',
      tip: 'Tip: Zoom to view Checkpoints',
      openBtn: 'Open in Google Maps'
    }
  },
  zh: {
    nav: { 
      details: '百載同行  弘夢鼎新',
      renovation: '校舍翻新工程',
      route: '活動路線',
      map: '路線地圖',
      video: '活動宣傳片'
    },
    details: { 
      caption01: '自慈幼會承命百載，聖類斯與莘莘學子攜手同行。昔日會祖聖鮑思高神父的「九歲奇夢」，點燃了奉獻青年教育的明燈；世紀以來，無數神長與老師承傳此夢，深耕學子心田，以『學問與虔誠』為養分，化雨春風，培育代代樑木。',
      caption02: '欣逢百週年慶典，我校繼續恪守『預防教育法』之遺訓，在先賢的根基上弘揚奇夢，矢志鼎新。願藉此慶典，凝聚師生校友之情誼，讓我們繼續同心築夢，共創新猷，使聖類斯精神薪火相傳，共譜輝煌新章。',
      caption03: '2027 學校步行籌款活動將於 2027 年 X 月 X 日舉行，歡迎全校師生及家長踴躍參加！'},
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
    },
    video: { title: '活動宣傳片'},
    map: { 
      title: '路線地圖',
      tip: '提示：可縮放查看詳細站點',
      openBtn: '開啟 Google 地圖'
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
