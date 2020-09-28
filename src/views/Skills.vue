<template>
<div class="d-flex flex-row justify-content-center align-items-center px-5" style="padding-top: 6rem">
<p>hello skills</p>
<div class="download">
  <a download="Arnaud_TESSIER_CV.pdf" href="Arnaud_TESSIER_CV.pdf" target="_blank" rel="external nofollow noreferrer noopener" title="Mon CV en pdf" role="link" aria-pressed="false">télécharger mon cv</a>
</div>
</div>
</template>

<script>



export default {
  name: "Skills",
  components:{

  },
  data() {
    return {
      
    }
  },
  methods: {
   
  },
}
</script>

<style lang="scss">
@import "@/assets/scss/_variables.scss";
@import "@/assets/scss/_responsive.scss";

.download {
  position: relative;
  margin: 2.5rem auto 0;
  top: -125px;
  left: -200px;
  display:flex;
  align-items:center;
  justify-content:center;
  border-radius: 5px;

  a{
    text-transform: uppercase;
    text-align: center;
    width: 110px;
    height: 110px;
    text-align: center;
    letter-spacing: 1px;
    font-weight: bold;
    position: relative;
    padding: 4rem 0;
    border-radius: 5px;
    font-size: 1.15rem !important;
    
    &:after {
      transition: 0.3s all ease;
      content:'';
      position: absolute;
      left: 0;
      top: 0;
      bottom: 0;
      right: 0;
      border-radius: 5px;
      border: 3px solid #B15947;
    }

    &:before {
      content: '';
      position: absolute;
      border-radius: 3px;
      left: 0;
      top: 0;
      bottom: 0;
      right: 0;
      -webkit-transform: rotate(45deg);
      transform: rotate(45deg);
      background-color:#fff;
      border-radius: 5px;
      z-index: -1;
    }

    &:hover {
      &:after {
        -webkit-transform: rotate(45deg);
        transform: rotate(45deg);
      }
    }

    &:active {
      -webkit-transform: scale(1.1);
      transform: scale(1.1);
      &:before {
        background-color: #f1481b;
      }
      &:after {
        border-color: #f1481b;
        border-radius: 5px;
      }
    }
  }
}


@include xxl {
  
}
@include xl {
  
}
@include md {
  
}
@include sm {
  .download{
    a{
      margin-left: 10rem;
    }
  }
}
@include xs {
  .download{
    position: static !important;
    a{
      margin: auto;
    }
  }
}
</style>
