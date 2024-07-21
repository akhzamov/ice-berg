<script setup>
import DownloadIcon from '@/assets/images/download.svg'
import HeaderContentImage from '@/assets/images/header-content-image.png'
</script>

<template>
    <div class="container header-content">
        <div class="header-content__block">
            <h1 class="header-content__block-title">
                {{ $t('header-content.title') }}
            </h1>
            <div class="header-content__block-bottom">
                <button class="header-content__block-bottom-req">
                    {{ $t('header-content.application-button') }}
                </button>
                <a class="header-content__block-bottom-download" href="../../../public/favicon.ico" download="icon">
                    <span class="icon">
                        <img :src="DownloadIcon" alt="">
                    </span>
                    <span class="text">
                        {{ $t('header-content.download-button') }}
                    </span>
                </a>
            </div>
        </div>
        <div class="header-content__image">
            <img :src="HeaderContentImage" alt="">
        </div>
    </div>
</template>

<style scoped></style>