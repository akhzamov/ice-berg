<script setup>
import { useHead } from "@vueuse/head";
import { computed } from "vue";
import HeaderContent from '@/components/HeaderContent/HeaderContent.vue'
import Services from '@/components/Services/Services.vue'

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
  </main>
</template>

<style scoped></style>