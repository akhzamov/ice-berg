<script setup>

import { computed, onMounted } from "vue";
import { useMainStore } from "@/stores/main";
import HeaderContent from '@/components/HeaderContent/HeaderContent.vue'
import Services from '@/components/Services/Services.vue'
import PopularServices from '@/components/PopularServices/PopularServices.vue'
import About from '@/components/About/About.vue'
import Stats from '@/components/Stats/Stats.vue'
import Partners from '@/components/Partners/Partners.vue'
import OurWorks from "@/components/OurWorks/OurWorks.vue";
import ApplicationSection from "@/components/ApplicationSection/ApplicationSection.vue";
import Loader from "@/components/Loader/Loader.vue";
import ConsultationModal from "@/components/ConsultationModal/ConsultationModal.vue";
import { useHead } from "@vueuse/head";



const mainStore = useMainStore()


useHead({
  title: computed(() => 'Ice Berg BTL'),
  meta: [
    {
      name: "description",
      content: computed(() => 'Профессиональное агентство в сфере BTL-маркетинга, предоставляющее комплексные решения для продвижения вашего бизнеса.'),
    },
    {
      name: 'keywords',
      content: computed(() => "Рекламное агентство, Промоутерское агентство, Флаеры, Самоклеящаяся пленка, Flayerlar tarqatish, Samakleyka yopishtirish, Reklama Agentligi, Icebergbtl, ice berg btl, iceberg, ice berg")
    }
  ],
});

onMounted(() => {
  if (document.documentElement.clientWidth > 802) {
    setTimeout(() => {
      mainStore.modalOpen = true
      mainStore.consultationModal = true
    }, 30000);
  }

})
</script>

<template>
  <Loader v-if="mainStore.loader" />
  <ConsultationModal v-if="mainStore.modalOpen && mainStore.consultationModal" />
  <HeaderContent />
  <main class="main">
    <Services />
    <PopularServices />
    <Stats />
    <About />
    <Partners />
    <ApplicationSection />
    <OurWorks />
  </main>
</template>

<style scoped></style>