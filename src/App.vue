<template>
  <v-app shadow>
    <v-app-bar color="primary" elevation="1" app>
      <v-app-bar-nav-icon @click="drawer = !drawer" class="d-md-none" />
      <v-toolbar-title class="font-weight-bold">{{ $t('hero.title') }}</v-toolbar-title>
      <v-spacer />
      
      <div class="d-none d-md-flex">
        <v-btn variant="text" @click="scrollTo('#details')">{{ $t('nav.details') }}</v-btn>
        <v-btn variant="text" @click="scrollTo('#route')">{{ $t('nav.route') }}</v-btn>
      </div>

      <v-btn icon @click="toggleLang" class="ml-2">
        <v-icon>mdi-translate</v-icon>
      </v-btn>
    </v-app-bar>

    <v-navigation-drawer v-model="drawer" temporary>
      <v-list>
        <v-list-item @click="scrollTo('#details')" :title="$t('nav.details')" />
        <v-list-item @click="scrollTo('#route')" :title="$t('nav.route')" />
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
          class="align-center text-center text-white w-100"
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

      <v-container id="details" class="py-16 text-center">
        <h2 class="text-h4 mb-6 font-weight-bold">{{ $t('nav.details') }}</h2>
        <v-row justify="center">
          <v-col cols="12" md="8">
            <p class="text-body-1 text-grey-darken-1">（呢度可以放活動詳情內容...）</p>
          </v-col>
        </v-row>
      </v-container>

      <v-container id="route" class="py-16">
        <h2 class="text-h4 text-center mb-12 font-weight-bold">{{ $t('route.title') }}</h2>
        <v-timeline align="start">
          <v-timeline-item dot-color="green" size="small">
            <template v-slot:opposite> {{ $t('route.step1.time') }} </template>
            <div class="mb-4">
              <div class="text-h6 font-weight-bold">{{ $t('route.step1.name') }}</div>
              <p class="text-body-2 text-grey-darken-1">{{ $t('route.step1.desc') }}</p>
            </div>
          </v-timeline-item>
          
          <v-timeline-item dot-color="blue" size="small">
            <template v-slot:opposite> {{ $t('route.step2.time') }} </template>
            <div class="mb-4">
              <div class="text-h6 font-weight-bold">{{ $t('route.step2.name') }}</div>
              <p class="text-body-2 text-grey-darken-1">{{ $t('route.step2.desc') }}</p>
            </div>
          </v-timeline-item>
        </v-timeline>
      </v-container>

      <v-container id="map" class="py-16">
        <h2 class="text-h4 text-center mb-10 font-weight-bold">{{ $t('map.title') }}</h2>
        <v-card elevation="8" class="rounded-lg overflow-hidden mx-auto" style="max-width: 900px;">
          <v-responsive :aspect-ratio="16/9">
            <iframe src="https://www.google.com/maps/d/embed?mid=1mhgIDCgasQXd1yb3w8KG3mldgNI1ToM&usp&noprof=1" width="100%" height="100%" style="border:0;" allowfullscreen loading="lazy"></iframe>
          </v-responsive>
          <v-card-actions class="pa-4 bg-white">
            <v-icon color="primary" class="mr-2">mdi-information-outline</v-icon>
            <span class="text-caption">{{ $t('map.tip') }}</span>
            <v-spacer />
            <v-btn variant="text" color="primary" prepend-icon="mdi-map-marker" href="https://maps.google.com" target="_blank">{{ $t('map.openBtn') }}</v-btn>
          </v-card-actions>
        </v-card>
      </v-container>

      <v-container class="py-16">
        <v-row justify="center">
          <v-col cols="12" md="10" lg="8">
            <h2 class="text-h4 text-center mb-10 font-weight-bold">{{ $t('video.title') }}</h2>
      
            <v-responsive :aspect-ratio="16/9" class="elevation-12 rounded-lg overflow-hidden">
            <iframe
              width="100%"
              height="100%"
              src="https://www.youtube.com/embed/jANEtHV4K90?rel=0"
              title="YouTube video player"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowfullscreen
            ></iframe>
            </v-responsive>
          </v-col>
        </v-row>
      </v-container>

      <v-sheet color="grey-lighten-4" class="py-16">
        <v-container>
          <p class="text-center text-overline mb-8 text-grey">{{ $t('sponsors.title') }}</p>
          <v-row align="center" justify="center" class="opacity-60">
            <v-col v-for="n in 4" :key="n" cols="6" sm="3" md="2" class="text-center">
              <v-icon size="64" color="grey-darken-1">mdi-school</v-icon>
            </v-col>
          </v-row>
        </v-container>
      </v-sheet>

      <v-footer class="bg-blue-grey-darken-4 text-white py-12">
        <v-container>
          <v-row>
            <v-col cols="12" md="4" class="mb-8 mb-md-0">
              <div class="text-h6 mb-4 font-weight-bold">ABC School</div>
              <p class="text-body-2 mb-2">
                <v-icon size="small" class="mr-2">mdi-map-marker</v-icon>
                {{ $t('footer.addrLabel') }}{{ $t('footer.address') }}
              </p>
              <p class="text-body-2">
                <v-icon size="small" class="mr-2">mdi-phone</v-icon>
                {{ $t('footer.tel') }}
              </p>
            </v-col>
            <v-col cols="12" md="4" class="mb-8 mb-md-0">
              <div class="text-h6 mb-4 font-weight-bold">{{ $t('footer.links') }}</div>
              <v-btn variant="plain" size="small" class="px-0 mb-2 d-block text-capitalize text-left">
                <v-icon size="small" class="mr-2">mdi-earth</v-icon>
                {{ $t('footer.schoolWeb') }}
              </v-btn>
              <v-btn variant="plain" size="small" class="px-0 d-block text-capitalize text-left">
                <v-icon size="small" class="mr-2">mdi-shield-check</v-icon>
                {{ $t('footer.privacy') }}
              </v-btn>
            </v-col>
            <v-col cols="12" md="4" class="text-center">
              <v-avatar size="100" class="mb-4 bg-white">
                <v-img src="https://via.placeholder.com/100?text=LOGO" alt="School Logo"></v-img>
              </v-avatar>
              <div class="text-caption text-grey-lighten-1">
                &copy; 2027 ABC School Walkathon.<br>All Rights Reserved.
              </div>
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
    // 64px 係導航欄的高度
    window.scrollTo({ top: el.offsetTop - 64, behavior: 'smooth' })
  }
  drawer.value = false
}
</script>

<style scoped>
/* 修正 Padding 問題：確保 Hero Image 貼邊 */
.v-main {
  padding-top: 0 !important;
}
.w-100 {
  width: 100% !important;
}
/* 讓導航按鈕點擊時更有質感 */
.text-left {
  text-align: left !important;
  justify-content: flex-start !important;
}
</style>
