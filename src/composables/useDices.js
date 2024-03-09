import { ref } from 'vue';

export function useDices(numberOfDice = 2) {
    const dices = ref(Array(numberOfDice).fill(1));

    const rollDices = () => {
        for (let i = 0; i < dices.value.length; i++) {
            dices.value[i] = Math.floor(Math.random() * 6) + 1;
        }
        actionLabel.value = getActionLabel(dices.value[0], dices.value[1]);
        if (dices.value.length === 4) {
            actionLabel.value += `</br>${getActionLabel(dices.value[2], dices.value[3])}`;
        }
    };

    const getActionLabel = (dice1, dice2) => {
        const total = dice1 + dice2;
        switch (total) {
            case 2:
                return 'Le lanceur boit';
            case 6:
                return 'Le précédent boit';
            case 7:
                return 'Dernier à dire "BIZKIT" boit';
            case 8:
                return "Celui d'après boit";
            case 12:
                return 'Double 6, distribue 6 gorgées et invente une règle';
            default:
                if (dice1 === dice2) {
                    return `Double ${dice1}, distribue ${dice1} gorgée(s)`;
                }
                if (dice1 === 3 || dice2 === 3) {
                    return 'La Noisette boit';
                }
                return '';
        }
    };

    const actionLabel = ref('');

    return { dices, rollDices, actionLabel };
}
