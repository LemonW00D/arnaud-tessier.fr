<template>
  <div class="home-page">
    <div class="yellow-bg"></div>
    <div class="home">
      <div class="typer-block animate__animated animate__bounceInLeft">
        <div class="typer">
          <vue-typer
            :text="[`${english}`, `${francais}`]"
            :repeat="0"
            :shuffle="false"
            initial-action="typing"
            :pre-type-delay="4000"
            :type-delay="70"
            :pre-erase-delay="1500"
            :erase-delay="70"
            erase-style="backspace"
            :erase-on-complete="false"
            caret-animation="blink"
          ></vue-typer>
          <p class="sub-typer">
            Developpeur Front-End / JS - Vue.js / WebDesigner
          </p>
        </div>
        <div class="go-contact">
          <svg
            width="0"
            height="0"
            version="1.1"
            xmlns="http://www.w3.org/2000/svg"
            xmlns:xlink="http://www.w3.org/1999/xlink"
          >
            <defs>
              <symbol id="icon-paperplane" viewBox="0 0 1024 1024">
                <title>paperplane</title>
                <path
                  class="path1"
                  d="M1009.376 5.12c-5.312-3.424-11.36-5.12-17.376-5.12-6.176 0-12.384 1.76-17.76 5.376l-960 640c-9.888 6.56-15.328 18.112-14.048 29.952 1.216 11.808 8.896 22.016 19.936 26.368l250.368 100.192 117.728 206.016c5.632 9.888 16.096 16 27.424 16.128 0.128 0 0.224 0 0.352 0 11.232 0 21.664-5.952 27.424-15.552l66.464-110.816 310.24 124.064c3.808 1.536 7.808 2.272 11.872 2.272 5.44 0 10.816-1.376 15.68-4.128 8.448-4.736 14.24-13.056 15.872-22.624l160-960c2.080-12.576-3.488-25.184-14.176-32.128zM100.352 664.864l741.6-494.432-539.2 577.184c-2.848-1.696-5.376-3.936-8.512-5.184l-193.888-77.568zM326.048 770.112c-0.064-0.128-0.16-0.192-0.224-0.32l606.176-648.8-516.768 805.184-89.184-156.064zM806.944 947.488l-273.312-109.312c-6.496-2.56-13.248-3.424-19.936-3.808l420.864-652.416-127.616 765.536z"
                ></path>
              </symbol>
            </defs>
          </svg>
          <router-link to="/contact" class="contact-button">
            Contact
            <svg class="icon icon-paperplane">
              <use xlink:href="#icon-paperplane"></use>
            </svg>
            <span>arnaud.tessier33@gmail.com</span>
          </router-link>
        </div>
      </div>
      <div
        class="d-flex flex-row justify-content-center align-items-center img-portrait animate__animated animate__bounceInRight"
      >
        <img src="@/assets/img/julian.jpg" alt="portrait" />
      </div>
    </div>
    <div
      class="d-flex flex-row justify-content-center align-items-end img-pt-xs animate__animated animate__bounceInRight"
    >
      <img src="@/assets/img/julian.jpg" alt="portrait" />
    </div>
  </div>
</template>

<script>
import { VueTyper } from "vue-typer";

export default {
  name: "Home",
  components: {
    VueTyper
  },
  data() {
    return {
      english: [
        `Hi,
I'm Arnaud,
Front-End developer !`
      ],
      francais: [
        `Salut,
Je suis Arnaud,
développeur Front-End !`
      ]
    };
  }
};
</script>

<style lang="scss">
@import "@/assets/scss/style.main.scss";

.home-page {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  width: 100vw;
  min-height: 90vh;
  overflow-y: hidden;
}

.yellow-bg {
  height: calc(100vh - 58px);
  width: 75%;
  position: absolute;
  z-index: 0;
  background: $yellow-10;
}

.img-portrait {
  width: 500px;
  height: auto;
  margin: 5.5rem auto;
  left: 450px;
  position: relative;
  z-index: 20;
}

.img-pt-xs {
  display: none;
  img {
    display: none;
  }
}

.home {
  height: 70vh;
  span {
    font-family: "Special Elite", cursive;
    font-size: 6rem;
    line-height: 70px;
    color: $dark-blue;

    &:hover {
      color: $yellow;
    }
  }
}

.typer-block {
  margin-left: 9%;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  max-height: 600px;
  align-items: flex-start;
  z-index: 100;
  position: absolute;
}

.typer {
  height: 400px;
  width: 775px;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  font-family: "Special Elite", cursive;
  font-size: 6rem;
  line-height: 70px;
  white-space: pre-wrap;
  p {
    font-size: 1.5rem;
    letter-spacing: 1px;
    line-height: 20px;
  }
}

.sub-typer {
  font-family: "Poppins", sans-serif;
}

.go-contact {
  margin: 10rem auto auto auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: #072939;
  height: 100%;
  -webkit-font-smoothing: antialiased;
  font-size: 1.8rem;

  &:hover {
    background-color: transparent;
  }

  .icon {
    display: inline-block;
    width: 2rem;
    height: 2rem;
    fill: currentColor;
  }

  .icon-paperplane {
    font-size: 1em;
    color: white;
    margin-left: 1px;
  }

  .contact-button {
    position: relative;
    -webkit-perspective: 1000;
    -webkit-backface-visibility: hidden;
    -webkit-transform: translate3d(0, 0, 0);
    color: white;
    text-decoration: none;
    text-transform: uppercase;
    font-weight: 500;
    font-size: 2rem;
    border: 3px solid white;
    padding: 20px 40px 10px 40px;
    transition: 0.3s ease-in-out;

    span {
      text-transform: none;
      font-family: "Arial", sans-serif;
      font-size: 1.2rem;
      position: absolute;
      color: #ee283e;
      top: -5px;
      left: 10px;
      opacity: 0;
      transition: all 0s ease 0s;
    }
    &:hover {
      transition: 0.3s ease-in-out;
      border: 3px solid white;
      border-radius: 50px;
      background-color: white;

      & > span {
        opacity: 1;
        transition: all 0.25s ease-in-out 0.1s;
      }

      &:before {
        transition: 0.3s ease-in-out;
        background-color: #ee283e;
      }
    }

    &:before,
    &:after {
      content: "";
      position: absolute;
      top: -14px;
      left: -15px;
      width: 190px;
      height: 25px;
    }
    &:before {
      border: 2px solid #ee283e;
      background-color: #072939;
      transform: skew(-25deg);
      transition: 0.3s ease-in-out;
    }

    &:after {
      content: "Disponible freelance ou job";
      font-size: 0.95rem;
      top: -11px;
      left: -4px;
      color: white;
    }
  }
}

@include xxl {
  .typer-block {
    margin-left: 7.5%;
  }
  .home {
    span {
      font-size: 5.5rem;
      line-height: 65px;
    }
    .typer {
      height: 300px;
      width: 550px;
    }
    .img-portrait {
      width: 425px;
      height: auto;
      margin-top: 7.5rem;
      left: 325px;
    }
  }
  .img-pt-xs {
    display: none;
    img {
      display: none;
    }
  }
}

@include xl {
  .typer-block {
    margin-left: 5%;
  }
  .home {
    span {
      font-size: 4rem;
      line-height: 60px;
    }
    .typer {
      height: 300px;
      width: 425px;
    }
    .img-portrait {
      width: 350px;
      height: auto;
      margin-top: 10rem;
      left: 275px;
    }
    .img-pt-xs {
      display: none;
      img {
        display: none;
      }
    }
  }
}

@include md {
  .home {
    span {
      font-size: 4rem;
      line-height: 35px;
    }
    .typer {
      height: 200px;
      width: 425px;
    }
    .img-portrait {
      width: 325px;
      height: auto;
      margin: 5.5rem auto;
      left: 215px;
    }
  }
  .img-pt-xs {
    display: none;
    img {
      display: none;
    }
  }
  .contact-button {
    span {
      top: 10px !important;
    }
  }
}

@include sm {
  .home {
    height: auto;
    span {
      font-size: 3.25rem;
      line-height: 45px;
    }
    .typer {
      height: 250px;
      width: 425px;
    }
    .sub-typer {
      margin-top: 2rem;
      width: 450px;
      line-height: 3rem;
    }
    .img-portrait {
      img {
        display: none;
      }
    }
  }
  .img-pt-xs {
    img {
      display: flex;
      margin: 25rem 2rem;
      width: auto;
      height: 100%;
      position: relative;
      z-index: 20;
      top: 200px;
    }
  }
}

@include xs {
  .home {
    span {
      font-size: 2.25rem;
      line-height: 35px;
    }
    .typer {
      height: 200px;
      width: 300px;
    }
    .sub-typer {
      margin-top: 2rem;
      width: 300px;
      line-height: 3rem;
    }
  }
  .img-pt-xs {
    img {
      max-width: 85%;
      height: auto;
      margin: 20rem 2rem;
      position: relative;
      z-index: 20;
      top: 200px;
    }
  }
}

.vue-typer {
  .custom.caret {
    animation: rocking 1s ease-in-out 0s infinite;
    @keyframes rocking {
      0%,
      100% {
        transform: rotateZ(-5deg);
      }
      50% {
        transform: rotateZ(5deg);
      }
    }
  }
}
</style>
