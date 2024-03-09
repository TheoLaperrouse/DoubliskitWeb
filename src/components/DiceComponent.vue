<template>
    <div class="dice" :class="'dice-' + value">
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
});
</script>

<style scoped>
.dice {
    width: 100px; /* 2 fois plus grand que l'original */
    height: 100px; /* 2 fois plus grand que l'original */
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    align-items: center;
    position: relative;
    border: 4px solid #000; /* Ajustez l'épaisseur du bord si nécessaire */
    background-color: #fff;
    border-radius: 16px; /* Ajustez le rayon de la bordure pour conserver la proportion */
}

.dot {
    width: 16px; /* 2 fois plus grand que l'original */
    height: 16px; /* 2 fois plus grand que l'original */
    border-radius: 50%;
    background-color: #000;
}

.top-left {
    position: absolute;
    top: 10px;
    left: 10px;
}
.top-center {
    position: absolute;
    top: 10px;
    left: 50%;
    transform: translateX(-50%);
}
.top-right {
    position: absolute;
    top: 10px;
    right: 10px;
}
.center {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
}
.bottom-left {
    position: absolute;
    bottom: 10px;
    left: 10px;
}
.bottom-center {
    position: absolute;
    bottom: 10px;
    left: 50%;
    transform: translateX(-50%);
}
.bottom-right {
    position: absolute;
    bottom: 10px;
    right: 10px;
}
</style>
