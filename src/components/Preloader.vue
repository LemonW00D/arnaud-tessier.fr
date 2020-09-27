<template>
  <transition name="fade">
      <div v-if="show" class="preloader">
          <img class="logo" src="@/assets/img/logo-AT.png" alt="Arnaud Tessier">
          <p>&#60; Arnaud Tessier /&#62;</p>
          <p>{ Développeur Front-End : Vue.js }</p>
          <div class="wrapper">
            <div class="blue ball"></div>
            <div class="red ball"></div>  
            <div class="yellow ball"></div>  
            <div class="green ball"></div>  
        </div>
      </div>
  </transition>
</template>

<script>
export default {
    name: "preloader",
    data(){
        return {
            show: true
        }
    },
    mounted(){
        this.showToggle()
    },
    methods: {
        showToggle(){
            setTimeout(() => {
                this.show = false
            }, 2000);
        }
    }
}
</script>

<style lang="scss">
@import "@/assets/scss/style.main.scss";

.preloader{
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    position: absolute;
    width: 100vw;
    height: 150vh;
    background-color: $dark-blue;
    z-index: 9999;
    margin-top: -20rem;

    .logo{
        width: 300px;
        height: auto;
        margin-bottom: 2rem;
    }

    p{
        font-size: 2rem;
        color: white;
        margin-top: 3rem;
        background-color: $dark-blue;
        text-align: center;
    }

    @include xs{
        p{
            font-size: 1.8rem;
        }
    }

    .balls{
        width: auto;
        height: auto;
    }
}

.wrapper {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100px;
  background-color: $dark-blue;
}

.ball {
  width: 20px;
  height: 20px;
  border-radius: 50%;
  margin: 0 10px;  
  animation: 2s bounce ease infinite;
}

.blue {
  background-color: #4285F5;
}

.red {
  background-color: #EA4436;
  animation-delay: .25s;
}

.yellow {
  background-color: #FBBD06;
  animation-delay: .5s;
}

.green {
  background-color: #34A952;
  animation-delay: .75s;
}

@keyframes bounce {  
    50% {
        transform: translateY(25px);
    }
}


.fade-enter-active, .fade-leave-active{
    transition: opacity 1.5s;
    .logo{
        animation-name: scaleOut;
        animation-duration: 1.5s;
    }
    p{
        animation-name: scaleOut;
        animation-duration: 1.5s;
    }
}

.fade-enter, .fade-leave-to{
    opacity: 0;
}

@keyframes scaleOut {
    0% {
        opacity: 1;
    }
    100%{
        opacity: 0;
    }
}
</style>