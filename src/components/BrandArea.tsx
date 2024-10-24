import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";

const BrandArea: React.FC = () => {
  return (
    <>
      {/* Brand area start */}
      <section className="main-brand__area gray-bg section-space-bottom-2">
        <div className="brand__area">
          <div className="container">
            <div className="row">
              <div className="col-12">
                <Swiper
                  className="brand__active wow fadeIn"
                  data-wow-delay=".3s"
                  spaceBetween={5}
                  slidesPerView={5}
                  slidesOffsetBefore={5}
                  slidesOffsetAfter={5}
                  loop
                >
                  <SwiperSlide>
                    <div
                      className="brand__item text-center  wow fadeIn animated"
                      data-wow-delay=".1s"
                    >
                      <div className="brand__thumb">
                        <a href="https://segment.com/" target="_blank">
                          <img
                            className="img-fluid"
                            src="assets/imgs/brands/black-brands/black-brand1.png"
                            alt="image not found"
                          />
                        </a>
                      </div>
                    </div>
                  </SwiperSlide>
                  <SwiperSlide>
                    <div
                      className="brand__item text-center  wow fadeIn animated"
                      data-wow-delay=".1s"
                    >
                      <div className="brand__thumb">
                        <a href="https://segment.com/" target="_blank">
                          <img
                            className="img-fluid"
                            src="assets/imgs/brands/black-brands/black-brand2.png"
                            alt="image not found"
                          />
                        </a>
                      </div>
                    </div>
                  </SwiperSlide>
                  <SwiperSlide>
                    <div
                      className="brand__item text-center  wow fadeIn animated"
                      data-wow-delay=".1s"
                    >
                      <div className="brand__thumb">
                        <a href="https://segment.com/" target="_blank">
                          <img
                            className="img-fluid"
                            src="assets/imgs/brands/black-brands/black-brand3.png"
                            alt="image not found"
                          />
                        </a>
                      </div>
                    </div>
                  </SwiperSlide>
                  <SwiperSlide>
                    <div
                      className="brand__item text-center  wow fadeIn animated"
                      data-wow-delay=".1s"
                    >
                      <div className="brand__thumb">
                        <a href="https://segment.com/" target="_blank">
                          <img
                            className="img-fluid"
                            src="assets/imgs/brands/black-brands/black-brand4.png"
                            alt="image not found"
                          />
                        </a>
                      </div>
                    </div>
                  </SwiperSlide>
                  <SwiperSlide>
                    <div
                      className="brand__item text-center  wow fadeIn animated"
                      data-wow-delay=".1s"
                    >
                      <div className="brand__thumb">
                        <a href="https://segment.com/" target="_blank">
                          <img
                            className="img-fluid"
                            src="assets/imgs/brands/black-brands/black-brand5.png"
                            alt="image not found"
                          />
                        </a>
                      </div>
                    </div>
                  </SwiperSlide>
                </Swiper>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default BrandArea;
