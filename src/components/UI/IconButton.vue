<template>
  <q-btn
    flat
    :style="iconInfo.style"
    round
    :color="iconInfo.color"
    text-color="primary"
    :padding="iconInfo.padding"
    :icon="iconInfo.icon"
    :size="iconInfo.size"
    @click="emit(method)"
  >
    <Tooltip v-if="iconInfo.tooltip" :text="iconInfo.tooltip" />
  </q-btn>
</template>

<script setup>
import { computed } from "vue";
import Tooltip from "./Tooltip.vue";

const props = defineProps({
  method: String,
  type: String,
  otherTooltip: {
    type: String,
    required: false,
  },
});

const emit = defineEmits();

const iconInfo = computed(() => {
  let icon = "";
  let size = "";
  let padding = "";
  let tooltip = "";
  const style = "height: 25px; width: 25px;";
  let color = "";

  // info icon
  if (props.type === "info") {
    icon = "info_outlined";
    size = "10pt";
    padding = "1px";
    tooltip = "Info";
  }

  // close icon
  if (props.type === "close") {
    icon = "close";
    size = "11pt";
    padding = "0px";
    tooltip = "Close";
  }

  // handle other tooltip
  if (props.otherTooltip) {
    tooltip = props.otherTooltip;

    if (props.otherTooltip === "none") {
      tooltip = false;
    }
  }

  return {
    icon,
    size,
    padding,
    tooltip,
    style,
    color,
  };
});
</script>

<style scoped></style>
