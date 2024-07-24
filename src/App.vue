<script setup>
import Navbar from './components/Navbar/Navbar.vue';
import Footer from './components/Footer/Footer.vue'
import ApplicationModal from './components/ApplicationModal/ApplicationModal.vue';
import SuccessModal from './components/SuccessModal/SuccessModal.vue';
import ErrorModal from './components/ErrorModal/ErrorModal.vue';
import { useMainStore } from './stores/main';

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