<template>
  <v-app>
    <v-app-bar color="primary" elevation="1">
      <v-app-bar-nav-icon @click="drawer = !drawer" class="d-md-none" />
      <v-toolbar-title class="font-weight-bold">{{ $t('hero.title') }}</v-toolbar-title>
      <v-spacer />
      
      <div class="d-none d-md-flex">
        <v-btn variant="text" @click="scrollTo('#details')">{{ $t('nav.details') }}</v-btn>
      </div>

      <v-btn icon @click="toggleLang" class="ml-2">
        <v-icon>mdi-translate</v-icon>
      </v-btn>
    </v-app-bar>

    <v-navigation-drawer v-model="drawer" temporary>
      <v-list>
        <v-list-item @click="scrollTo('#details')" :title="$t('nav.details')" />
        <v-divider />
        <v-list-item 
          prepend-icon="mdi-translate" 
          @click="toggleLang" 
          :title="locale === 'zh' ? 'English' : '中文'" 
        />
      </v-list>
    </v-navigation-drawer>

    <v-main>
<v-hover v-slot="{ isHovering, props }">
  <v-img
    v-bind="props"
    src="https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&q=80" 
    height="500"
    cover
    class="align-center text-center text-white"
  >
    <div class="fill-height d-flex align-center justify-center" style="background: rgba(0,0,0,0.4)">
      <v-container>
        <h1 class="text-h2 font-weight-bold mb-4 animate__animated animate__fadeInDown">
          {{ $t('hero.title') }}
        </h1>
        <p class="text-h5 mb-8">{{ $t('hero.subtitle') }}</p>
        <v-btn size="x-large" color="primary" rounded="xl" elevation="4" class="px-8">
          {{ $t('hero.btn') }}
        </v-btn>
      </v-container>
    </div>
  </v-img>
</v-hover>


      <v-container id="details" class="py-12 text-center">
        <h2 class="text-h4 mb-4">{{ $t('nav.details') }}</h2>
        <p>（呢度可以放活動詳情內容...）</p>
      </v-container>

      <v-container id="route" class="py-12">
  <h2 class="text-h4 text-center mb-10 font-weight-bold">{{ isZh ? '活動路線' : 'Route' }}</h2>
  <v-timeline align="start">
    <v-timeline-item dot-color="green" size="small">
      <template v-slot:opposite> 09:00 AM </template>
      <div>
        <div class="text-h6">{{ isZh ? '校舍集合' : 'School Assembly' }}</div>
        <p>Start from Main Entrance</p>
      </div>
    </v-timeline-item>
    
    <v-timeline-item dot-color="blue" size="small">
      <template v-slot:opposite> 10:30 AM </template>
      <div>
        <div class="text-h6">{{ isZh ? '海濱長廊' : 'Promenade' }}</div>
        <p>Checkpoint 1: Water Station</p>
      </div>
    </v-timeline-item>
  </v-timeline>
</v-container>

<v-sheet color="grey-lighten-4" class="py-12">
  <v-container>
    <p class="text-center text-overline mb-6">{{ isZh ? '支持機構' : 'Supported By' }}</p>
    <v-row align="center" justify="center" class="opacity-60">
      <v-col v-for="n in 4" :key="n" cols="4" md="2" class="text-center">
        <v-icon size="64">mdi-school</v-icon>
      </v-col>
    </v-row>
  </v-container>
</v-sheet>

<v-footer class="bg-blue-grey-darken-4 text-white py-10">
  <v-container>
    <v-row>
      <v-col cols="12" md="4">
        <div class="text-h6 mb-4">ABC School</div>
        <p class="text-body-2">{{ isZh ? '地址：香港某某區某某街 123 號' : 'Address: 123 Sample St, Hong Kong' }}</p>
        <p class="text-body-2">Tel: (852) 1234 5678</p>
      </v-col>
      <v-col cols="12" md="4">
        <div class="text-h6 mb-4">{{ isZh ? '快速連結' : 'Quick Links' }}</div>
        <v-btn variant="text" size="small" block class="justify-start">School Web</v-btn>
        <v-btn variant="text" size="small" block class="justify-start">Privacy Policy</v-btn>
      </v-col>
      <v-col cols="12" md="4" class="text-center">
        <v-avatar size="80" class="mb-4">
          <v-img src="https://via.placeholder.com/80?text=LOGO" alt="School Logo"></v-img>
        </v-avatar>
        <div class="text-caption">© 2027 ABC School Walkathon. All Rights Reserved.</div>
      </v-col>
    </v-row>
  </v-container>
</v-footer>

    </v-main>
  </v-app>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { useI18n } from 'vue-i18n'

const { locale } = useI18n()
const drawer = ref(false)

const toggleLang = () => {
  locale.value = locale.value === 'zh' ? 'en' : 'zh'
}

const scrollTo = (id: string) => {
  const el = document.querySelector(id) as HTMLElement | null
  if (el) {
    window.scrollTo({ top: el.offsetTop - 64, behavior: 'smooth' })
  }
  drawer.value = false
}
</script>
