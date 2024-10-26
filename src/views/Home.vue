<template>
  <BannerHome />
  <ServiceHome />
  <ChooseUs />
  <Brand />
  <ProjectHome />
  <VisaCategory />
  <AdventureHome />
  <Faq />
  <TeamHome />
  <CoachingHome />
  <TestimonialHome />
  <Process />
  <BlogHome />
</template>

<script>
import BannerHome from "../components/home/BannerHome.vue";
import Brand from "../components/shared/Brand.vue";
import BlogHome from "../components/home/BlogHome.vue";
import ChooseUs from "../components/shared/ChooseUs.vue";
import CoachingHome from "../components/home/CoachingHome.vue";
import Faq from "../components/shared/Faq.vue";
import Process from "../components/shared/Process.vue";
import ProjectHome from "../components/home/ProjectHome.vue";
import ServiceHome from "../components/home/ServiceHome.vue";
import TeamHome from "../components/home/TeamHome.vue";
import TestimonialHome from "../components/home/TestimonialHome.vue";
import VisaCategory from "../components/shared/VisaCategory.vue";
import AdventureHome from "../components/home/AdventureHome.vue";

export default {
  name: "Home",
  components: {
    BannerHome,
    Brand,
    BlogHome,
    ChooseUs,
    CoachingHome,
    Faq,
    Process,
    ProjectHome,
    ServiceHome,
    TeamHome,
    TestimonialHome,
    VisaCategory,
    AdventureHome
  }
};
</script>

<style scoped>
/* Tambahkan gaya CSS spesifik untuk Home di sini jika perlu */
</style>



