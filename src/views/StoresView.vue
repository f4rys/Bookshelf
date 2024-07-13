<template>
  <div class="map_container">
    <l-map ref="map" v-model:zoom="zoom" :center="userLocation || [50.049683, 19.944544]">
      <l-tile-layer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        layer-type="base"
        name="OpenStreetMap"
      ></l-tile-layer>
      <l-marker :lat-lng="userLocation" v-if="userLocation">
        <l-icon :icon-url="icon_blue" :icon-size="[35,35]"></l-icon>
        <l-tooltip :content="'Your location'"></l-tooltip>
      </l-marker>
      <l-marker v-for="(marker, index) in markers" :key="index" :lat-lng="[marker.lat, marker.long]">
        <l-icon :icon-url="icon_black" :icon-size="[35,35]"></l-icon>
        <l-tooltip :content="marker.name"></l-tooltip>
      </l-marker>
    </l-map>
    <button @click="getUserLocation" class="gps-button">
      <img class="img-fluid" height="30" width="30" src=".././assets/gps.png">
    </button>
  </div>
</template>

<script>
import { storesRef } from '@/main.js';
import { getDocs } from "firebase/firestore";
import { LMap, LTileLayer, LMarker, LIcon, LTooltip } from "@vue-leaflet/vue-leaflet";
import "leaflet/dist/leaflet.css";

const querySnapshot = await getDocs(storesRef);
const markers = [];
querySnapshot.forEach((doc) => {
  markers.push({
    "name": doc.data()["Name"], 
    "lat": doc.data()["Coordinates"]["_lat"],
    "long": doc.data()["Coordinates"]["_long"]
  });
});

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
      icon_black: require(".././assets/marker_black.png"),
      icon_blue: require(".././assets/marker_blue.png"),
      markers: markers
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
  height: 100vh;
  width: 100%;
}

.gps-button {
  position: absolute;
  bottom: 10px;
  right: 10px;
  z-index: 1000;
  padding: 5px 10px;
  background-color: #fff;
  border: 1px solid #ccc;
  border-radius: 5px;
  cursor: pointer;
}
</style>