<template>
  <div class="d-flex flex-row">
    <transition name="works-left" appear>
      <works-page class="w-75"></works-page>
    </transition>
    
  </div>
</template>

<script>
import WorksPage from '@/components/Works/WorksPage';

export default {
  components: {
    WorksPage
  }
}
</script>

<style lang="scss" scoped>

  @keyframes fromLeft {
    from {
      transform: translateX(-100px);
      filter: grayscale(100%);
      opacity: 25%;
    }
    to {}
  }

  @keyframes fromRight {
    from {
      transform: translateX(100px)
    }
    to {}
  }

  .works-left-enter-active {
    animation: fromLeft 1.25s;
  }

  .cart-right-enter-active {
    animation: fromRight 1.25s;
  }
</style>