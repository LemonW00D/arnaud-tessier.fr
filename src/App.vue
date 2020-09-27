<template>
  <div id="app" class="app" :class="mode">
    <preloader></preloader>
    <div class="d-flex flex-column w-100">
      <the-header @toggle="toggle"></the-header>
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
import Preloader from "@/components/Preloader";
import TheHeader from "@/components/TheHeader";

export default {
  name: "App",
  components: {
    Preloader,
    TheHeader
  },
  /*methods:{
    keyPress (e) {
      if (e.key === 't') {
        this.toggle()
      }
    },
    toggle () {
      if (this.mode === "dark") {
        this.mode = "light"
      } else {
        this.mode = "dark"
      }
    }
  },
  created () {
    window.addEventListener('keyup', this.keyPress)
  },*/
}
</script>

<style lang="scss">
@import "@/assets/scss/style.main.scss";

*{
  font-family: 'Poppins', sans-serif;
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
/*
.dark {
  background-color: $background-darkmode;  
}*/

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
  -webkit-box-shadow: 12px 12px 16px 0 rgba(255, 255, 255, 0.3) inset, -8px -8px 12px 0 rgba(0, 0, 0, 0.25) inset;
  box-shadow: 12px 12px 16px 0 rgba(255, 255, 255, 0.3) inset, -8px -8px 12px 0 rgba(0, 0, 0, 0.25) inset;
}

::-webkit-scrollbar-thumb:hover {
  background: #555;
}
</style>