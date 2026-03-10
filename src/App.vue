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
      <v-sheet height="400" color="blue-lighten-4" class="d-flex align-center justify-center text-center">
        <v-container>
          <h1 class="text-h3 font-weight-bold mb-4">{{ $t('hero.title') }}</h1>
          <p class="text-h6 mb-6">{{ $t('hero.subtitle') }}</p>
          <v-btn size="large" color="primary" rounded="xl" elevation="2">
            {{ $t('hero.btn') }}
          </v-btn>
        </v-container>
      </v-sheet>

      <v-container id="details" class="py-12 text-center">
        <h2 class="text-h4 mb-4">{{ $t('nav.details') }}</h2>
        <p>（呢度可以放活動詳情內容...）</p>
      </v-container>
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
