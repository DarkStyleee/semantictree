<template>
  <div class="semantic-tree" ref="semantic"></div>
</template>

<script setup>
import { createGraph } from "@/lib/sigma2";
import { ref, onMounted, computed } from "vue";
import { useStore } from "vuex";

const store = useStore();

const graphData = computed(() => store.getters.getGlossary);

const semantic = ref();

onMounted(() => {
  createGraph(semantic.value, graphData.value);
});
</script>

<style></style>
