import { createRouter, createWebHistory } from 'vue-router';
import Home from '../views/Home.vue';
import AboutUs from '../views/AboutUs.vue';
import Story from '../views/Story.vue';
import Blog from '../views/Blog.vue';
import Visa from '../views/Visa.vue';
import Contact from '../views/Contact.vue';
import DefaultLayout from '../layouts/DefaultLayout.vue';
import VisaOffer from '../views/VisaOffer.vue';
import Gallery from '../views/Gallery.vue';
import Coaching from '../views/Coaching.vue';
import Countries from '../views/Countries.vue';
import Team from '../views/Team.vue';
import Faq from '../views/Faq.vue';
import Pricing from '../views/Pricing.vue';
// Import view lainnya sesuai kebutuhan

const routes = [
  {
    path: '/',
    component: DefaultLayout,
    children: [
      { path: '', component: Home },
      { path: 'about-us', component: AboutUs },
      { path: 'story', component: Story },
      { path: 'blog', component: Blog },
      { path: 'visa', component: Visa },
      { path: 'visa-offers', component: VisaOffer },
      { path: 'gallery', component: Gallery },
      { path: 'coaching', component: Coaching },
      { path: 'countries', component: Countries },
      { path: 'team', component: Team },
      { path: 'faq', component: Faq },
      { path: 'pricing', component: Pricing },
      { path: 'contact', component: Contact },
    ],
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
