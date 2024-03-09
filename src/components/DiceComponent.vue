<template>
    <div :class="`dice ${color}-dice`">
        <div v-if="value === 1 || value === 3 || value === 5" class="dot center"></div>
        <div v-if="value > 1" class="dot top-left"></div>
        <div v-if="value > 1" class="dot bottom-right"></div>
        <div v-if="value === 6" class="dot top-center"></div>
        <div v-if="value === 6" class="dot bottom-center"></div>
        <div v-if="value === 4 || value === 5 || value === 6" class="dot top-right"></div>
        <div v-if="value === 4 || value === 5 || value === 6" class="dot bottom-left"></div>
    </div>
</template>

<script setup>
import { defineProps } from 'vue';

defineProps({
    value: {
        type: Number,
        required: true,
        validator: (value) => value >= 1 && value <= 6,
    },
    color: {
        type: String,
        default: 'white',
        validator: (color) => ['white', 'black'].includes(color),
    },
});
</script>

<style scoped lang="scss">
.dice {
    width: 100px;
    height: 100px;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    align-items: center;
    position: relative;
    border: 4px solid #000;
    border-radius: 16px;

    &.white-dice {
        background-color: #fff;
        color: #000;

        .dot {
            background-color: #000;
        }
    }

    &.black-dice {
        background-color: #444;
        color: #fff;

        .dot {
            background-color: #fff;
        }
    }

    .dot {
        width: 16px;
        height: 16px;
        border-radius: 50%;

        &.top-left {
            position: absolute;
            top: 10px;
            left: 10px;
        }

        &.top-center {
            position: absolute;
            top: 10px;
            left: 50%;
            transform: translateX(-50%);
        }

        &.top-right {
            position: absolute;
            top: 10px;
            right: 10px;
        }

        &.center {
            position: absolute;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
        }

        &.bottom-left {
            position: absolute;
            bottom: 10px;
            left: 10px;
        }

        &.bottom-center {
            position: absolute;
            bottom: 10px;
            left: 50%;
            transform: translateX(-50%);
        }

        &.bottom-right {
            position: absolute;
            bottom: 10px;
            right: 10px;
        }
    }
}
</style>
