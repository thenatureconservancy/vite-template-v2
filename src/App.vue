<script setup>
import { computed } from "vue";
import { useQuasar } from "quasar";
import TheHeader from "./components/TheHeader.vue";
import TheMap from "./components/TheMap.vue";
import TheLeftPanel from "./components/TheLeftPanel.vue";
import { useMapStore } from "./store/index";

import "@arcgis/map-components/components/arcgis-map";
import "@arcgis/map-components/components/arcgis-zoom";
import "@arcgis/map-components/components/arcgis-home";
import "@arcgis/map-components/components/arcgis-legend";
import "@arcgis/map-components/components/arcgis-expand";
import "@arcgis/map-components/components/arcgis-scale-bar";
import "@arcgis/map-components/components/arcgis-basemap-toggle";

const ms = useMapStore();

const $q = useQuasar();
// Matches the q-drawer :breakpoint below. At or under this width we stack
// the map above the panel instead of using the side drawer.
const BREAKPOINT = 700;
const isMobile = computed(() => $q.screen.width <= BREAKPOINT);
</script>

<template>
  <div>
    <q-layout view="hHh Lpr lff" container style="height: 100vh">
      <q-header>
        <TheHeader />
      </q-header>

      <q-drawer
        v-if="!isMobile"
        aria-label="Left drawer"
        v-model="ms.drawerLeft"
        show-if-above
        :width="400"
        :breakpoint="700"
      >
        <q-scroll-area class="fit">
          <div class="q-pa-md">
            <TheLeftPanel />
          </div>
        </q-scroll-area>
      </q-drawer>

      <q-page-container>
        <q-page>
          <TheMap />
          <!-- On mobile the drawer is hidden; show the panel stacked below the map -->
          <div v-if="isMobile" class="q-pa-md">
            <TheLeftPanel />
          </div>
        </q-page>
      </q-page-container>
    </q-layout>
  </div>
</template>

<style>
body {
  font-family: "Barlow", sans-serif !important;
  margin: 0;
  color: var(--q-dark);
  font-weight: 400;
}
</style>
