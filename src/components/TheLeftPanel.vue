<template>
  <div id="panel-header">
    <div>Panel Title</div>
    <div class="q-ml-sm">
      <IconButton
        v-if="!ms.panelInfo"
        type="info"
        method="show-info"
        @click="ms.panelInfo = !ms.panelInfo"
      />
      <IconButton
        v-if="ms.panelInfo"
        type="close"
        method="show-info"
        @click="ms.panelInfo = !ms.panelInfo"
      />
    </div>
  </div>
  <div class="q-ma-sm" id="panel-info" v-if="ms.panelInfo">
    Panel info button content
  </div>
  <div class="q-my-md" id="panel-body">
    <div>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum nulla ut
      sed eligendi, eveniet atque dolorum voluptates molestiae magnam commodi
      eius quasi? Nostrum facilis voluptatibus necessitatibus ex! Enim, impedit
      ullam.
    </div>
  </div>
</template>
<script setup>
import { useMapStore } from "../store/index";
import IconButton from "./UI/IconButton.vue";

const ms = useMapStore();
</script>
<style scoped>
#panel-header {
  display: flex;
  font-size: x-large;
}
</style>
