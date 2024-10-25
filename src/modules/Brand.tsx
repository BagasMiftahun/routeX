import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import data from "../data/data.json"; // Sesuaikan path import
import { Data } from "../types"
import { Autoplay } from "swiper/modules";

const Brand: React.FC = () => {
  const brands: Data = data;

  return (
    <>
      {/* Brand area start */}
      <section className="main-brand__area gray-bg section-space-bottom-2">
        <div className="brand__area">
          <div className="container">
            <div className="row">
              <div className="col-12">
                <Swiper
                  modules={[Autoplay]}
                  direction="horizontal"
                  className="brand__active wow fadeIn"
                  data-wow-delay=".3s"
                  spaceBetween={5}
                  slidesOffsetBefore={5}
                  slidesOffsetAfter={5}
                  loop
                  autoplay={{
                    delay: 3000, // Set delay between slides to 3000ms (3 seconds)
                    disableOnInteraction: false, // Keeps autoplay running even after user interaction
                  }}
                  breakpoints={{
                    320: {
                      slidesPerView: 1,
                    },
                    480: {
                      slidesPerView: 2,
                    },
                    768: {
                      slidesPerView: 3,
                    },
                    1024: {
                      slidesPerView: 4,
                    },
                    1200: {
                      slidesPerView: 5,
                    },
                  }}
                >
                  {brands.brands.map((brand) => (
                    <SwiperSlide key={brand.id}>
                    <div
                      className="brand__item text-center  wow fadeIn animated"
                      data-wow-delay=".1s"
                    >
                      <div className="brand__thumb">
                        <a href={brand.link} target="_blank">
                          <img
                            className="img-fluid"
                            src={brand.image}
                            alt="image not found"
                          />
                        </a>
                      </div>
                    </div>
                  </SwiperSlide>
                  ))}
                </Swiper>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Brand;
