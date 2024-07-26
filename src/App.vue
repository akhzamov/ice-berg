<script setup>
import { computed, onMounted } from 'vue';
import Navbar from './components/Navbar/Navbar.vue';
import Footer from './components/Footer/Footer.vue'
import ApplicationModal from './components/ApplicationModal/ApplicationModal.vue';
import SuccessModal from './components/SuccessModal/SuccessModal.vue';
import ErrorModal from './components/ErrorModal/ErrorModal.vue';
import { useMainStore } from './stores/main';
import { useHead } from "@vueuse/head";
import Trans from './i18n/translation'

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

onMounted(async () => {
    const initialLocale = Trans.guessDefaultLocale()
    await Trans.switchLanguage(initialLocale)
})

const mainStore = useMainStore()
</script>

<template>
    <Navbar />
    <router-view />
    <Footer />
    <ApplicationModal v-if="mainStore.modalOpen && mainStore.applicationModalActive" />
    <SuccessModal v-if="mainStore.modalOpen && mainStore.successModalActive" />
    <ErrorModal v-if="mainStore.modalOpen && mainStore.errorModalActive" />
</template>

<style scoped></style>