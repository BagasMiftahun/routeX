<template>
  <BannerHome />
  <ServiceHome />
  <ChooseUs :hasGrayBg="true" />
  <BrandHome />
  <ProjectHome />
  <VisaCategory />
  <AdventureHome />
  <Faq :hasGrayBg="true" />
  <TeamHome />
  <CoachingHome />
  <TestimonialHome />
  <Process :hasGrayBg="true"/>
  <BlogHome />
</template>

<script>
import BannerHome from "../components/home/BannerHome.vue";
import BrandHome from "../components/home/BrandHome.vue";
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
    BrandHome,
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



