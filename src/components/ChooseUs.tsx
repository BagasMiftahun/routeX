import React from "react";

const ChooseUs: React.FC = () => {
  return (
    <>
      {/*choose-us-section*/}
      <section className="section-space-top section-space-bottom-2 overflow-hidden gray-bg">
        <div className="choose-us__area">
          <div className="container">
            <div className="row align-items-center">
              <div className="col-xl-6">
                <div className="choose-us__media">
                  <div className="choose-us__media-thumb">
                    <div className="choose-us__media-thumb-img">
                      <div
                        className="choose-us__media-thumb-img-green-border wow fadeInLeft animated"
                        data-wow-delay=".3s"
                      />
                      <div
                        className="choose-us__media-thumb-img-img wow fadeInLeft animated"
                        data-wow-delay=".4s"
                      >
                        <img
                          src="./assets/imgs/choose-us/choose-us-left-image.png"
                          alt="img not found"
                        />
                      </div>
                    </div>
                    <div className="choose-us__media-thumb-circle spin">
                      <img
                        src="./assets/imgs/choose-us/choose-us-circle-image.png"
                        alt="img not found"
                      />
                    </div>
                  </div>
                  <div className="choose-us__media-img">
                    <div className="choose-us__text">
                      <h3 className="counter__item-title">
                        <span className="odometer" data-count={25}>
                          0
                        </span>
                      </h3>
                      <p>
                        Years Of <br /> Experience
                      </p>
                    </div>
                    <div
                      className="choose-us__media-img-pictute wow fadeInLeft animated"
                      data-wow-delay=".6s"
                    >
                      <img
                        src="./assets/imgs/choose-us/choose-us-right-image.png"
                        alt="img not found"
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-xl-6">
                <div className="choose-us__content">
                  <div className="section__title-wrapper mb-20">
                    <h6
                      className="section__title-wrapper-black-subtitle mb-10 wow fadeInLeft animated"
                      data-wow-delay=".2s"
                    >
                      <svg
                        width={20}
                        height={21}
                        viewBox="0 0 20 21"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <g clipPath="url(#clip0_3754_90)">
                          <path
                            d="M19.299 2.66986C19.2609 2.59008 19.1926 2.52868 19.1093 2.49911L12.195 0.0581985C12.0215 -0.00317634 11.831 0.0879901 11.7697 0.26149L10.199 4.70581H9.51204V3.57248C9.51202 3.41941 9.47686 3.26838 9.40926 3.13104C9.34166 2.9937 9.24343 2.87372 9.12214 2.78033C9.00085 2.68695 8.85974 2.62266 8.70968 2.59242C8.55962 2.56217 8.40462 2.56679 8.25663 2.6059L0.24744 4.7169V4.7229C0.176847 4.74064 0.114146 4.78133 0.0691834 4.83857C0.0242205 4.89581 -0.000457842 4.96636 -0.000976562 5.03915L-0.000976562 19.0391C-0.000976562 19.5914 0.446773 20.0391 0.999021 20.0391H10.3323C10.8846 20.0391 11.3323 19.5914 11.3323 19.0391V16.0145L14.0057 16.9582C14.1793 17.0194 14.3697 16.9285 14.431 16.7548L19.3133 2.92457C19.3278 2.88326 19.334 2.83949 19.3315 2.79578C19.329 2.75208 19.318 2.70928 19.2989 2.66986H19.299ZM8.42671 3.24873C8.47605 3.23573 8.52772 3.23421 8.57773 3.24429C8.62775 3.25436 8.6748 3.27577 8.71525 3.30686C8.75572 3.33802 8.78849 3.37806 8.81104 3.42389C8.83359 3.46972 8.84531 3.52012 8.8453 3.57119V4.70581H2.90268L8.42671 3.24873ZM10.6657 19.0391C10.6657 19.1275 10.6305 19.2123 10.568 19.2748C10.5055 19.3373 10.4207 19.3724 10.3323 19.3724H0.999021C0.910616 19.3724 0.825832 19.3373 0.76332 19.2748C0.700808 19.2123 0.665689 19.1275 0.665689 19.0391V5.37248H10.3323C10.4207 5.37248 10.5055 5.4076 10.568 5.47011C10.6305 5.53262 10.6657 5.61741 10.6657 5.70581V19.0391ZM13.4057 6.64152L13.8323 6.43923L14.0356 6.86452L12.416 11.4481C12.3867 11.5315 12.3916 11.6231 12.4297 11.7029L12.7767 12.4288L12.6694 12.7331L12.0083 12.0485C11.9725 12.0112 11.9284 11.9827 11.8796 11.9653C11.8309 11.9479 11.7787 11.9422 11.7273 11.9485L11.3323 11.9985V11.5518L11.6167 11.4158C11.6964 11.3776 11.7578 11.3095 11.7874 11.2262L12.4541 9.34089L13.4057 6.64152ZM14.0343 8.86643L14.7111 9.95384L14.5953 10.2815L13.7856 9.57251L14.0343 8.86643ZM11.3323 10.5121V9.5961L11.6603 9.58243L11.3323 10.5121ZM11.8991 8.90551L11.3323 8.9288V8.4851L12.1484 8.20043L11.8991 8.90551ZM13.9131 16.2185L11.3323 15.3075V12.6704L11.6447 12.6314L12.5657 13.5842C12.597 13.616 12.6343 13.6413 12.6755 13.6585C12.7168 13.6756 12.761 13.6843 12.8056 13.6841C12.8294 13.6842 12.8531 13.6817 12.8763 13.6765C12.9318 13.6644 12.9833 13.6383 13.0259 13.6008C13.0685 13.5632 13.1007 13.5154 13.1196 13.4618L13.453 12.5188C13.4824 12.4354 13.4775 12.3438 13.4392 12.2642L13.0907 11.5391L13.5467 10.2475L14.526 11.1059C14.5868 11.1592 14.6649 11.1885 14.7458 11.1885C14.7742 11.1885 14.8026 11.1848 14.8301 11.1775C14.8827 11.1637 14.9312 11.1372 14.9713 11.1004C15.0114 11.0636 15.0419 11.0175 15.0601 10.9662L15.3934 10.0232C15.41 9.97606 15.4159 9.92579 15.4104 9.87612C15.405 9.82644 15.3884 9.77863 15.362 9.73622L14.3187 8.06014L14.7093 6.95389C14.7239 6.91256 14.7302 6.86876 14.7279 6.82499C14.7255 6.78122 14.7146 6.73834 14.6957 6.69881L14.2891 5.84856C14.2702 5.80904 14.2437 5.77363 14.2112 5.74435C14.1786 5.71507 14.1406 5.69249 14.0993 5.67791C14.058 5.66332 14.0142 5.65701 13.9705 5.65934C13.9268 5.66167 13.8839 5.67259 13.8444 5.69148L12.9937 6.09823C12.9542 6.11709 12.9189 6.14354 12.8897 6.17607C12.8605 6.2086 12.8379 6.24657 12.8234 6.28781L12.4323 7.39543L11.3323 7.77914V5.70581C11.3319 5.53523 11.2878 5.36759 11.2041 5.21895C11.1204 5.07031 11 4.94564 10.8543 4.85685L11.3991 3.31211L11.5213 2.96557L12.2881 0.798905L18.5743 3.01782L13.9131 16.2185Z"
                            fill="#034833"
                          />
                          <path
                            d="M16.5429 5.12938L16.7648 4.50063L17.3364 4.7023L17.1145 5.33105L16.5429 5.12938ZM11.971 3.51526L12.193 2.88672L12.7644 3.08851L12.5424 3.71709L11.971 3.51526ZM15.3998 4.72588L15.6219 4.09713L16.1933 4.29897L15.9713 4.92755L15.3998 4.72588ZM13.1141 3.91892L13.3361 3.29034L13.9073 3.49218L13.6854 4.12076L13.1141 3.91892ZM14.2569 4.32209L14.479 3.69351L15.0504 3.89534L14.8284 4.52388L14.2569 4.32209ZM5.51204 6.707C3.67104 6.707 2.17871 8.19933 2.17871 10.0403C2.17871 11.8813 3.67104 13.3737 5.51204 13.3737C7.35303 13.3737 8.84536 11.8813 8.84536 10.0403C8.84341 8.20033 7.3522 6.70909 5.51204 6.707ZM7.91907 8.90066L7.46432 8.80075C7.26433 8.75662 7.06424 8.72166 6.86224 8.69137C6.832 8.48959 6.79548 8.2888 6.75274 8.08929L6.65262 7.63471C7.20754 7.89885 7.65471 8.34585 7.91907 8.90066ZM2.84533 10.0403C2.846 9.90408 2.85708 9.76804 2.87871 9.63341L3.70296 9.45C3.82942 9.422 3.95671 9.39875 4.08429 9.37675C4.05206 9.8186 4.05206 10.2622 4.08429 10.7041C3.95667 10.6821 3.82942 10.6587 3.70296 10.6307L2.87871 10.4474C2.85711 10.3128 2.84597 10.1767 2.84538 10.0403H2.84533ZM4.76075 9.28937C5.26039 9.24478 5.76302 9.24478 6.26266 9.28937C6.30742 9.78901 6.30742 10.2916 6.26266 10.7913C5.76301 10.836 5.26036 10.836 4.76071 10.7913C4.71595 10.2916 4.71599 9.78901 4.76075 9.28937ZM6.93828 9.37675C7.06603 9.39875 7.19333 9.422 7.31962 9.45L8.14399 9.63341C8.19022 9.90278 8.19022 10.178 8.14399 10.4474L7.31962 10.6307C7.19337 10.6587 7.06603 10.6821 6.93828 10.7044C6.97067 10.2624 6.97067 9.81871 6.93828 9.37675ZM5.91874 7.40704L6.10204 8.23175C6.13004 8.35804 6.15362 8.48533 6.17579 8.61308C5.73377 8.58069 5.28997 8.58069 4.84796 8.61308C4.87008 8.48533 4.89337 8.35804 4.92171 8.23175L5.10495 7.40704C5.37429 7.36131 5.64941 7.36131 5.91874 7.40704ZM4.37208 7.63229L4.27196 8.08704C4.228 8.28704 4.193 8.48712 4.16275 8.68912C3.96097 8.71926 3.76018 8.75566 3.56067 8.79829L3.10592 8.89841C3.37048 8.34408 3.81748 7.89749 4.37204 7.63342L4.37208 7.63229ZM3.10525 11.179L3.56 11.2791C3.76 11.323 3.95987 11.358 4.16208 11.3883C4.19222 11.5901 4.22862 11.7909 4.27125 11.9904L4.37137 12.4449C3.81652 12.1811 3.36926 11.7344 3.10458 11.18L3.10525 11.179ZM5.10525 12.6717L4.92196 11.8469C4.89362 11.721 4.87037 11.5934 4.84821 11.466C5.06895 11.4821 5.29062 11.493 5.51229 11.493C5.73395 11.493 5.95499 11.4821 6.17604 11.466C6.15391 11.5934 6.13029 11.721 6.10229 11.8469L5.91904 12.6717C5.6497 12.7174 5.37458 12.7174 5.10525 12.6717ZM6.65191 12.4464L6.75203 11.9917C6.79633 11.7917 6.83099 11.5917 6.86162 11.3896C7.06336 11.3594 7.26413 11.323 7.46362 11.2804L7.9182 11.1803C7.65407 11.7356 7.20681 12.183 6.65162 12.4474L6.65191 12.4464ZM2.84538 16.0403H8.1787V16.707H2.84538V16.0403ZM3.51204 17.3736H7.51203V18.0403H3.51204V17.3736ZM5.1787 14.707H5.84537V15.3737H5.1787V14.707ZM3.84537 14.707H4.51204V15.3737H3.84537V14.707ZM6.51203 14.707H7.1787V15.3737H6.51203V14.707Z"
                            fill="#034833"
                          />
                        </g>
                        <defs>
                          <clipPath id="clip0_3754_90">
                            <rect
                              width={20}
                              height={20}
                              fill="white"
                              transform="translate(-0.000976562 0.0390625)"
                            />
                          </clipPath>
                        </defs>
                      </svg>
                      Why Choose Us
                    </h6>
                    <h2
                      className="section__title-wrapper-title wow fadeInLeft animated"
                      data-wow-delay=".3s"
                    >
                      Where Wanderlust Meets Dream Destinations
                    </h2>
                  </div>
                  <p
                    className="choose-us__content-description wow fadeInLeft animated"
                    data-wow-delay=".4s"
                  >
                    Et purus duis sollicitudin dignissim habitant. Egestas nulla
                    quis venenatis cras sed eu massa Et purus duis sollicitudin
                    dignissim habitant. Egestas nulla quis venenatis cras sed eu
                    massa Et purus duis sollicitudin dignissim habitant. Egestas
                    nulla
                  </p>
                  <div className="choose-us__content-wrapper mt-35">
                    <div
                      className="choose-us__content-wrapper-box wow fadeInLeft animated"
                      data-wow-delay=".5s"
                    >
                      <div className="choose-us__content-wrapper-box-title">
                        <div className="choose-us__content-wrapper-box-title-icon">
                          <svg
                            width={30}
                            height={31}
                            viewBox="0 0 30 31"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M28.1836 3.20312H1.81641C1.33484 3.20368 0.873151 3.39523 0.53263 3.73575C0.192108 4.07628 0.00055827 4.53796 0 5.01953L0 26.4634C6.2096e-05 26.5722 0.0432948 26.6765 0.120201 26.7534C0.197106 26.8303 0.301395 26.8735 0.410156 26.8736H29.5898C29.6986 26.8735 29.8029 26.8303 29.8798 26.7534C29.9567 26.6765 29.9999 26.5722 30 26.4634V5.01953C29.9994 4.53796 29.8079 4.07628 29.4674 3.73575C29.1269 3.39523 28.6652 3.20368 28.1836 3.20312ZM0.820312 5.01953C0.820623 4.75545 0.925668 4.50227 1.1124 4.31553C1.29914 4.12879 1.55232 4.02375 1.81641 4.02344H28.1836C28.4477 4.02375 28.7009 4.12879 28.8876 4.31553C29.0743 4.50227 29.1794 4.75545 29.1797 5.01953V8.74305H0.820312V5.01953ZM29.1797 26.0533H0.820312V9.56336H29.1797V26.0533Z"
                              fill="white"
                            />
                            <path
                              d="M27.7147 5.07812H9.78809C9.67931 5.07812 9.57498 5.12134 9.49806 5.19826C9.42114 5.27518 9.37793 5.3795 9.37793 5.48828V7.27797C9.37793 7.38675 9.42114 7.49107 9.49806 7.56799C9.57498 7.64491 9.67931 7.68813 9.78809 7.68813H27.7147C27.8235 7.68806 27.9278 7.64483 28.0047 7.56792C28.0816 7.49102 28.1248 7.38673 28.1249 7.27797V5.48828C28.1248 5.37952 28.0816 5.27523 28.0047 5.19833C27.9278 5.12142 27.8235 5.07819 27.7147 5.07812ZM27.3046 6.86781H10.1982V5.89844H27.3046V6.86781Z"
                              fill="white"
                            />
                            <path
                              d="M4.16016 5.07812H2.28516C2.1764 5.07819 2.07211 5.12142 1.9952 5.19833C1.91829 5.27523 1.87506 5.37952 1.875 5.48828V7.27797C1.87506 7.38673 1.91829 7.49102 1.9952 7.56792C2.07211 7.64483 2.1764 7.68806 2.28516 7.68813H4.16016C4.26892 7.68806 4.37321 7.64483 4.45011 7.56792C4.52702 7.49102 4.57025 7.38673 4.57031 7.27797V5.48828C4.57025 5.37952 4.52702 5.27523 4.45011 5.19833C4.37321 5.12142 4.26892 5.07819 4.16016 5.07812ZM3.75 6.86781H2.69531V5.89844H3.75V6.86781Z"
                              fill="white"
                            />
                            <path
                              d="M7.91113 5.07812H6.03613C5.92737 5.07819 5.82308 5.12142 5.74618 5.19833C5.66927 5.27523 5.62604 5.37952 5.62598 5.48828V7.27797C5.62604 7.38673 5.66927 7.49102 5.74618 7.56792C5.82308 7.64483 5.92737 7.68806 6.03613 7.68813H7.91113C8.01991 7.68813 8.12424 7.64491 8.20116 7.56799C8.27808 7.49107 8.32129 7.38675 8.32129 7.27797V5.48828C8.32129 5.3795 8.27808 5.27518 8.20116 5.19826C8.12424 5.12134 8.01991 5.07812 7.91113 5.07812ZM7.50098 6.86781H6.44629V5.89844H7.50098V6.86781Z"
                              fill="white"
                            />
                            <path
                              d="M15.0001 24.1608C16.256 24.1608 17.4837 23.7885 18.528 23.0907C19.5722 22.393 20.3862 21.4013 20.8668 20.241C21.3475 19.0807 21.4732 17.804 21.2283 16.5722C20.9833 15.3404 20.3785 14.2089 19.4905 13.3209C18.6024 12.4328 17.471 11.828 16.2392 11.583C15.0074 11.3379 13.7307 11.4637 12.5704 11.9443C11.41 12.4249 10.4183 13.2388 9.72056 14.283C9.02281 15.3273 8.65039 16.555 8.65039 17.8109C8.65225 19.4944 9.32182 21.1084 10.5122 22.2988C11.7026 23.4892 13.3166 24.1589 15.0001 24.1608ZM15.0001 12.2815C16.0938 12.2814 17.1629 12.6057 18.0723 13.2133C18.9816 13.8209 19.6904 14.6845 20.109 15.6949C20.5275 16.7053 20.637 17.8172 20.4237 18.8898C20.2103 19.9625 19.6837 20.9478 18.9103 21.7211C18.137 22.4945 17.1517 23.0211 16.079 23.2345C15.0064 23.4478 13.8945 23.3383 12.8841 22.9197C11.8737 22.5012 11.0101 21.7924 10.4025 20.883C9.79493 19.9737 9.47066 18.9045 9.4707 17.8109C9.47238 16.3449 10.0555 14.9395 11.0921 13.9029C12.1287 12.8663 13.5341 12.2832 15.0001 12.2815Z"
                              fill="white"
                            />
                            <path
                              d="M12.1441 20.9755H17.8544C17.9631 20.9755 18.0674 20.9323 18.1443 20.8553C18.2212 20.7784 18.2645 20.6742 18.2645 20.5654V16.5353C18.2645 16.4266 18.2212 16.3223 18.1443 16.2454C18.0674 16.1685 17.9631 16.1252 17.8544 16.1252H17.0809L16.8302 14.9645C16.8104 14.8728 16.7598 14.7906 16.6868 14.7316C16.6138 14.6727 16.5228 14.6406 16.4289 14.6406H13.5695C13.4758 14.6406 13.385 14.6728 13.312 14.7316C13.2391 14.7904 13.1886 14.8725 13.1687 14.9641L12.918 16.1247H12.1445C12.0358 16.1248 11.9315 16.168 11.8546 16.2449C11.7777 16.3218 11.7344 16.4261 11.7344 16.5348V20.5654C11.7344 20.6741 11.7776 20.7783 11.8544 20.8552C11.9312 20.9321 12.0354 20.9754 12.1441 20.9755ZM12.5542 20.1552V18.6679H13.6323V18.7091C13.6323 18.8179 13.6756 18.9222 13.7525 18.9992C13.8294 19.0761 13.9337 19.1193 14.0425 19.1193C14.1513 19.1193 14.2556 19.0761 14.3325 18.9992C14.4094 18.9222 14.4527 18.8179 14.4527 18.7091V18.6679H15.5448V18.7091C15.5448 18.8179 15.5881 18.9222 15.665 18.9992C15.7419 19.0761 15.8462 19.1193 15.955 19.1193C16.0638 19.1193 16.1681 19.0761 16.245 18.9992C16.3219 18.9222 16.3652 18.8179 16.3652 18.7091V18.6679H17.4433V20.1552H12.5542ZM13.9007 15.4609H16.0975L16.2412 16.1247H13.757L13.9007 15.4609ZM16.7484 16.945H17.4442V17.8471H12.5542V16.9455L16.7484 16.945Z"
                              fill="white"
                            />
                          </svg>
                        </div>
                        <h3>Passport Plus</h3>
                      </div>
                      <div className="choose-us__content-wrapper-box-list">
                        <ul>
                          <li>
                            <i className="fa-solid fa-check" />
                            Beyond Border Immigration
                          </li>
                          <li>
                            <i className="fa-solid fa-check" />
                            Worldwide Visa Assistance
                          </li>
                        </ul>
                      </div>
                    </div>
                    <div
                      className="choose-us__content-wrapper-box wow fadeInLeft animated"
                      data-wow-delay=".6s"
                    >
                      <div className="choose-us__content-wrapper-box-title">
                        <div className="choose-us__content-wrapper-box-title-icon">
                          <svg
                            width={30}
                            height={30}
                            viewBox="0 0 30 30"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <g clipPath="url(#clip0_3761_459)">
                              <path
                                d="M29.5908 23.939H27.042V10.8103C27.0421 10.7396 27.024 10.6701 26.9893 10.6085C26.9546 10.5469 26.9046 10.4953 26.8442 10.4587L15.2133 3.42253C15.1493 3.38377 15.0758 3.36328 15.001 3.36328C14.9261 3.36328 14.8527 3.38377 14.7886 3.42253L3.15777 10.4594C3.09731 10.496 3.04732 10.5476 3.01266 10.6092C2.978 10.6708 2.95985 10.7403 2.95996 10.811V23.9397H0.411133C0.357231 23.9397 0.303858 23.9503 0.254065 23.971C0.204272 23.9916 0.159036 24.0219 0.120943 24.06C0.0828503 24.0982 0.0526482 24.1434 0.0320635 24.1932C0.0114788 24.2431 0.000915228 24.2964 0.00097683 24.3503V26.2253C0.00097683 26.3341 0.0441896 26.4384 0.121109 26.5154C0.198028 26.5923 0.302353 26.6355 0.411133 26.6355H29.5908C29.6996 26.6355 29.8039 26.5923 29.8808 26.5154C29.9578 26.4384 30.001 26.3341 30.001 26.2253V24.3503C30.0011 24.2964 29.9906 24.2429 29.9701 24.193C29.9495 24.1431 29.9194 24.0978 29.8813 24.0596C29.8432 24.0213 29.7979 23.991 29.7481 23.9703C29.6982 23.9497 29.6448 23.939 29.5908 23.939ZM3.78027 19.78H11.0166V21.6295H3.78027V19.78ZM11.8369 15.475C11.8375 14.9624 12.0414 14.4709 12.4039 14.1084C12.7664 13.7459 13.2579 13.542 13.7705 13.5414H14.5908V17.7283C14.5903 18.8399 14.3429 19.9375 13.8667 20.942C13.3905 21.9464 12.6972 22.8326 11.8369 23.5366V15.475ZM26.2217 21.6299H18.9854V19.78H26.2217V21.6299ZM18.165 23.5366C17.3047 22.8326 16.6114 21.9465 16.1352 20.942C15.6589 19.9376 15.4116 18.8399 15.4111 17.7283V13.5414H16.2314C16.7441 13.542 17.2356 13.7459 17.5981 14.1084C17.9606 14.4709 18.1645 14.9624 18.165 15.475V23.5366ZM12.7411 23.8364C13.7807 22.8747 14.5584 21.6643 15.001 20.3191C15.4611 21.7117 16.2771 22.9599 17.3682 23.94H12.6338C12.6706 23.905 12.7041 23.8701 12.7411 23.8364ZM18.9854 22.4503H26.2217V23.939H18.9854V22.4503ZM15.001 4.25268L26.2217 11.0416V18.9597H18.9854V15.475C18.9845 14.7449 18.6941 14.045 18.1778 13.5287C17.6615 13.0124 16.9616 12.722 16.2314 12.7211H13.7705C13.0404 12.7219 12.3404 13.0123 11.8241 13.5286C11.3078 14.0449 11.0174 14.7449 11.0166 15.475V18.9597H3.78027V11.0416L15.001 4.25268ZM3.78027 22.4503H11.0166V23.939H3.78027V22.4503ZM29.1807 25.814H0.821289V24.7593H29.1807V25.814Z"
                                fill="white"
                              />
                              <path
                                d="M7.39805 17.5192C7.78702 17.5193 8.16727 17.404 8.49072 17.1879C8.81416 16.9718 9.06627 16.6647 9.21515 16.3053C9.36404 15.946 9.40302 15.5506 9.32716 15.1691C9.25131 14.7875 9.06402 14.4371 8.78899 14.162C8.51396 13.887 8.16354 13.6996 7.78204 13.6237C7.40054 13.5478 7.0051 13.5868 6.64573 13.7356C6.28636 13.8845 5.9792 14.1365 5.7631 14.4599C5.54699 14.7834 5.43164 15.1636 5.43164 15.5526C5.4322 16.074 5.63954 16.5738 6.00819 16.9425C6.37683 17.3112 6.87667 17.5186 7.39805 17.5192ZM7.39805 14.4063C7.62478 14.4062 7.84643 14.4734 8.03498 14.5993C8.22352 14.7253 8.37048 14.9043 8.45728 15.1137C8.54408 15.3232 8.56682 15.5537 8.52261 15.7761C8.47841 15.9985 8.36925 16.2027 8.20894 16.3631C8.04863 16.5234 7.84438 16.6326 7.622 16.6769C7.39963 16.7211 7.16913 16.6984 6.95965 16.6117C6.75018 16.5249 6.57113 16.378 6.44516 16.1895C6.31919 16.001 6.25195 15.7793 6.25195 15.5526C6.25251 15.2488 6.37343 14.9576 6.58824 14.7427C6.80304 14.5279 7.09423 14.4069 7.39805 14.4063Z"
                                fill="white"
                              />
                              <path
                                d="M15.0008 11.4333C15.3898 11.4333 15.7701 11.3179 16.0935 11.1018C16.4169 10.8857 16.669 10.5785 16.8178 10.2191C16.9667 9.85968 17.0056 9.46422 16.9296 9.08271C16.8537 8.7012 16.6663 8.35078 16.3912 8.07577C16.1161 7.80076 15.7656 7.61351 15.3841 7.5377C15.0025 7.4619 14.6071 7.50095 14.2477 7.6499C13.8884 7.79886 13.5813 8.05104 13.3653 8.37455C13.1493 8.69805 13.034 9.07835 13.0342 9.46734C13.0349 9.98864 13.2424 10.4884 13.6111 10.8569C13.9797 11.2254 14.4795 11.4327 15.0008 11.4333ZM15.0008 8.32031C15.2275 8.32031 15.4491 8.38753 15.6376 8.51346C15.8261 8.63938 15.973 8.81838 16.0598 9.0278C16.1466 9.23722 16.1693 9.46767 16.1252 9.69002C16.081 9.91237 15.9719 10.1166 15.8116 10.277C15.6514 10.4373 15.4472 10.5465 15.2249 10.5909C15.0026 10.6352 14.7721 10.6126 14.5626 10.5259C14.3532 10.4393 14.1741 10.2924 14.048 10.104C13.922 9.9156 13.8546 9.69404 13.8545 9.46734C13.8549 9.16337 13.9757 8.87194 14.1906 8.65693C14.4055 8.44192 14.6968 8.32087 15.0008 8.32031Z"
                                fill="white"
                              />
                              <path
                                d="M22.6031 17.5192C22.9921 17.5193 23.3724 17.404 23.6958 17.1879C24.0192 16.9718 24.2713 16.6647 24.4202 16.3053C24.5691 15.946 24.6081 15.5506 24.5322 15.1691C24.4564 14.7875 24.2691 14.4371 23.9941 14.162C23.719 13.887 23.3686 13.6996 22.9871 13.6237C22.6056 13.5478 22.2102 13.5868 21.8508 13.7356C21.4914 13.8845 21.1843 14.1365 20.9682 14.4599C20.7521 14.7834 20.6367 15.1636 20.6367 15.5526C20.6373 16.074 20.8446 16.5738 21.2133 16.9425C21.5819 17.3112 22.0818 17.5186 22.6031 17.5192ZM22.6031 14.4063C22.8299 14.4062 23.0515 14.4734 23.2401 14.5993C23.4286 14.7253 23.5756 14.9043 23.6624 15.1137C23.7492 15.3232 23.7719 15.5537 23.7277 15.7761C23.6835 15.9985 23.5743 16.2027 23.414 16.3631C23.2537 16.5234 23.0495 16.6326 22.8271 16.6769C22.6047 16.7211 22.3742 16.6984 22.1647 16.6117C21.9553 16.5249 21.7762 16.378 21.6502 16.1895C21.5243 16.001 21.457 15.7793 21.457 15.5526C21.4576 15.2488 21.5785 14.9576 21.7933 14.7427C22.0081 14.5279 22.2993 14.4069 22.6031 14.4063Z"
                                fill="white"
                              />
                            </g>
                            <defs>
                              <clipPath id="clip0_3761_459">
                                <rect
                                  width={30}
                                  height={30}
                                  fill="white"
                                  transform="translate(0.000976562)"
                                />
                              </clipPath>
                            </defs>
                          </svg>
                        </div>
                        <h3>Global Entry</h3>
                      </div>
                      <div className="choose-us__content-wrapper-box-list">
                        <ul>
                          <li>
                            <i className="fa-solid fa-check" />
                            GlobeTrot Visa Services
                          </li>
                          <li>
                            <i className="fa-solid fa-check" />
                            Infinity Visa Solutions
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="choose-us__button mt-40">
                  <div
                    className="choose-us__button-btn wow fadeInLeft animated"
                    data-wow-delay=".7s"
                  >
                    <a href="story-details.html">
                      Read More <i className="fa-solid fa-arrow-right" />
                    </a>
                  </div>
                  <div
                    className="choose-us__button-text wow fadeInLeft animated"
                    data-wow-delay=".8s"
                  >
                    <div className="choose-us__button-text-icon">
                      <i className="fa-solid fa-phone" />
                    </div>
                    <div className="choose-us__button-text-number">
                      <h6>Need help?</h6>
                      <a href="tel:8085550111">(808) 555-0111</a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ChooseUs;
