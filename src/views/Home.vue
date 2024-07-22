<script setup>
import { useHead } from "@vueuse/head";
import { computed } from "vue";
import HeaderContent from '@/components/HeaderContent/HeaderContent.vue'
import Services from '@/components/Services/Services.vue'
import PopularServices from '@/components/PopularServices/PopularServices.vue'
import About from '@/components/About/About.vue'
import Stats from '@/components/Stats/Stats.vue'
import Partners from '@/components/Partners/Partners.vue'
import OurWorks from "@/components/OurWorks/OurWorks.vue";

useHead({
  title: computed(() => 'Ice Berg BTL'),
  meta: [
    {
      name: "description",
      content: computed(() => 'Ice Berg BTL agency website'),
    },
  ],
});
</script>

<template>
  <HeaderContent />
  <main class="main">
    <Services />
    <PopularServices />
    <Stats />
    <Partners />
    <OurWorks />
  </main>
</template>

<style scoped></style>