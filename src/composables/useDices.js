import { ref } from 'vue';

export function useDices(numberOfDice = 2) {
    const dices = ref(Array(numberOfDice).fill(1));

    const rollDices = () => {
        for (let i = 0; i < dices.value.length; i++) {
            dices.value[i] = Math.floor(Math.random() * 6) + 1; // Générer un nombre aléatoire entre 1 et 6
        }
    };

    return { dices, rollDices };
}
