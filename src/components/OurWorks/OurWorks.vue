<script setup>
import { ref, reactive } from 'vue'
import { useI18n } from 'vue-i18n'
import FlayerImage from '@/assets/images/ourWorks/flayer.webp'
import QuestionImage from '@/assets/images/ourWorks/oprosnik.webp'
import PromoImage from '@/assets/images/ourWorks/promo.webp'
import SamokleykaImage from '@/assets/images/ourWorks/samokleyka.webp'

const { t } = useI18n()
const selectedWorks = ref(t('our-works.works.work-1'))
const works = [t('our-works.works.work-1'), t('our-works.works.work-2'), t('our-works.works.work-3'), t('our-works.works.work-4')]

const flayerWorks = reactive([
    { id: 1, img: FlayerImage, title: "Флаер для компании", position: 'right' },
    { id: 2, img: FlayerImage, title: "Флаер для компании", position: 'left' },
    { id: 3, img: FlayerImage, title: "Флаер для компании", position: 'right' },
])
const questionWorks = reactive([
    { id: 1, img: QuestionImage, title: "Опросник для компании", position: 'right' },
    { id: 2, img: QuestionImage, title: "Опросник для компании", position: 'left' },
    { id: 3, img: QuestionImage, title: "Опросник для компании", position: 'right' },
])
const promoWorks = reactive([
    { id: 1, img: PromoImage, title: "Рекламные акция для компании", position: 'right' },
    { id: 2, img: PromoImage, title: "Рекламные акция для компании", position: 'left' },
    { id: 3, img: PromoImage, title: "Рекламные акция для компании", position: 'right' },
])
const samokleykaWorks = reactive([
    { id: 1, img: SamokleykaImage, title: "Самоклейки для компании", position: 'right' },
    { id: 2, img: SamokleykaImage, title: "Самоклейки для компании", position: 'left' },
    { id: 3, img: SamokleykaImage, title: "Самоклейки для компании", position: 'right' },
])

</script>

<template>
    <section class="our-works">
        <div class="container">
            <h3 class="our-works__title">
                {{ $t('our-works.title') }}
            </h3>
            <div class="our-works__selects">
                <el-segmented v-model="selectedWorks" :options="works" />
            </div>
            <div class="our-works__list">
                <transition-group name="our-works-transition">
                    <template v-if="selectedWorks == $t('our-works.works.work-1')">
                        <div class="our-works__item" :class="item.position" v-for="item in flayerWorks" :key="item.id">
                            <div class="our-works__item-info">
                                <h4 class="our-works__item-title">
                                    {{ item.title }}
                                </h4>
                            </div>
                            <img :src="item.img" alt="" class="our-works__item-img">
                        </div>
                    </template>
                    <template v-if="selectedWorks == $t('our-works.works.work-2')">
                        <div class="our-works__item" :class="item.position" v-for="item in samokleykaWorks"
                            :key="item.id">
                            <div class="our-works__item-info">
                                <h4 class="our-works__item-title">
                                    {{ item.title }}
                                </h4>
                            </div>
                            <img :src="item.img" alt="" class="our-works__item-img">
                        </div>
                    </template>
                    <template v-if="selectedWorks == $t('our-works.works.work-3')">
                        <div class="our-works__item" :class="item.position" v-for="item in questionWorks"
                            :key="item.id">
                            <div class="our-works__item-info">
                                <h4 class="our-works__item-title">
                                    {{ item.title }}
                                </h4>
                            </div>
                            <img :src="item.img" alt="" class="our-works__item-img">
                        </div>
                    </template>
                    <template v-if="selectedWorks == $t('our-works.works.work-4')">
                        <div class="our-works__item" :class="item.position" v-for="item in promoWorks" :key="item.id">
                            <div class="our-works__item-info">
                                <h4 class="our-works__item-title">
                                    {{ item.title }}
                                </h4>
                            </div>
                            <img :src="item.img" alt="" class="our-works__item-img">
                        </div>
                    </template>
                </transition-group>
            </div>
        </div>
    </section>
</template>

<style lang="scss"></style>