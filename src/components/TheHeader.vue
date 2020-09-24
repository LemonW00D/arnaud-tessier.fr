<template>
  <div>
  <transition name="nav-top" appear>
    <nav class="navbar navbar-expand-md">
      <div class="d-flex flex-column justify-content-center align-items-center">
        <img src="@/assets/img/logo-AT.png" alt="Arnaud Tessier" class="logo">
      </div>
      <button class="navbar-toggler navbar-light w-50">
        <span
          class="navbar-toggler-icon"
          v-trigger-collapse="'collapse'"
        ></span>
      </button>
      <div id="collapse" class="collapse navbar-collapse">
        <ul class="navbar-nav mx-auto">
          <li class="nav-item mx-2">
            <router-link class="nav-link white" to="/home" id="home"><span>accueil</span></router-link>
          </li>
          <li class="nav-item mx-2">
            <router-link class="nav-link white" to="/about" id="about"><span>à propos</span></router-link>
          </li>
          <li class="nav-item mx-2">
            <router-link class="nav-link white" to="/skills" id="skills"><span>compétences</span></router-link>
          </li>    
          <li class="nav-item mx-2">
            <router-link class="nav-link white" to="/works" id="works"><span>portfolio</span></router-link>
          </li> 
          <li class="nav-item mx-2">
            <router-link class="nav-link white" to="/prices" id="prices"><span>tarifs</span></router-link>
          </li>          
          <li class="nav-item mx-2">
            <router-link class="nav-link white" to="/contact" id="contact"><span>contact</span></router-link>
          </li>
        </ul>
      </div>
      <!-- <Toggle @toggle="$emit('toggle')" /> -->
    </nav>
  </transition>
  </div>
</template>

<script>
/*import Toggle from '@/components/Toggle'*/

export default {
  directives: {
    triggerCollapse: {
      inserted(el, binding) {
        window.addEventListener("click", () => {
          nav.classList.remove("show");
        });
        const nav = document.querySelector(`#${binding.value}`);
        el.addEventListener("click", event => {
          if (nav.classList.contains("show")) {
            nav.classList.remove("show");
          } else {
            nav.classList.add("show");
          }
          event.stopPropagation();
        });
      }
    }
  },/*
  components: {
    Toggle,
  },*/
};
</script>

<style lang="scss" scoped>
@import "@/assets/scss/style.main.scss";

nav {
  padding: 0.5rem 1rem;
  background: $dark-blue;
  z-index: 999;
}

img{
  height:50px;
}

.navbar-collapse, ul, li, .nav-link, span, .navbar-toggler{
  background-color: $dark-blue;
}

.nav-link{
  text-transform: uppercase;
  text-align: center;
  &:hover{
    opacity: 1;
  }
}

li {
  width: 130px;
  a {
    cursor: pointer;
    font-size: 1.4rem;
    line-height: 2.4rem;
    margin: 0 0.25rem;
  }
}

.navbar-brand {
  font-size: 2.4rem;
  line-height: 2.4rem;
  padding: 1rem 0 1rem 0;
  margin-right: -26.625rem;
}

li {
  letter-spacing: 1px;
  line-height: 2.1rem;
}

span{  
  font-weight: 400;
}

.navbar-toggler-icon{
  background-color:$dark-blue;
  background-image: url("data:image/svg+xml;charset=utf8,%3Csvg viewBox='0 0 32 32' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath stroke='white' stroke-width='2' stroke-linecap='round' stroke-miterlimit='10' d='M4 8h24M4 16h24M4 24h24'/%3E%3C/svg%3E");
  font-size: 1.5rem;
}

.white {
  color: white;
  margin: 0;
}

#home{
  &:hover{
    span {
      display: none;
    }
  &:hover:before {
    content:"HOME";
    color: $yellow;
    }
  }
}
#about{
  &:hover{
    span {
      display: none;
    }
  &:hover:before {
    content:"ABOUT";
      color: $yellow;
    }
  }
}
#skills{
  &:hover{
    span {
      display: none;
    }
  &:hover:before {
    content:"skills";
      color: $yellow;
    }
  }
}
#works{
  &:hover{
    span {
      display: none;
    }
  &:hover:before {
    content:"works";
      color: $yellow;
    }
  }
}
#prices{
  &:hover{
    span {
      display: none;
    }
  &:hover:before {
    content:"prices";
      color: $yellow;
    }
  }
}
#contact{
  &:hover{
    span {
      display: none;
    }
  &:hover:before {
    content:"get in touch";
      color: $yellow;
    }
  }
}

@keyframes fromTop {
  from {
    transform: translateY(-100px);
  }
  to {
  }
}

.nav-top-enter-active {
  animation: fromTop 1s;
  animation-delay: 2s;
}

.router-link-active {
  &:after {
    bottom: -2px;
    left: 0;
    right: 0;
    margin: 0 auto;
    display: block;
    height: 2px;
    background: $yellow;
    width: 20px;
    margin: 0 auto;
    content: "";
  }
  span{
    font-weight: bold;
    color: $yellow;
  }
}

@include md {
  nav {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
  .navbar-toggler {
    margin-top: 1rem;
  }
  .navbar-brand {
    margin-right: 0;
  }
}
</style>
