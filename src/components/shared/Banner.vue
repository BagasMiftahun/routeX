<template>
    <div
      class="breadcrumb__area dark-green breadcrumb-space overflow-hidden custom-width position-relative z-1"
      :style="{ backgroundImage: `url(${backgroundImage})` }"
    >
      <div class="container">
        <div class="row align-items-center justify-content-between">
          <div class="col-12">
            <div class="breadcrumb__content">
              <div class="breadcrumb__title-wrapper mb-15 mb-sm-10 mb-xs-5">
                <h1
                  class="breadcrumb__title color-white wow fadeInLeft animated"
                  data-wow-delay=".2s"
                >
                  {{ title }}
                </h1>
              </div>
              <div
                class="breadcrumb__menu wow fadeInLeft animated"
                data-wow-delay=".4s"
              >
                <nav>
                  <ul>
                    <li>
                      <span><a :href="homeLink">Home</a></span>
                    </li>
                    <li class="active"><span>{{ currentPage }}</span></li>
                  </ul>
                </nav>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    name: "Banner",
    props: {
      title: {
        type: String,
        required: true,
      },
      currentPage: {
        type: String,
        required: true,
      },
    },
    computed: {
      homeLink() {
        return "index.html"; // Set the home link here
      },
      backgroundImage() {
        return "assets/imgs/breadcrumb/breadcrumb1.png"; // Set the default background image here
      },
    },
  };
  </script>
  
  <style scoped></style>
  