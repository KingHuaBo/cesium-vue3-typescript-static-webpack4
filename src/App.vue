<template>
  <div id="cesiumContainer"></div>
</template>


<script lang="ts">
(window as any).CESIUM_BASE_URL = "/Cesium/";
import * as Cesium from "cesium";
import { defineComponent } from "vue";

export default defineComponent({
  name: "App",
  mounted() {
    var viewer = new Cesium.Viewer("cesiumContainer", {
      imageryProvider: new Cesium.TileMapServiceImageryProvider({
        url: Cesium.buildModuleUrl("Assets/Textures/NaturalEarthII")
      }),
      baseLayerPicker: false,
      geocoder: false
    });
    // let d=new Cesium.Animation
  }
});
</script>

<style>
html,
body {
  margin: 0 auto;
}
</style>
