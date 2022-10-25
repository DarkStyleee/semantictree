<template>
  <div class="semantic-tree" ref="semantic"></div>
</template>

<script setup>
import { createGraph } from "@/lib/sigma2";
import { ref, onMounted } from "vue";
// import graphData from "@/assets/json/golossary.json";
import graphData from "@/assets/json/golossary2.json";

const semantic = ref();

onMounted(() => {
  createGraph(semantic.value, graphData);
  console.log(graphData);
});
</script>

<style></style>
