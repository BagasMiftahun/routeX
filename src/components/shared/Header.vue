<template>
  <!-- Header area start -->
  <header>
    <div id="header-sticky" class="header__area header-1 gray-bg">
      <div class="header-container">
        <div class="mega__menu-wrapper p-relative">
          <div class="header__main">
            <div class="header__left">
              <div class="header__logo">
                <router-link to="/">
                  <div class="logo">
                    <img src="/assets/imgs/logo/logo.svg" alt="logo not found" />
                  </div>
                </router-link>
              </div>
            </div>
            <div class="header__middle">
              <div class="mean__menu-wrapper d-none d-xl-block">
                <div class="main-menu">
                  <nav id="mobile-menu">
                    <ul>
                      <li :class="{ active: isActive('/') }">
                        <router-link to="/">Home</router-link>
                      </li>
                      <li :class="{ active: isActive('/about-us') }">
                        <router-link to="/about-us">About Us</router-link>
                      </li>
                      <li :class="{ active: isActive('/story') }">
                        <router-link to="/story">Story</router-link>
                      </li>
                      <li :class="{ active: isActive('/visa') }">
                        <router-link to="/visa">Visa</router-link>
                      </li>
                      <li :class="{ active: isActive('/blog') }">
                        <router-link to="/blog">Blog</router-link>
                      </li>
                      <li class="has-dropdown">
                        <a href="javascript:void(0)">Page</a>
                        <ul class="submenu">
                          <li :class="{ active: isActive('/visa-offers') }">
                            <router-link to="/visa-offers">Visa Offers</router-link>
                          </li>
                          <li :class="{ active: isActive('/gallery') }">
                            <router-link to="/gallery">Gallery</router-link>
                          </li>
                          <li :class="{ active: isActive('/pricing') }">
                            <router-link to="/pricing">Pricing</router-link>
                          </li>
                          <li :class="{ active: isActive('/coaching') }">
                            <router-link to="/coaching">Coaching</router-link>
                          </li>
                          <li :class="{ active: isActive('/countries') }">
                            <router-link to="/countries">Countries</router-link>
                          </li>
                          <li :class="{ active: isActive('/team') }">
                            <router-link to="/team">Team</router-link>
                          </li>
                          <li :class="{ active: isActive('/faq') }">
                            <router-link to="/faq">FAQ</router-link>
                          </li>
                        </ul>
                      </li>
                      <li :class="{ active: isActive('/contact') }">
                        <router-link to="/contact">Contact</router-link>
                      </li>
                    </ul>
                  </nav>
                </div>
              </div>
            </div>
            <div class="header__right">
              <div class="header__action d-flex align-items-center">
                <div class="header__btn-wrap d-none d-sm-inline-flex">
                  <router-link to="/contact" class="rr-btn">
                    Get An Appointment <i class="fa-solid fa-arrow-right"></i>
                  </router-link>
                </div>
                <div class="header__hamburger ml-20 d-xl-none">
                  <div class="sidebar__toggle">
                    <button class="bar-icon">
                      <span></span>
                      <span></span>
                      <span></span>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div id="popup-search-box">
      <div class="box-inner-wrap d-flex align-items-center">
        <form id="form" action="#" method="get" role="search">
          <input id="popup-search" type="text" name="s" placeholder="Type keywords here..." />
        </form>
        <div class="search-close"><i class="fa-sharp fa-regular fa-xmark"></i></div>
      </div>
    </div>
  </header>
  <!-- Header area end -->
</template>

<script>
export default {
  name: 'Header',
  methods: {
    isActive(route) {
      return this.$route.path === route;
    }
  }
};
</script>

<style scoped>
/* Tambahkan gaya CSS spesifik untuk header di sini jika perlu */
.active {
  font-weight: bold; /* Example style */
  color: #ff0000; /* Change to your desired color */
}
</style>
