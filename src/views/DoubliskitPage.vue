<template>
    <div class="min-h-screen bg-gray-900 text-white flex flex-col items-center justify-center">
        <h1 class="text-3xl mb-5">Doubliskit</h1>
        <div class="flex items-center justify-center space-x-4">
            <Dice v-for="(diceValue, index) in dices" :key="index" :value="diceValue" />
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
