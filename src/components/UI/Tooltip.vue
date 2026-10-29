<template>
  <q-tooltip
    class="bg-white text-primary text-h7 shadow-4"
    style="border: 1pt solid #ccc"
    anchor="top middle"
    self="bottom middle"
    :delay="400"
  >
    {{ text }}
  </q-tooltip>
</template>

<script setup>
defineProps({
  text: String,
});
</script>
