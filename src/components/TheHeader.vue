<template>
  <div>
    <q-toolbar
      class="bg-primary text-white shadow-2"
      style="padding: 0px !important"
    >
      <q-btn flat label="Vite Template" />
      <q-space />
      <q-tabs v-model="ms.tab" shrink>
        <q-tab name="tab1" label="Tab 1" />
        <q-tab name="tab2" label="Tab 2" />
        <q-tab name="tab3" label="Tab 3" />
      </q-tabs>
    </q-toolbar>
  </div>
</template>
<script setup>
import { useMapStore } from "../store/index";
const ms = useMapStore();
</script>
<style scoped></style>
