<template>
  <Banner title="About Us" currentPage="About Us"/>
  <ChooseUs />
  <Process />
  <Faq />
  <Brand />
  <Contact hasGrayBg="true" />
  <CountriesAbout />
</template>

<script>
import Banner from '../components/shared/Banner.vue';
import ChooseUs from '../components/shared/ChooseUs.vue';
import Process from '../components/shared/Process.vue';
import Faq from '../components/shared/Faq.vue';
import Brand from '../components/shared/Brand.vue';
import Contact from '../components/shared/Contact.vue';
import CountriesAbout from '../components/aboutus/CountriesAbout.vue';

export default {
  name: 'AboutUsView',
  components: {
    Banner,
    ChooseUs,
    Process,
    Faq,
    Brand,
    Contact,
    CountriesAbout
  },
};
</script>

<style scoped>
/* Tambahkan gaya CSS spesifik untuk AboutUs di sini jika perlu */
</style>
