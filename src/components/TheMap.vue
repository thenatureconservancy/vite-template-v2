<template>
  <div>
    <arcgis-map item-id="2486e44595c1428781503d87f281f7d3">
      <arcgis-home slot="top-left" view="Map" visual-scale="m"></arcgis-home>
      <arcgis-zoom
        slot="top-left"
        view="Map"
        layout="vertical"
        visual-scale="m"
      ></arcgis-zoom>
      <arcgis-scale-bar
        slot="bottom-right"
        bar-style="line"
        unit="metric"
      ></arcgis-scale-bar>
      <arcgis-expand
        slot="bottom-left"
        view="Map"
        mode="floating"
        visual-scale="m"
      >
        <arcgis-legend
          slot="bottom-right"
          view="Map"
          legend-style="classic"
        ></arcgis-legend>
      </arcgis-expand>

      <arcgis-basemap-toggle
        slot="top-right"
        view="Map"
      ></arcgis-basemap-toggle>
    </arcgis-map>
  </div>
</template>
<script setup></script>
<style scoped>
arcgis-map {
  display: block;
  min-height: calc(100vh - 225px);
  height: calc(100vh - 50px);
}

/* On mobile, cap the map height so the stacked panel below it stays visible */
@media (max-width: 700px) {
  arcgis-map {
    min-height: 0;
    height: 60vh;
  }
}
</style>
