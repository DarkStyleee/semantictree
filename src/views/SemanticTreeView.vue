<template>
  <div class="semantic-tree" ref="semantic"></div>
</template>

<script setup>
import { createGraph } from "@/lib/sigma";
import { ref, onMounted } from "vue";
import graphData from "@/assets/json/golossary.json";

const semantic = ref();

// const getData = async (url) => {
//   const data = await fetch(url);
//   const result = await data.json();
//   return result;
// };

onMounted(() => {
  createGraph(semantic.value, graphData);
  console.log(graphData);
  // console.log(await getData("/glossary.json"));
});
</script>

<style></style>
