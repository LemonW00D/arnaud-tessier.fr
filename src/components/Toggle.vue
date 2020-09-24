<template>
  <div class="toggle-wrapper">
    <label class="toggle">
      <input 
        type="checkbox" 
        :checked="(mode === 'dark') ? 'checked' : false" 
        @change="$emit('toggle')"
      />
      <span class="toggler round"></span>
    </label>
  </div>
</template>

<script>

export default {
  props: ['mode'],
}

</script>

<style lang="scss">
@import "@/assets/scss/style.main.scss";

.toggle {
  position: absolute;
  z-index: 1000;
  right: 30px;
  top: 14px;
  width: 60px;
  height: 34px;
}

.toggle input {
  opacity: 0;
  width: 0;
  height: 0;
}

.toggler {
  position: absolute;
  cursor: pointer;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: #57C4DE;
  -webkit-transition: 0.4s;
  transition: 0.4s;
}

.toggler:before {
  position: absolute;
  content: "";
  height: 24px;
  width: 24px;
  left: 3px;
  bottom: 0.35rem;
  background: #FFF;
  box-shadow: 0 0 0.25em 0.0625em #fbee8d, 0 0 2em 0 #FFEB3B, inset -0.25em -0.25em 0 0 #fbee8e, inset -0.3125em -0.3125em 0 0.625em #fff5b2;
  -webkit-transition: 0.4s;
  transition: 0.4s;
}

input:checked + .toggler {
  background-color: #21256D;
}

input:checked + .toggler:before {
  -webkit-transform: translateX(26px);
  -ms-transform: translateX(26px);
  transform: translateX(26px);
  background: transparent;
  box-shadow: inset -0.1875rem -0.1875rem 0 0 #fbe7ef, inset -0.5625rem -0.5625rem 0 0 #fffff7;
}

.toggler.round {
  border-radius: 34px;
  border: 2px solid $yellow;
}
.toggler.round:before {
  border-radius: 50%;
}
</style>

