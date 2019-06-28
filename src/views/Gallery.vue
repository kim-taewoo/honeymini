<template>
  <v-container fluid class="pa-0">
    <v-layout row wrap>
      <v-flex class="mb-3" xs12 d-flex>
        <v-card flat tile d-flex>
          <v-img :src="require('@/assets/pictures/newmain.jpg')" width="100%"></v-img>
        </v-card>
      </v-flex>
      <v-flex data-scroll class="mb-3" xs12 v-for="(photo,index) in photoes" :key="index" d-flex>
        <v-card flat tile d-flex>
          <v-img :src="photo.src" width="100%"></v-img>
        </v-card>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
import ScrollOut from "scroll-out";
export default {
  data() {
    return {
      photoes: [
        {
          src: require("@/assets/photoes/gallery2.jpg")
        },
        {
          src: require("@/assets/photoes/gallery3.jpg")
        },
        {
          src: require("@/assets/photoes/gallery4.jpg")
        },
        {
          src: require("@/assets/photoes/gallery5.jpg")
        },
        {
          src: require("@/assets/photoes/gallery6.jpg")
        },
        {
          src: require("@/assets/photoes/gallery7.jpg")
        },
        {
          src: require("@/assets/photoes/gallery8.jpg")
        }
      ]
    };
  },
  mounted() {
    this.so = ScrollOut({
      threshold: 0.2,
      scope: this.$el,
      once: true
    });
  },
  destroyed() {
    this.so.teardown();
  }
};
</script>

<style scoped>
[data-scroll] {
  transition: all 1s;
}
[data-scroll="in"] {
  opacity: 1;
  /* -webkit-transform: translateX(0); */
  transform: translateY(0);
}
[data-scroll="out"] {
  opacity: 0;
  /* -webkit-transform: translateX(-200px); */
  transform: translateY(100px);
}
</style>
