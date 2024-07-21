<script setup>
import { ref } from 'vue'
import { useI18n } from "vue-i18n";
import { useRouter, useRoute } from "vue-router";
import Tr from "@/i18n/translation";
import LanguageIcon from '@/assets/images/language.svg'
import NorthEastIcon from '@/assets/images/north-east.svg'
import MenuIcon from '@/assets/images/menu.svg'
import CloseIcon from '@/assets/images/close.svg'
import LogoBlackICon from '@/assets/images/logo-black.svg'


const router = useRouter();
const supportedLocales = ref(Tr.supportedLocales);
const switchLanguage = ref(async (locale) => {
  const newLocale = locale;
  await Tr.switchLanguage(newLocale);
  try {
    await router.replace({ params: { locale: newLocale } });
    router.go(0);
  } catch (e) {
    console.log(e);
    router.push("/");
  }
});
let languageMenu = ref(false)
let burgerMenu = ref(false)
</script>

<template>
  <nav class="nav">
    <div class="container nav-content" @click="languageMenu = false" @mouseleave="languageMenu = false">
      <div class="nav-content__logo">
        <img :src="LogoBlackICon" alt="">
      </div>
      <ul class="nav-content__list" :class="{ active: burgerMenu }">
        <li class="nav-content__item">{{ $t('navbar.home') }}</li>
        <li class="nav-content__item">{{ $t('navbar.services') }}</li>
        <li class="nav-content__item">{{ $t('navbar.about') }}</li>
        <li class="nav-content__item">{{ $t('navbar.contacts') }}</li>
        <li class="nav-content__item language" @click.stop="languageMenu = true" @mouseenter="languageMenu = true">
          <img :src="LanguageIcon" alt="">
          <div class="nav-content__languages" v-if="languageMenu" @mouseleave="languageMenu = false">
            <div class="nav-content__languages-item" v-for="sLocale in supportedLocales" :key="`key-${sLocale}`"
              @click="switchLanguage(sLocale)">
              <span>{{ $t(`locale.${sLocale}`) }}</span>
              <img :src="NorthEastIcon" alt="">
            </div>
          </div>
        </li>
        <button class="nav-content__list-close" @click="burgerMenu = false">
          <img :src="CloseIcon" alt="">
        </button>
      </ul>
      <button class="nav-content__menu-btn" @click="burgerMenu = true">
        <img :src="MenuIcon" alt="">
      </button>

    </div>
  </nav>
</template>

<style scoped></style>