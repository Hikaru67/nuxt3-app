<template>
  <Header />
  <!-- end main header -->

  <transition name="fade">
    <div class="container-fluid">
      <slot />
      <!-- end main content -->
    </div>
  </transition>

  <Footer />
  <!-- end main footer -->
  <!-- end main sidebar -->
</template>

<style lang="scss" scoped>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s;
}
.fade-enter,
.fade-leave-to {
  opacity: 0;
}
</style>

<script>
import Footer from '~/components/layouts/Footer'
import Header from '~/components/layouts/Header'

export default {
  components: {
    Footer,
    Header
  },

  middleware: ['auth'],

  data() {
    return {

    }
  }
}
</script>
