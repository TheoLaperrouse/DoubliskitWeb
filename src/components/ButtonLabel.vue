<template>
    <div class="button-label-container">
        <button
            class="text-black px-4 py-2 bg-beige rounded hover:bg-beige-hover transition duration-300"
            @click="$emit('click')"
        >
            Lancer les dés
        </button>
        <p class="result-label" v-html="actionLabel"></p>
    </div>
</template>

<script setup>
defineProps({
    actionLabel: {
        type: String,
    },
});
</script>

<style scoped>
.button-label-container {
    display: flex;
    flex-direction: column;
    align-items: center;
}

.result-label {
    margin-top: 1rem;
    font-size: 1.25rem;
    text-align: center;
}
</style>
