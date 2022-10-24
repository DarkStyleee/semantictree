<template>
  <div
    style="
      width: 100%;
      height: 100vh;
      border: 1px solid black;
      overflow: hidden;
      margin: 0;
      padding: 0;
    "
    ref="semantic"
  ></div>
</template>

<script setup>
import { createGraph } from "@/lib/sigma";
import { ref, onMounted } from "vue";
const semantic = ref();

onMounted(() => {
  createGraph(semantic.value);
  // console.log(semantic.value);
});
</script>

<style></style>
