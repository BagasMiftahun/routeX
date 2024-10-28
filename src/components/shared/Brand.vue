<template>
  <!-- Brand area start -->
  <section class="main-brand__area section-space-bottom">
    <div class="brand__area">
      <div class="container">
        <div class="row">
          <div class="col-12">
            <swiper class="brand__active wow fadeIn" data-wow-delay=".2s" :slides-per-view="5" :space-between="30" :loop="true">
                <swiper-slide>
                  <div
                    class="brand__item text-center wow fadeIn animated"
                    data-wow-delay=".3s"
                  >
                    <div class="brand__thumb">
                      <a href="https://segment.com/"
                        ><img
                          class="img-fluid"
                          src="/assets/imgs/brands/home2-companey-brands-image-1.png"
                          alt="image not found"
                      /></a>
                    </div>
                  </div>
                </swiper-slide>
                <swiper-slide>
                  <div
                    class="brand__item text-center wow fadeIn animated"
                    data-wow-delay=".4s"
                  >
                    <div class="brand__thumb">
                      <a href="https://www.splunk.com/"
                        ><img
                          class="img-fluid"
                          src="/assets/imgs/brands/home2-companey-brands-image-2.png"
                          alt="image not found"
                      /></a>
                    </div>
                  </div>
                </swiper-slide>
                <swiper-slide>
                  <div
                    class="brand__item text-center wow fadeIn animated"
                    data-wow-delay=".5s"
                  >
                    <div class="brand__thumb">
                      <a href="https://www.hubspot.com/"
                        ><img
                          class="img-fluid"
                          src="/assets/imgs/brands/home2-companey-brands-image-3.png"
                          alt="image not found"
                      /></a>
                    </div>
                  </div>
                </swiper-slide>
                <swiper-slide>
                  <div
                    class="brand__item text-center wow fadeIn animated"
                    data-wow-delay=".6s"
                  >
                    <div class="brand__thumb">
                      <a href="https://app.asana.com/"
                        ><img
                          class="img-fluid"
                          src="/assets/imgs/brands/home2-companey-brands-image-4.png"
                          alt="image not found"
                      /></a>
                    </div>
                  </div>
                </swiper-slide>
                <swiper-slide>
                  <div
                    class="brand__item text-center wow fadeIn animated"
                    data-wow-delay=".7s"
                  >
                    <div class="brand__thumb">
                      <a href="https://www.airtasker.com/"
                        ><img
                          class="img-fluid"
                          src="/assets/imgs/brands/home2-companey-brands-image-5.png"
                          alt="image not found"
                      /></a>
                    </div>
                  </div>
                </swiper-slide>

                <swiper-slide>
                  <div
                    class="brand__item text-center wow fadeIn animated"
                    data-wow-delay=".3s"
                  >
                    <div class="brand__thumb">
                      <a href="https://segment.com/"
                        ><img
                          class="img-fluid"
                          src="/assets/imgs/brands/home2-companey-brands-image-1.png"
                          alt="image not found"
                      /></a>
                    </div>
                  </div>
                </swiper-slide>
                <swiper-slide>
                  <div
                    class="brand__item text-center wow fadeIn animated"
                    data-wow-delay=".4s"
                  >
                    <div class="brand__thumb">
                      <a href="https://www.splunk.com/"
                        ><img
                          class="img-fluid"
                          src="/assets/imgs/brands/home2-companey-brands-image-2.png"
                          alt="image not found"
                      /></a>
                    </div>
                  </div>
                </swiper-slide>
                <swiper-slide>
                  <div
                    class="brand__item text-center wow fadeIn animated"
                    data-wow-delay=".5s"
                  >
                    <div class="brand__thumb">
                      <a href="https://www.hubspot.com/"
                        ><img
                          class="img-fluid"
                          src="/assets/imgs/brands/home2-companey-brands-image-3.png"
                          alt="image not found"
                      /></a>
                    </div>
                  </div>
                </swiper-slide>
                <swiper-slide>
                  <div
                    class="brand__item text-center wow fadeIn animated"
                    data-wow-delay=".6s"
                  >
                    <div class="brand__thumb">
                      <a href="https://app.asana.com/"
                        ><img
                          class="img-fluid"
                          src="/assets/imgs/brands/home2-companey-brands-image-4.png"
                          alt="image not found"
                      /></a>
                    </div>
                  </div>
                </swiper-slide>
                <swiper-slide>
                  <div
                    class="brand__item text-center wow fadeIn animated"
                    data-wow-delay=".7s"
                  >
                    <div class="brand__thumb">
                      <a href="https://www.airtasker.com/"
                        ><img
                          class="img-fluid"
                          src="/assets/imgs/brands/home2-companey-brands-image-5.png"
                          alt="image not found"
                      /></a>
                    </div>
                  </div>
                </swiper-slide>
            </swiper>
          </div>
        </div>
      </div>
    </div>
  </section>
  <!-- Brand area end -->
</template>

<script>
import { Swiper, SwiperSlide } from "swiper/vue";

export default {
  name: "Brand",
  components: {
    Swiper,
    SwiperSlide,
  },
};
</script>

<style scoped></style>
