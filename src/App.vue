<template>
  <div id="app" class="app">
    <preloader></preloader>
    <div class="d-flex flex-column w-100">
      <the-header></the-header>
      <router-view></router-view>
      <cursor-fx ref="cursor" disabled />
    </div>
  </div>
</template>

<script>
import Preloader from "@/components/Preloader";
import TheHeader from "@/components/TheHeader";
import { CursorFx } from "@luxdamore/vue-cursor-fx";

export default {
  name: "App",
  components: {
    Preloader,
    TheHeader,
    "cursor-fx": CursorFx,
  },
  mounted() {
    this.$refs.cursor.start();
  },
  methods: {
    others() {
      this.$refs.cursor.destroy();
      this.$refs.cursor.refresh();
    },
  },
};
</script>

<style lang="scss">
@import "@/assets/scss/style.main.scss";

* {
  font-family: "Poppins", sans-serif;
}

.app {
  background-color: $background-light;
  transition: background-color 0.3s ease-in-out;
  width: 100vw;
  min-height: 100vh;
  box-sizing: border-box;
  margin: 0;
  padding: 0;
  overflow-y: hidden;
}

/* Scroll-Bar */
::-webkit-scrollbar {
  width: 1rem;
}

::-webkit-scrollbar-track {
  background: transparent;
}

::-webkit-scrollbar-thumb {
  background: #888;
  border-radius: 10px;
  -webkit-box-shadow: 12px 12px 16px 0 rgba(255, 255, 255, 0.3) inset,
    -8px -8px 12px 0 rgba(0, 0, 0, 0.25) inset;
  box-shadow: 12px 12px 16px 0 rgba(255, 255, 255, 0.3) inset,
    -8px -8px 12px 0 rgba(0, 0, 0, 0.25) inset;
}

::-webkit-scrollbar-thumb:hover {
  background: #555;
}
</style>
