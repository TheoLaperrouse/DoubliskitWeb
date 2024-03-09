<template>
    <div id="app">
        <div class="fixed top-0 right-0 p-5 space-x-4 text-black">
            <router-link v-for="link in links" :key="link.name" :to="link.path" class="button px-3 py-2 rounded">
                {{ link.name }}
            </router-link>
        </div>
        <router-view class="min-h-screen background text-white flex flex-col items-center justify-center" />
    </div>
</template>
<script setup>
const links = [
    { name: 'Accueil', path: '/' },
    { name: 'Règles', path: '/rules' },
];
</script>
<style scoped>
.background {
    padding: 20px;
    background-image: linear-gradient(to right, #4dc0b5, #3490dc);
}

.button {
    background-color: #fff0bc;
}
</style>
