<template>
    <div>
        <ButtonLabel class="rotate-180 py-5" @click="rollDices" :actionLabel="actionLabel" />
        <div class="flex items-center justify-center space-x-4">
            <Dice v-for="(diceValue, index) in dices" :key="index" :value="diceValue" />
        </div>
        <ButtonLabel class="py-5" @click="rollDices" :actionLabel="actionLabel" />
    </div>
</template>

<script setup>
import ButtonLabel from '@/components/ButtonLabel.vue';
import Dice from '../components/DiceComponent.vue';
import { useDices } from '../composables/useDices';

const { dices, rollDices, actionLabel } = useDices(2);
</script>
