<template>
    <div class="rules-container min-h-screen flex items-center justify-center">
        <div class="text-black text-container bg-white p-8 rounded-lg shadow-xl">
            <h2 class="text-4xl text-center text-blue-800 mb-4">🍺 Règles du Biskit 🎲</h2>
            <p class="text-lg">
                Préparez-vous pour une soirée mémorable (ou pas, selon votre mémoire le lendemain) avec le jeu de
                Biskit, où la bière coule à flot et les esprits s'élèvent (parfois un peu trop). 🚀
            </p>
            <p class="text-lg my-4">Ce dont vous aurez besoin :</p>
            <ul class="list-disc list-inside mb-4">
                <li>2 dés</li>
                <li>Un foi de champion 🏆</li>
            </ul>
            <p class="text-lg">Les dés roulent, et voici ce qui se passe :</p>
            <ul class="list-disc list-inside mb-4">
                <li><strong>6 :</strong> Pauvre joueur précédent... 1 gorgée pour lui ! Et hop, on relance. 🔄</li>
                <li>
                    <strong>7 :</strong> BIZKIT ! Dernier à le crier + pouce sur le front = 1 gorgée. Encore toi ? 🤣
                </li>
                <li><strong>8 :</strong> Le suivant trinque. Et oui, encore jouer ! 🎉</li>
                <li><strong>Double n :</strong> Distribue n gorgées comme le généreux donateur que tu es. 🎁</li>
                <li>
                    <strong>La Noisette :</strong> Fais un 3 (2 et 1) et deviens la légendaire Noisette. Chaque 3 après
                    ça ? À la tienne ! 🥜
                </li>
            </ul>
            <p class="text-lg">
                Jouez responsablement et assurez-vous que tout le monde est d'accord avec les règles. La soirée ne fait
                que commencer ! 🚀
            </p>
        </div>
    </div>
</template>

<script>
export default {
    name: 'RulesPage',
};
</script>

<style scoped>
.text-container {
    max-width: 800px;
    background-color: #ffffff;
    border-radius: 10px;
    padding: 20px;
    box-shadow:
        0 10px 15px -3px rgba(0, 0, 0, 0.1),
        0 4px 6px -2px rgba(0, 0, 0, 0.05);
}

h2 {
    margin-bottom: 20px;
}

ul {
    margin-bottom: 20px;
}
</style>
