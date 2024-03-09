<template>
    <div>
        <ButtonLabel class="rotate-180 py-5" @click="rollDices" />
        <div class="grid grid-cols-2 gap-4">
            <Dice v-for="(dice, index) in dices" :key="index" :value="dice" :color="index <= 1 ? 'black' : 'white'" />
        </div>
        <ButtonLabel class="py-5" :actionLabel="actionLabel" @click="rollDices" />
    </div>
</template>

<script setup>
import ButtonLabel from '@/components/ButtonLabel.vue';
import Dice from '../components/DiceComponent.vue';
import { useDices } from '../composables/useDices';

const { dices, rollDices, actionLabel } = useDices(4);
</script>
