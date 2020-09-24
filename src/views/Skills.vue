<template>
<div class="d-flex flex-row justify-content-center align-items-center px-5" style="padding-top: 6rem">
<p>hello skills</p>
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

#contact-me{
  &:hover{
      span {
        display: none;
      }
    &:hover:before {
      content:"CONTACT ME";
      color: $yellow;
      text-shadow: 2px 2px 2px $dark-blue;
      }
    }
}
#found-me{
  &:hover{
      span {
        display: none;
      }
    &:hover:before {
      content:"FOUND ME";
      color: $yellow;
      text-shadow: 2px 2px 2px $dark-blue;
      }
    }
}
#adresse{
  &:hover{
      span {
        display: none;
      }
    &:hover:before {
      content:"Location";
      color: $dark-blue;
      }
    }
}
#phone{
  &:hover{
      span {
        display: none;
      }
    &:hover:before {
      content:"Phone";
      color: $dark-blue;
      }
    }
}
#mail{
  &:hover{
      span {
        display: none;
      }
    &:hover:before {
      content:"Email";
      color: $dark-blue;
      }
    }
}




@include xs {

}

@include sm {

}

@include md {

}

@include xl{

}
</style>
