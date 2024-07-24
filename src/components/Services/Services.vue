<script setup>
import { reactive } from 'vue'
import { Swiper, SwiperSlide } from 'swiper/vue';
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination } from 'swiper/modules';
import flayerIcon from '@/assets/images/services/flayer-icon.svg'
import selfStickIcon from '@/assets/images/services/self-stick-icon.svg'
import applicationIcon from '@/assets/images/services/application-icon.svg'
import promotionIcon from '@/assets/images/services/promotion-icon.svg'
import adIcon from '@/assets/images/services/ad-icon.svg'
import developmentIcon from '@/assets/images/services/development-icon.svg'

const modules = reactive([Pagination])
const breakpoints = reactive({
    '320': {
        slidesPerView: 1,
        spaceBetween: 10,
    },
    '340': {
        slidesPerView: 2,
        spaceBetween: 20,
    },
    '440': {
        slidesPerView: 2,
        spaceBetween: 30,
    },
    '540': {
        slidesPerView: 2,
        spaceBetween: 30,
    },
    '640': {
        slidesPerView: 2,
        spaceBetween: 30,
    },
    '768': {
        slidesPerView: 3,
        spaceBetween: 40,
    },
    '1024': {
        slidesPerView: 3,
        spaceBetween: 40,
    },
    '1240': {
        slidesPerView: 4,
        spaceBetween: 40,
    },
    '1440': {
        slidesPerView: 5,
        spaceBetween: 40,
    },
})
</script>

<template>
    <section class="services" id="services">
        <h3 class="services__title">
            {{ $t('services.title') }}
        </h3>
        <swiper :slidesPerView="'auto'" :centeredSlides="true" :spaceBetween="60" :pagination="{
            clickable: true,
        }" :modules="modules" :loop="true" class="services__swiper">
            <swiper-slide class="services__swiper-slide">
                <div class="services__swiper-slide-content">
                    <div class="services__swiper-slide-icon">
                        <div class="services__swiper-slide-icon-bg">
                            <img :src="flayerIcon" alt="">
                        </div>
                    </div>
                    <h3 class="services__swiper-slide-title">
                        {{ $t('services.service-1.title') }}
                    </h3>
                    <div class="services__swiper-slide-info">
                        <p class="services__swiper-slide-text">
                            {{ $t('services.service-1.text-1') }}
                        </p>
                        <p class="services__swiper-slide-text">
                            {{ $t('services.service-1.text-2') }}
                        </p>
                        <p class="services__swiper-slide-text">
                            {{ $t('services.service-1.text-3') }}
                        </p>
                        <p class="services__swiper-slide-text">
                            {{ $t('services.service-1.text-4') }}
                        </p>
                    </div>
                </div>
            </swiper-slide>
            <swiper-slide class="services__swiper-slide">
                <div class="services__swiper-slide-content">
                    <div class="services__swiper-slide-icon">
                        <div class="services__swiper-slide-icon-bg">
                            <img :src="selfStickIcon" alt="">
                        </div>
                    </div>
                    <h3 class="services__swiper-slide-title">
                        {{ $t('services.service-2.title') }}
                    </h3>
                    <div class="services__swiper-slide-info">
                        <p class="services__swiper-slide-text">
                            {{ $t('services.service-2.text-1') }}
                        </p>
                        <p class="services__swiper-slide-text">
                            {{ $t('services.service-2.text-2') }}
                        </p>
                        <p class="services__swiper-slide-text">
                            {{ $t('services.service-2.text-3') }}
                        </p>
                        <p class="services__swiper-slide-text">
                            {{ $t('services.service-2.text-4') }}
                        </p>
                    </div>
                </div>
            </swiper-slide>
            <swiper-slide class="services__swiper-slide">
                <div class="services__swiper-slide-content">
                    <div class="services__swiper-slide-icon">
                        <div class="services__swiper-slide-icon-bg">
                            <img :src="applicationIcon" alt="">
                        </div>
                    </div>
                    <h3 class="services__swiper-slide-title">
                        {{ $t('services.service-3.title') }}
                    </h3>
                    <div class="services__swiper-slide-info">
                        <p class="services__swiper-slide-text">
                            {{ $t('services.service-3.text-1') }}
                        </p>
                        <p class="services__swiper-slide-text">
                            {{ $t('services.service-3.text-2') }}
                        </p>
                        <p class="services__swiper-slide-text">
                            {{ $t('services.service-3.text-3') }}
                        </p>
                        <p class="services__swiper-slide-text">
                            {{ $t('services.service-3.text-4') }}
                        </p>
                    </div>
                </div>
            </swiper-slide>
            <swiper-slide class="services__swiper-slide">
                <div class="services__swiper-slide-content">
                    <div class="services__swiper-slide-icon">
                        <div class="services__swiper-slide-icon-bg">
                            <img :src="promotionIcon" alt="">
                        </div>
                    </div>
                    <h3 class="services__swiper-slide-title">
                        {{ $t('services.service-4.title') }}
                    </h3>
                    <div class="services__swiper-slide-info">
                        <p class="services__swiper-slide-text">
                            {{ $t('services.service-4.text-1') }}
                        </p>
                        <p class="services__swiper-slide-text">
                            {{ $t('services.service-4.text-2') }}
                        </p>
                        <p class="services__swiper-slide-text">
                            {{ $t('services.service-4.text-3') }}
                        </p>
                        <p class="services__swiper-slide-text">
                            {{ $t('services.service-4.text-4') }}
                        </p>
                    </div>
                </div>
            </swiper-slide>
            <swiper-slide class="services__swiper-slide">
                <div class="services__swiper-slide-content">
                    <div class="services__swiper-slide-icon">
                        <div class="services__swiper-slide-icon-bg">
                            <img :src="adIcon" alt="">
                        </div>
                    </div>
                    <h3 class="services__swiper-slide-title">
                        {{ $t('services.service-5.title') }}
                    </h3>
                    <div class="services__swiper-slide-info">
                        <p class="services__swiper-slide-text">
                            {{ $t('services.service-5.text-1') }}
                        </p>
                        <p class="services__swiper-slide-text">
                            {{ $t('services.service-5.text-2') }}
                        </p>
                        <p class="services__swiper-slide-text">
                            {{ $t('services.service-5.text-3') }}
                        </p>
                    </div>
                </div>
            </swiper-slide>
            <swiper-slide class="services__swiper-slide">
                <div class="services__swiper-slide-content">
                    <div class="services__swiper-slide-icon">
                        <div class="services__swiper-slide-icon-bg">
                            <img :src="developmentIcon" alt="">
                        </div>
                    </div>
                    <h3 class="services__swiper-slide-title">
                        {{ $t('services.service-6.title') }}
                    </h3>
                    <div class="services__swiper-slide-info">
                        <p class="services__swiper-slide-text">
                            {{ $t('services.service-6.text-1') }}
                        </p>
                        <p class="services__swiper-slide-text">
                            {{ $t('services.service-6.text-2') }}
                        </p>
                        <p class="services__swiper-slide-text">
                            {{ $t('services.service-6.text-3') }}
                        </p>
                        <p class="services__swiper-slide-text">
                            {{ $t('services.service-6.text-4') }}
                        </p>
                    </div>
                </div>
            </swiper-slide>
        </swiper>
    </section>
</template>

<style scoped></style>