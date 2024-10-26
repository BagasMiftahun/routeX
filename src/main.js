import { createApp } from 'vue';
import App from './App.vue';
import router from './router';

// Impor CSS global
import './assets/css/vendor/bootstrap.min.css';
import './assets/css/vendor/animate.min.css';
import './assets/css/vendor/odometer.min.css';
import './assets/css/plugins/swiper.min.css';
import './assets/css/vendor/magnific-popup.css';
import './assets/css/vendor/fontawesome-pro.css'; 
import './assets/css/vendor/spacing.css';
import './assets/css/vendor/custom-font.css';
import './assets/css/main.css'; // CSS utama Anda

const app = createApp(App);

// Mengimpor dan menjalankan JavaScript
import './assets/js/vendor/jquery-3.6.0.min.js';
import './assets/js/plugins/waypoints.min.js';
import './assets/js/vendor/bootstrap.bundle.min.js';
import './assets/js/plugins/meanmenu.min.js';
import './assets/js/plugins/swiper.min.js';
import './assets/js/vendor/magnific-popup.min.js';
import './assets/js/vendor/type.js';
import './assets/js/vendor/vanilla-tilt.js';
import './assets/js/plugins/nice-select.min.js';
import './assets/js/vendor/odometer.min.js';
import './assets/js/vendor/jquery-ui.min.js';
import './assets/js/plugins/parallax-scroll.js';
import './assets/js/plugins/jquery.countdown.min.js';
import './assets/js/vendor/smooth-scroll.js';
import './assets/js/plugins/isotope-docs.min.js';
import './assets/js/vendor/ajax-form.js';
import './assets/js/main.js'; // JS utama Anda

app.use(router); // Gunakan router
app.mount('#app');
