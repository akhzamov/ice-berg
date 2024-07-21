<script setup>
import { MoreFilled } from '@element-plus/icons-vue'

const activities = [
    {
        content: 'Custom icon',
        timestamp: '2020 год',
        size: 'large',
        type: 'primary',
    },
    {
        content: 'Custom color',
        timestamp: '2018-04-03 20:46',
        size: 'large',
        type: 'primary',
    },
    {
        content: 'Custom size',
        timestamp: '2018-04-03 20:46',
        size: 'large',
        type: 'primary',
    },
    {
        content: 'Custom hollow',
        timestamp: '2018-04-03 20:46',
        size: 'large',
        type: 'primary',
    },
]
</script>

<template>
    <el-timeline style="max-width: 600px">
        <el-timeline-item v-for="(activity, index) in activities" :key="index" :icon="activity.icon"
            :type="activity.type" :color="activity.color" :size="activity.size" :hollow="activity.hollow"
            :timestamp="activity.timestamp">
            {{ activity.content }}
        </el-timeline-item>
    </el-timeline>
</template>

<style scoped></style>