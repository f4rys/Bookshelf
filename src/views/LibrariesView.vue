<template>
  <div class="map_container">
    <l-map ref="map" v-model:zoom="zoom" :center="userLocation || [50.049683, 19.944544]">
      <l-tile-layer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        layer-type="base"
        name="OpenStreetMap"
      ></l-tile-layer>
      <l-marker :lat-lng="userLocation" v-if="userLocation">
        <l-tooltip :content="'Your location'"></l-tooltip>
      </l-marker>
      <l-marker v-for="(marker, index) in markers" :key="index" :lat-lng="[marker.lat, marker.long]">
        <l-icon :icon-url="icon" :icon-size="[35,35]"></l-icon>
        <l-tooltip :content="marker.name"></l-tooltip>
      </l-marker>
    </l-map>
    <button @click="getUserLocation" class="gps-button">
      <img class="img-fluid" height="30" width="30" src=".././assets/gps.png">
    </button>
  </div>
</template>

<script>
import "leaflet/dist/leaflet.css";
import { LMap, LTileLayer, LMarker, LIcon, LTooltip } from "@vue-leaflet/vue-leaflet";
export default {
  components: {
    LMap,
    LTileLayer,
    LMarker,
    LIcon,
    LTooltip
  },
  data() {
    return {
      zoom: 14,
      userLocation: null,
      icon: require(".././assets/marker.png"),
      markers: [
        { name: "Marker 1", lat: 50.049683, long: 19.944544 },
        { name: "Marker 2", lat: 50.05, long: 19.95 },
        { name: "Marker 3", lat: 50.06, long: 19.96 }
      ],
    };
  },
  methods: {
    getUserLocation() {
      if ("geolocation" in navigator) {
        navigator.geolocation.getCurrentPosition((position) => {
          this.userLocation = [position.coords.latitude, position.coords.longitude];
          if (this.$refs.map && this.$refs.map.mapObject) {
            this.$refs.map.mapObject.setView(this.userLocation, this.zoom);
          }
        });
      }
    },
  },
};
</script>

<style>
.map_container,
.map_container .leaflet-container {
  height: 100vh; /* Set height to 100% of viewport height */
  width: 100%; /* Set width to 100% of parent container */
}

.gps-button {
  position: absolute;
  bottom: 10px; /* Adjust bottom position as needed */
  right: 10px; /* Adjust right position as needed */
  z-index: 1000;
  padding: 5px 10px;
  background-color: #fff;
  border: 1px solid #ccc;
  border-radius: 5px;
  cursor: pointer;
}

.gps-button i {
  margin-right: 5px;
}
</style>