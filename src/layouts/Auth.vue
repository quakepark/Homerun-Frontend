<template>
  <main id="auth-layout">
      <NavBar />
      <router-view />
      <Footer />
  </main>
</template>

<script>
import NavBar from '@/components/Navbar.vue';
import Footer from '@/components/Footer.vue';

export default {
  name: 'auth-layout',
  components: {
    NavBar,
    Footer,
  },
};
</script>

<style scoped>
  #auth-layout {
    width: 100vw;
    height: 100vh;
    background: #6784ff;
    display:flex;
    flex-direction:column;
    overflow-y: auto;
  }

  #auth-layout .b-footer {
    position: absolute;
    bottom: 0;
  }

</style>
