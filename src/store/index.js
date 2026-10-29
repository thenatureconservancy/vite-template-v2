import { defineStore } from "pinia";
import { ref } from "vue";

export const useMapStore = defineStore("mapStore", () => {
  const tab = ref(null);
  const drawerLeft = ref(true);
  const panelInfo = ref(false);

  return {
    tab,
    drawerLeft,
    panelInfo,
  };
});
