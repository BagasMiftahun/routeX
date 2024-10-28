import { createRouter, createWebHistory } from 'vue-router';
import HomeView from '../views/Home.vue';
import AboutUsView from '../views/AboutUs.vue';
import StoryView from '../views/Story.vue';
import BlogView from '../views/Blog.vue';
import VisaView from '../views/Visa.vue';
import ContactView from '../views/Contact.vue';
import DefaultLayout from '../layouts/DefaultLayout.vue';
import VisaOfferView from '../views/VisaOffer.vue';
import GalleryView from '../views/Gallery.vue';
import CoachingView from '../views/Coaching.vue';
import CountriesView from '../views/Countries.vue';
import TeamView from '../views/Team.vue';
import FaqView from '../views/Faq.vue';
import PricingView from '../views/Pricing.vue';
// Import view lainnya sesuai kebutuhan

const routes = [
  {
    path: '/',
    component: DefaultLayout,
    children: [
      { path: '', component: HomeView },
      { path: 'about-us', component: AboutUsView },
      { path: 'story', component: StoryView },
      { path: 'blog', component: BlogView },
      { path: 'visa', component: VisaView },
      { path: 'visa-offers', component: VisaOfferView },
      { path: 'gallery', component: GalleryView },
      { path: 'coaching', component: CoachingView },
      { path: 'countries', component: CountriesView },
      { path: 'team', component: TeamView },
      { path: 'faq', component: FaqView },
      { path: 'pricing', component: PricingView },
      { path: 'contact', component: ContactView },
    ],
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
