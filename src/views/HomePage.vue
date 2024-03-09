<template>
    <div class="min-h-screen bg-gray-900 text-white flex flex-col items-center justify-center">
        <h1 class="text-2xl mb-5">Bienvenue sur le jeu de dés</h1>
        <!-- Boutons de navigation -->
        <div class="space-x-4">
            <router-link to="/biskit" class="px-4 py-2 bg-blue-500 rounded hover:bg-blue-700 transition duration-300">
                Biskit
            </router-link>
            <router-link
                to="/doubliskit"
                class="px-4 py-2 bg-green-500 rounded hover:bg-green-700 transition duration-300"
            >
                Doubliskit
            </router-link>
        </div>
    </div>
</template>
