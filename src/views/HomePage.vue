<template>
    <div>
        <h1 class="text-2xl mb-5">Bienvenue sur le jeu de dés</h1>
        <!-- Boutons de navigation -->
        <div class="space-x-4 text-black">
            <router-link
                v-for="link in gameLinks"
                :key="link.name"
                :to="link.path"
                class="bg-beige hover:bg-beige-hover px-3 py-2 rounded"
            >
                {{ link.name }}
            </router-link>
        </div>
    </div>
</template>
<script setup>
const gameLinks = [
    { name: 'Biskit', path: '/biskit' },
    { name: 'Doubliskit', path: '/doubliskit' },
];
</script>
