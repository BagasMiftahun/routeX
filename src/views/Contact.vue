<template>
  <Banner title="Contact" currentPage="Contact"/>
  <Contact/>
  <ProductContact/>
</template>

<script>
import Banner from '../components/shared/Banner.vue';
import Contact from '../components/shared/Contact.vue';
import ProductContact from '../components/contact/ProductContact.vue';

export default {
  name: 'ContactView',
  components: {
    Banner,
    Contact,
    ProductContact
  },
};
</script>

<style scoped>
/* Tambahkan gaya CSS spesifik untuk Contact di sini jika perlu */
</style>
