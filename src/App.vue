<template>
  <v-app shadow>
    <v-app-bar color="primary" elevation="1" app>
      <v-app-bar-nav-icon @click="drawer = !drawer" class="d-md-none" />
      <v-toolbar-title class="font-weight-bold">{{ $t('hero.title') }}</v-toolbar-title>
      <v-spacer />
      
      <div class="d-none d-md-flex">
        <v-btn variant="text" @click="scrollTo('#details')">{{ $t('nav.details') }}</v-btn>
        <v-btn variant="text" @click="scrollTo('#interactive-map')">{{ $t('nav.renovation') }}</v-btn>
        <v-btn variant="text" @click="scrollTo('#route')">{{ $t('nav.route') }}</v-btn>
        <v-btn variant="text" @click="scrollTo('#map')">{{ $t('nav.map') }}</v-btn>
        <v-btn variant="text" @click="scrollTo('#video')">{{ $t('nav.video') }}</v-btn>
      </div>

      <v-btn icon @click="toggleLang" class="ml-2">
        <v-icon>mdi-translate</v-icon>
      </v-btn>
    </v-app-bar>

    <v-navigation-drawer v-model="drawer" temporary>
      <v-list>
        <v-list-item @click="scrollTo('#details')" :title="$t('nav.details')" />
        <v-list-item @click="scrollTo('#interactive-map')" :title="$t('nav.renovation')" />
        <v-list-item @click="scrollTo('#route')" :title="$t('nav.route')" />
        <v-list-item @click="scrollTo('#map')" :title="$t('nav.map')" />
        <v-list-item @click="scrollTo('#video')" :title="$t('nav.video')" />
        <v-divider />
        <v-list-item 
          prepend-icon="mdi-translate" 
          @click="toggleLang" 
          :title="locale === 'zh' ? 'English' : '中文'" 
        />
      </v-list>
    </v-navigation-drawer>

    <v-main>
      <v-carousel height="500" hide-delimiter-background show-arrows="hover" cycle :interval="7500" class="w-100"
        hide-delimiters transition="fade" reverse-transition="fade">
        <template v-slot:default>
          <v-carousel-item v-for="(photo, index) in photos" :key="index" :src="photo" cover
            transition="fade-transition"></v-carousel-item>

          <div class="fill-height d-flex align-center justify-center w-100"
            style="background: rgba(0,0,0,0.3); position: absolute; top: 0; left: 0; z-index: 2;">
            <v-container class="text-center text-white">
              <h1 class="text-h2 font-weight-bold mb-4 animate__animated animate__fadeInDown">
                {{ $t('hero.title') }}
              </h1>
              <p class="text-h5 mb-8">{{ $t('hero.subtitle') }}</p>

              <v-btn size="x-large" color="secondary" rounded="xl" elevation="4" class="px-8 ma-2 pulse-btn"
                href="https://docs.google.com/forms/d/e/1FAIpQLSciOMbBYIwiTUIwAxVXPeHMU5StFFE_Lkb-VV4AnI0hn6P3Ag/viewform?usp=header"
                target="_blank">
                <v-icon start>mdi-upload</v-icon>
                {{ $t('hero.btn') }}
              </v-btn>
            </v-container>
          </div>
        </template>
      </v-carousel>

      <v-container id="details" class="py-16 text-center">
        <h2 class="text-h4 mb-6 font-weight-bold">{{ $t('nav.details') }}</h2>
        <v-row justify="center">
          <v-col cols="12" md="8">
            <p class="text-body-1 text-grey-darken-1">{{ $t('details.caption01') }}</p>
            <p class="text-body-1 text-grey-darken-1">{{ $t('details.caption02') }}</p>
            <p class="text-body-1 text-grey-darken-1">{{ $t('details.caption03') }}</p>
          </v-col>
        </v-row>
      </v-container>

      <v-sheet color="grey-lighten-5" class="py-16" id="interactive-map">
        <v-container>
          <h2 class="text-h4 text-center mb-10 font-weight-bold">{{ $t('nav.renovation') }}</h2>
          <div class="interactive-map-wrapper mx-auto elevation-10 rounded-lg bg-white">

            <v-img :src="schoolMapImg" cover class="w-100 base-map"></v-img>

            <div v-for="spot in hotspots" :key="spot.id" class="hotspot-trigger"
              :style="{ top: spot.top, left: spot.left }">
              <v-btn icon size="small" color="primary" class="marker-pulse-effect" @click="openSpot(spot)">
                <span class="text-button font-weight-black">{{ spot.id }}</span>
              </v-btn>
            </div>
          </div>
        </v-container>
      </v-sheet>

      <v-dialog v-model="dialog" max-width="1000" transition="dialog-bottom-transition" scrollable>
        <v-card v-if="activeSpot" class="rounded-xl overflow-hidden">
          <v-toolbar color="primary" dark flat>
            <v-toolbar-title class="font-weight-bold">{{ activeSpot.name }}</v-toolbar-title>
            <v-spacer></v-spacer>
            <v-btn icon @click="dialog = false">
              <v-icon>mdi-close</v-icon>
            </v-btn>
          </v-toolbar>

          <v-card-text class="pa-2 bg-grey-lighten-4" style="max-height: 70vh;">
            <v-img :src="activeSpot.img" class="rounded-lg w-100" style="height: auto;"></v-img>

            <div v-if="activeSpot.description" class="pa-4 text-body-1">
              {{ activeSpot.description }}
            </div>
          </v-card-text>

          <v-divider></v-divider>

          <v-card-actions class="bg-white justify-center py-4">
            <v-btn color="primary" variant="tonal" rounded="xl" @click="dialog = false" class="px-8">
              {{ locale === 'zh' ? '關閉視窗' : 'Close' }}
            </v-btn>
          </v-card-actions>
        </v-card>
      </v-dialog>

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
            <v-btn variant="text" color="primary" prepend-icon="mdi-map-marker" href="#" target="_blank">{{ $t('map.openBtn') }}</v-btn>
          </v-card-actions>
        </v-card>
      </v-container>

      <v-container class="py-16" id="video">
        <v-row justify="center">
          <v-col cols="12" md="10" lg="8">
            <h2 class="text-h4 text-center mb-10 font-weight-bold">{{ $t('video.title') }}</h2>
            <v-responsive :aspect-ratio="16/9" class="elevation-12 rounded-lg overflow-hidden">
              <iframe width="100%" height="100%" src="https://www.youtube.com/embed/jANEtHV4K90?rel=0" frameborder="0" allowfullscreen></iframe>
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
import schoolMapImg from '@/assets/school-map.png'

const { locale } = useI18n()
const drawer = ref(false)

// 控制彈窗
const dialog = ref(false)
const activeSpot = ref<any>(null)

const toggleLang = () => { locale.value = locale.value === 'zh' ? 'en' : 'zh' }

const scrollTo = (id: string) => {
  const el = document.querySelector(id) as HTMLElement | null
  if (el) window.scrollTo({ top: el.offsetTop - 64, behavior: 'smooth' })
  drawer.value = false
}

// 點擊標記點的動作
const openSpot = (spot: any) => {
  activeSpot.value = spot
  dialog.value = true
}

const photos = [
  new URL('@/assets/cover-01.jpg', import.meta.url).href,
  new URL('@/assets/cover-02.jpg', import.meta.url).href,
  new URL('@/assets/cover-03.jpg', import.meta.url).href,
  new URL('@/assets/cover-04.jpg', import.meta.url).href,
  new URL('@/assets/cover-05.jpg', import.meta.url).href,
  new URL('@/assets/cover-06.jpg', import.meta.url).href,
  new URL('@/assets/cover-07.jpg', import.meta.url).href,
]

// 互動地圖座標數據
const hotspots = ref([
  { id: 'A', name: 'Block A Restoration (Completed)', top: '43%', left: '84%', img: new URL('@/assets/hover-a.png', import.meta.url).href },
  { id: 'B', name: 'MMLL Transformation (Planned)', top: '36%', left: '69%', img: new URL('@/assets/hover-b.png', import.meta.url).href },
  { id: 'C', name: 'Indoor Activity Center Improvements', top: '31%', left: '36%', img: new URL('@/assets/hover-c.png', import.meta.url).href },
  { id: 'D1', name: 'Classroom Modernization (Planned)', top: '43%', left: '53%', img: new URL('@/assets/hover-d.png', import.meta.url).href },
  { id: 'D2', name: 'Classroom Modernization (South Wing)', top: '75%', left: '22%', img: new URL('@/assets/hover-d.png', import.meta.url).href },
])
</script>

<style scoped>
.v-main { padding-top: 0 !important; }
.w-100 { width: 100% !important; }
.text-left { text-align: left !important; justify-content: flex-start !important; }

/* Carousel Cross-fade */
:deep(.v-window-item--active) { transition: opacity 1.5s ease-in-out !important; }
:deep(.v-window__container) { transition: none !important; }

/* Interactive Map Styles */
.interactive-map-wrapper { position: relative; max-width: 1000px; width: 100%; }
.hotspot-trigger { position: absolute; transform: translate(-50%, -50%); z-index: 5; }
.marker-pulse-effect { animation: marker-glow 2s infinite; border: 2px solid white !important; }

@keyframes marker-glow {
  0% { box-shadow: 0 0 0 0 rgba(var(--v-theme-primary), 0.8); }
  70% { box-shadow: 0 0 0 15px rgba(var(--v-theme-primary), 0); }
  100% { box-shadow: 0 0 0 0 rgba(var(--v-theme-primary), 0); }
}

/* Pulse Button Styles ... (保持你原本的 CSS) */
.pulse-btn { animation: pulse 2s infinite; transform-origin: center center; }
@keyframes pulse {
  0% { box-shadow: 0 0 0 0 rgba(var(--v-theme-secondary), 0.7); transform: scale(1); }
  70% { box-shadow: 0 0 0 15px rgba(var(--v-theme-secondary), 0); transform: scale(1.03); }
  100% { box-shadow: 0 0 0 0 rgba(var(--v-theme-secondary), 0); transform: scale(1); }
}

/* 確保彈出的圖片唔會大過個螢幕 */
.v-card img {
  max-width: 100%;
  height: auto !important;
  /* 強制保持比例 */
  display: block;
}

/* 美化 Dialog 入面的捲軸 (Chrome/Safari) */
:deep(.v-card-text::-webkit-scrollbar) {
  width: 8px;
}

:deep(.v-card-text::-webkit-scrollbar-track) {
  background: #f1f1f1;
}

:deep(.v-card-text::-webkit-scrollbar-thumb) {
  background: #888;
  border-radius: 4px;
}

:deep(.v-card-text::-webkit-scrollbar-thumb:hover) {
  background: #555;
}
</style>
