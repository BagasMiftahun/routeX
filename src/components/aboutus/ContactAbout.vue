<template>
  <!--contact-section-->
  <section
    class="contact-us__area border bg-gray section-space-top bottom custom-width overflow-hidden"
  >
    <div class="container">
      <div class="row align-items-center">
        <div class="col-lg-6">
          <div class="contact-us__widget mb-30" data-tilt>
            <img
              src="/assets/imgs/concact/contact-left-image.png"
              alt="img not found"
            />
          </div>
        </div>
        <div class="col-lg-6">
          <div class="contact-us__title-wrapper">
            <div class="section__title-wrapper mb-40">
              <h6
                class="section__title-wrapper-black-subtitle mb-10 wow fadeInLeft animated"
                data-wow-delay=".2s"
              >
                Contact Information
                <svg
                  width="14"
                  height="12"
                  viewBox="0 0 14 12"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g clip-path="url(#clip0_3843_1169)">
                    <path
                      d="M4.92578 10.3748L6.49623 9.68052L5.62583 9.07031L4.92578 10.3748Z"
                      fill="#83CD20"
                    />
                    <path
                      d="M4.92578 10.3743L5.00073 8L13.9088 0L5.66505 9.1113L4.92578 10.3743Z"
                      fill="#83CD20"
                    />
                    <path d="M5 8L13.908 0L0 6.22704L5 8Z" fill="#83CD20" />
                    <path
                      d="M5.66406 9.1113L9.95686 12L13.9078 0L5.66406 9.1113Z"
                      fill="#034833"
                    />
                  </g>
                  <defs>
                    <clipPath id="clip0_3843_1169">
                      <rect width="13.908" height="12" fill="white" />
                    </clipPath>
                  </defs>
                </svg>
              </h6>
              <h2
                class="section__title-wrapper-title wow fadeInLeft animated"
                data-wow-delay=".3s"
              >
                Let Your Wanderlust Guide You
              </h2>
            </div>

            <div class="contact-us__form-wrapper white-bg">
              <form
                class="contact-us__form"
                id="contact-us__form"
                method="POST"
                action="./mail.php"
              >
                <div class="row">
                  <div class="col-sm-6">
                    <div
                      class="contact-us__input wow fadeInLeft animated"
                      data-wow-delay=".4s"
                    >
                      <span>Your Email</span>
                      <input
                        name="email"
                        id="email"
                        type="email"
                        placeholder="Your Email"
                      />
                      <div class="icon">
                        <i class="fa-solid fa-paper-plane"></i>
                      </div>
                    </div>
                  </div>
                  <div class="col-sm-6">
                    <div
                      class="contact-us__input wow fadeInLeft animated"
                      data-wow-delay=".5s"
                    >
                      <span>Your Phone</span>
                      <input
                        name="phone"
                        id="phone"
                        type="tel"
                        placeholder="Your Phone"
                      />
                      <div class="icon icon-2">
                        <i class="fa-solid fa-phone"></i>
                      </div>
                    </div>
                  </div>
                  <div class="col-sm-12">
                    <div
                      class="contact-us__input wow fadeInLeft animated"
                      data-wow-delay=".6s"
                    >
                      <span>Your Address</span>
                      <input
                        name="address"
                        id="address"
                        type="email"
                        placeholder="Your Address"
                      />
                      <div class="icon">
                        <i class="fa-solid fa-location-dot"></i>
                      </div>
                    </div>
                  </div>
                  <div class="col-12">
                    <div
                      class="contact-us__textarea wow fadeInLeft animated"
                      data-wow-delay=".7s"
                    >
                      <span>Message</span>
                      <textarea
                        name="textarea"
                        id="textarea"
                        cols="30"
                        rows="10"
                        placeholder="Write Message.."
                      ></textarea>
                      <div class="icon">
                        <i class="fa-solid fa-envelope"></i>
                      </div>
                    </div>
                  </div>
                  <div class="col-12">
                    <button
                      type="submit"
                      class="contact-btn mt-30 wow fadeInLeft animated"
                      data-wow-delay=".8s"
                    >
                      Send Message
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "ContactAbout",
};
</script>

<style scoped></style>
