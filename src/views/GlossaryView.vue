<template>
  <div class="glossary">
    <div
      class="glossary__card card"
      v-for="node in glossary.nodes"
      :key="Number(node.key)"
    >
      <header class="card__header">
        <p class="card__description">Термин</p>
        <p class="card__title">{{ node.attributes.label }}</p>
      </header>
      <main class="card__main">
        <p class="card__description">Определение</p>
        <p class="card__text">{{ node.attributes.text }}</p>
      </main>
    </div>
  </div>
</template>

<script setup>
import { computed } from "vue";
import { useStore } from "vuex";

const store = useStore();

const glossary = computed(() => store.getters.getGlossary);
</script>

<style></style>
