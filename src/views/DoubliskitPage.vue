<template>
    <div class="min-h-screen bg-gray-900 text-white flex flex-col items-center justify-center">
        <h1 class="text-3xl mb-5">Doubliskit</h1>
        <button @click="rollDices" class="mb-5">Lancer les dés</button>
        <div class="grid grid-cols-2 gap-4">
            <Dice v-for="(dice, index) in dices" :key="index" :value="dice" :color="index <= 1 ? 'black' : 'white'" />
        </div>
        <button
            class="px-4 py-2 bg-green-500 rounded hover:bg-green-700 transition duration-300 mt-5"
            @click="rollDices"
        >
            Lancer les dés
        </button>
    </div>
</template>

<script setup>
import Dice from '../components/DiceComponent.vue';
import { useDices } from '../composables/useDices';

const { dices, rollDices } = useDices(4);
</script>
