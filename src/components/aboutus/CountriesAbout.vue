<template>
  <!--countries start-->
  <section class="countries section-space overflow-hidden">
    <div class="container">
      <div class="row">
        <div class="col-12">
          <div class="section__title-wrapper text-center mb-50">
            <h6
              class="section__title-wrapper-center-subtitle mb-10 wow fadeInLeft animated"
              data-wow-delay=".2s"
            >
              Countries category
              <svg
                width="14"
                height="13"
                viewBox="0 0 14 13"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g clip-path="url(#clip0_5704_705)">
                  <path
                    d="M4.9248 11.3357L6.49525 10.6415L5.62485 10.0312L4.9248 11.3357Z"
                    fill="#83CD20"
                  />
                  <path
                    d="M4.9248 11.3353L4.99976 8.96094L13.9078 0.960938L5.66407 10.0722L4.9248 11.3353Z"
                    fill="#83CD20"
                  />
                  <path
                    d="M5 8.96094L13.908 0.960938L0 7.18797L5 8.96094Z"
                    fill="#83CD20"
                  />
                  <path
                    d="M5.66406 10.0722L9.95686 12.9609L13.9078 0.960938L5.66406 10.0722Z"
                    fill="#034833"
                  />
                </g>
                <defs>
                  <clipPath id="clip0_5704_705">
                    <rect
                      width="13.908"
                      height="12"
                      fill="white"
                      transform="translate(0 0.960938)"
                    />
                  </clipPath>
                </defs>
              </svg>
            </h6>
            <h2
              class="section__title-wrapper-title wow fadeInLeft animated"
              data-wow-delay=".3s"
            >
              Experience the World <br />
              Anew Unveil Hidden
            </h2>
          </div>
        </div>
      </div>

      <div class="row">
        <div class="col-lg-4">
          <ul class="nav nav-tabs countries__tab" id="myTab" role="tablist">
            <li class="nav-item" role="presentation">
              <button
                class="active pb-20"
                id="asia-tab"
                data-bs-toggle="tab"
                data-bs-target="#asia"
                type="button"
                role="tab"
                aria-controls="asia"
                aria-selected="true"
              >
                Asia
                <i class="fa-solid fa-angle-right"></i>
              </button>
            </li>
            <li class="nav-item" role="presentation">
              <button
                class="pb-20"
                id="europe-tab"
                data-bs-toggle="tab"
                data-bs-target="#europe"
                type="button"
                role="tab"
                aria-controls="europe"
                aria-selected="true"
              >
                Europe
                <i class="fa-solid fa-angle-right"></i>
              </button>
            </li>
            <li class="nav-item" role="presentation">
              <button
                class="pb-20"
                id="north-america-tab"
                data-bs-toggle="tab"
                data-bs-target="#north-america"
                type="button"
                role="tab"
                aria-controls="north-america"
                aria-selected="true"
              >
                North America
                <i class="fa-solid fa-angle-right"></i>
              </button>
            </li>
            <li class="nav-item" role="presentation">
              <button
                class="pb-20"
                id="australia-tab"
                data-bs-toggle="tab"
                data-bs-target="#australia"
                type="button"
                role="tab"
                aria-controls="australia"
                aria-selected="true"
              >
                Australia
                <i class="fa-solid fa-angle-right"></i>
              </button>
            </li>
            <li class="nav-item" role="presentation">
              <button
                class="pb-20"
                id="latine-america-tab"
                data-bs-toggle="tab"
                data-bs-target="#latine-america"
                type="button"
                role="tab"
                aria-controls="latine-america"
                aria-selected="true"
              >
                Latine America
                <i class="fa-solid fa-angle-right"></i>
              </button>
            </li>
            <li class="nav-item" role="presentation">
              <button
                id="africa-tab"
                data-bs-toggle="tab"
                data-bs-target="#africa"
                type="button"
                role="tab"
                aria-controls="africa"
                aria-selected="true"
              >
                Africa
                <i class="fa-solid fa-angle-right"></i>
              </button>
            </li>
          </ul>
        </div>
        <div class="col-lg-8">
          <div class="tab-content">
            <div
              class="tab-pane fade show active"
              id="asia"
              role="tabpanel"
              aria-labelledby="asia-tab"
            >
              <div class="countries__tab-content">
                <div
                  class="countries__tab-content__countries-name mb-30 d-flex"
                >
                  <img
                    src="/assets/imgs/countrie/russia.png"
                    alt="img not found"
                  />
                  <h5>Russia</h5>
                </div>
                <div
                  class="countries__tab-content__countries-name mb-30 d-flex"
                >
                  <img
                    src="/assets/imgs/countrie/japan.png"
                    alt="img not found"
                  />
                  <h5>Japan</h5>
                </div>
                <div class="countries__tab-content__countries-name d-flex">
                  <img
                    src="/assets/imgs/countrie/egypt.png"
                    alt="img not found"
                  />
                  <h5>Egypt</h5>
                </div>
                <div
                  class="countries__tab-content__countries-name mb-30 d-flex"
                >
                  <img
                    src="/assets/imgs/countrie/south-korea.png"
                    alt="img not found"
                  />
                  <h5>South Korea</h5>
                </div>
                <div
                  class="countries__tab-content__countries-name mb-30 d-flex"
                >
                  <img
                    src="/assets/imgs/countrie/indonesia.png"
                    alt="img not found"
                  />
                  <h5>Indonesia</h5>
                </div>
                <div class="countries__tab-content__countries-name d-flex">
                  <img
                    src="/assets/imgs/countrie/turkey.png"
                    alt="img not found"
                  />
                  <h5>Turkey</h5>
                </div>
              </div>
            </div>
            <div
              class="tab-pane fade"
              id="europe"
              role="tabpanel"
              aria-labelledby="europe-tab"
            >
              <div class="countries__tab-content">
                <div
                  class="countries__tab-content__countries-name mb-30 d-flex wow fadeInLeft animated"
                >
                  <img
                    src="/assets/imgs/countrie/germany.png"
                    alt="img not found"
                  />
                  <h5>Germany</h5>
                </div>
                <div
                  class="countries__tab-content__countries-name mb-30 d-flex wow fadeInLeft animated"
                >
                  <img
                    src="/assets/imgs/countrie/russia.png"
                    alt="img not found"
                  />
                  <h5>Russia</h5>
                </div>
                <div
                  class="countries__tab-content__countries-name d-flex wow fadeInLeft animated"
                >
                  <img
                    src="/assets/imgs/countrie/italy.png"
                    alt="img not found"
                  />
                  <h5>Italy</h5>
                </div>
                <div
                  class="countries__tab-content__countries-name mb-30 d-flex wow fadeInLeft animated"
                >
                  <img
                    src="/assets/imgs/countrie/switzerland.png"
                    alt="img not found"
                  />
                  <h5>Switzerland</h5>
                </div>
                <div
                  class="countries__tab-content__countries-name mb-30 d-flex wow fadeInLeft animated"
                >
                  <img
                    src="/assets/imgs/countrie/sweden.png"
                    alt="img not found"
                  />
                  <h5>Sweden</h5>
                </div>
                <div
                  class="countries__tab-content__countries-name d-flex wow fadeInLeft animated"
                >
                  <img
                    src="/assets/imgs/countrie/turkey.png"
                    alt="img not found"
                  />
                  <h5>Turkey</h5>
                </div>
              </div>
            </div>
            <div
              class="tab-pane fade"
              id="north-america"
              role="tabpanel"
              aria-labelledby="north-america-tab"
            >
              <div class="countries__tab-content">
                <div
                  class="countries__tab-content__countries-name mb-30 d-flex wow fadeInLeft animated"
                >
                  <img
                    src="/assets/imgs/countrie/united-states.png"
                    alt="img not found"
                  />
                  <h5>United States</h5>
                </div>
                <div
                  class="countries__tab-content__countries-name mb-30 d-flex wow fadeInLeft animated"
                >
                  <img
                    src="/assets/imgs/countrie/bahamas.png"
                    alt="img not found"
                  />
                  <h5>Bahamas</h5>
                </div>
                <div
                  class="countries__tab-content__countries-name d-flex wow fadeInLeft animated"
                >
                  <img
                    src="/assets/imgs/countrie/dominican-republic.png"
                    alt="img not found"
                  />
                  <h5>Dominican Republic</h5>
                </div>
                <div
                  class="countries__tab-content__countries-name mb-30 d-flex wow fadeInLeft animated"
                >
                  <img
                    src="/assets/imgs/countrie/jamaica.png"
                    alt="img not found"
                  />
                  <h5>Jamaica</h5>
                </div>
                <div
                  class="countries__tab-content__countries-name mb-30 d-flex wow fadeInLeft animated"
                >
                  <img
                    src="/assets/imgs/countrie/belize.png"
                    alt="img not found"
                  />
                  <h5>Belize</h5>
                </div>
                <div
                  class="countries__tab-content__countries-name d-flex wow fadeInLeft animated"
                >
                  <img
                    src="/assets/imgs/countrie/honduras.png"
                    alt="img not found"
                  />
                  <h5>Honduras</h5>
                </div>
              </div>
            </div>
            <div
              class="tab-pane fade"
              id="australia"
              role="tabpanel"
              aria-labelledby="australia-tab"
            >
              <div class="countries__tab-content">
                <div
                  class="countries__tab-content__countries-name mb-30 d-flex wow fadeInLeft animated"
                >
                  <img
                    src="/assets/imgs/countrie/australia.png"
                    alt="img not found"
                  />
                  <h5>Australia</h5>
                </div>
                <div
                  class="countries__tab-content__countries-name mb-30 d-flex wow fadeInLeft animated"
                >
                  <img
                    src="/assets/imgs/countrie/nauru.png"
                    alt="img not found"
                  />
                  <h5>Nauru</h5>
                </div>
                <div
                  class="countries__tab-content__countries-name d-flex wow fadeInLeft animated"
                >
                  <img
                    src="/assets/imgs/countrie/papua.png"
                    alt="img not found"
                  />
                  <h5>Papua New Guinea</h5>
                </div>
                <div
                  class="countries__tab-content__countries-name mb-30 d-flex wow fadeInLeft animated"
                >
                  <img
                    src="/assets/imgs/countrie/micronesia.png"
                    alt="img not found"
                  />
                  <h5>Micronesia</h5>
                </div>
                <div
                  class="countries__tab-content__countries-name mb-30 d-flex wow fadeInLeft animated"
                >
                  <img
                    src="/assets/imgs/countrie/tuvalu.png"
                    alt="img not found"
                  />
                  <h5>Tuvalu</h5>
                </div>
                <div
                  class="countries__tab-content__countries-name d-flex wow fadeInLeft animated"
                >
                  <img
                    src="/assets/imgs/countrie/kiribati.png"
                    alt="img not found"
                  />
                  <h5>Kiribati</h5>
                </div>
              </div>
            </div>
            <div
              class="tab-pane fade"
              id="latine-america"
              role="tabpanel"
              aria-labelledby="latine-america-tab"
            >
              <div class="countries__tab-content">
                <div
                  class="countries__tab-content__countries-name mb-30 d-flex wow fadeInLeft animated"
                >
                  <img
                    src="/assets/imgs/countrie/argentina.png"
                    alt="img not found"
                  />
                  <h5>Argentina</h5>
                </div>
                <div
                  class="countries__tab-content__countries-name mb-30 d-flex wow fadeInLeft animated"
                >
                  <img
                    src="/assets/imgs/countrie/brazil.png"
                    alt="img not found"
                  />
                  <h5>Brazil</h5>
                </div>
                <div
                  class="countries__tab-content__countries-name d-flex wow fadeInLeft animated"
                >
                  <img
                    src="/assets/imgs/countrie/venezuela.png"
                    alt="img not found"
                  />
                  <h5>Venezuela</h5>
                </div>
                <div
                  class="countries__tab-content__countries-name mb-30 d-flex wow fadeInLeft animated"
                >
                  <img
                    src="/assets/imgs/countrie/uruguay.png"
                    alt="img not found"
                  />
                  <h5>Uruguay</h5>
                </div>
                <div
                  class="countries__tab-content__countries-name mb-30 d-flex wow fadeInLeft animated"
                >
                  <img
                    src="/assets/imgs/countrie/colombia.png"
                    alt="img not found"
                  />
                  <h5>Colombia</h5>
                </div>
                <div
                  class="countries__tab-content__countries-name d-flex wow fadeInLeft animated"
                >
                  <img
                    src="/assets/imgs/countrie/peru.png"
                    alt="img not found"
                  />
                  <h5>Peru</h5>
                </div>
              </div>
            </div>
            <div
              class="tab-pane fade"
              id="africa"
              role="tabpanel"
              aria-labelledby="africa-tab"
            >
              <div class="countries__tab-content">
                <div
                  class="countries__tab-content__countries-name mb-30 d-flex wow fadeInLeft animated"
                >
                  <img
                    src="/assets/imgs/countrie/south-africa.png"
                    alt="img not found"
                  />
                  <h5>South Africa</h5>
                </div>
                <div
                  class="countries__tab-content__countries-name mb-30 d-flex wow fadeInLeft animated"
                >
                  <img
                    src="/assets/imgs/countrie/uganda.png"
                    alt="img not found"
                  />
                  <h5>Uganda</h5>
                </div>
                <div
                  class="countries__tab-content__countries-name d-flex wow fadeInLeft animated"
                >
                  <img
                    src="/assets/imgs/countrie/ethiopia.png"
                    alt="img not found"
                  />
                  <h5>Ethiopia</h5>
                </div>
                <div
                  class="countries__tab-content__countries-name mb-30 d-flex wow fadeInLeft animated"
                >
                  <img
                    src="/assets/imgs/countrie/ghana.png"
                    alt="img not found"
                  />
                  <h5>Ghana</h5>
                </div>
                <div
                  class="countries__tab-content__countries-name mb-30 d-flex wow fadeInLeft animated"
                >
                  <img
                    src="/assets/imgs/countrie/morocco.png"
                    alt="img not found"
                  />
                  <h5>Morocco</h5>
                </div>
                <div
                  class="countries__tab-content__countries-name d-flex wow fadeInLeft animated"
                >
                  <img
                    src="/assets/imgs/countrie/tanzania.png"
                    alt="img not found"
                  />
                  <h5>Tanzania</h5>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "CountriesAbout",
};
</script>

<style scoped></style>
