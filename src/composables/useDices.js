import { ref } from 'vue';

const priorityLabels = [
    'Double 6, distribue 6 gorgées et invente une règle',
    'Dernier à dire "BIZKIT" boit',
    'Double BIZKIT',
    'Le lanceur devient la Noisette',
];

export function useDices(numberOfDice = 2) {
    const dices = ref(Array(numberOfDice).fill(1));
    const actionLabel = ref('');

    const rollDices = () => {
        for (let i = 0; i < dices.value.length; i++) {
            dices.value[i] = Math.floor(Math.random() * 6) + 1;
        }
        const firstActionLabel = getActionLabel(dices.value[0], dices.value[1]);
        const secondActionLabel = getActionLabel(dices.value[2], dices.value[3]);

        const priorityLabel = [firstActionLabel, secondActionLabel].find((label) =>
            priorityLabels.some((priority) => label === priority),
        );
        if (priorityLabel) {
            actionLabel.value = priorityLabel;
        } else if (firstActionLabel && secondActionLabel) {
            actionLabel.value = `${firstActionLabel}</br>${secondActionLabel}`;
        } else {
            actionLabel.value = firstActionLabel ?? secondActionLabel ?? '';
        }
    };

    const getActionLabel = (dice1, dice2) => {
        const total = dice1 + dice2;

        switch (total) {
            case 2:
                return 'Le lanceur boit';
            case 3:
                return 'Le lanceur devient la Noisette';
            case 6:
                return 'Le précédent boit';
            case 7:
                return 'Dernier à dire "BIZKIT" boit';
            case 8:
                return "Celui d'après boit";
            case 12:
                return 'Double 6, distribue 6 gorgées et invente une règle';
            default:
                if (dice1 && dice1 === dice2) {
                    return `Double ${dice1}, distribue ${dice1} gorgée(s)`;
                }
                if (dice1 === 3 || dice2 === 3) {
                    return 'La Noisette boit';
                }
                return null;
        }
    };

    return { dices, rollDices, actionLabel };
}
