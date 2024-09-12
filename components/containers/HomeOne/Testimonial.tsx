"use client";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper/modules";
import "swiper/swiper-bundle.css";
import Title from "@/public/images/icon/section-title.png";
import One from "@/public/images/testimonial/image1.jpeg";
import Two from "@/public/images/testimonial/image2.jpeg";
import Three from "@/public/images/testimonial/image3.jpeg";
import Four from "@/public/images/testimonial/image4.jpeg";
const Testimonial = () => {
  return (
    <section
      className="testimonial-area bg-image pt-120 pb-120"
      style={{
        backgroundImage: "url(/images/bg/testimonial-bg.png)",
      }}
      id="testimonial-section"
    >
      <div className="container">
        <div className="row g-4">
          <div
            className="col-lg-6 "
            data-aos="fade-left"
            data-aos-delay="200"
            data-aos-duration="1500"
          >
            <div className="talk-us__item">
              <div className="section-header mb-30">
                <h5 className="text-white">
                  <svg
                    width="28"
                    height="12"
                    viewBox="0 0 28 12"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <rect
                      x="0.75"
                      y="0.75"
                      width="18.5"
                      height="10.5"
                      rx="5.25"
                      stroke="white"
                      strokeWidth="1.5"
                    />
                    <rect x="8" width="20" height="12" rx="6" fill="white" />
                  </svg>
                  TALK TO US
                </h5>
                <h2 className="text-white">How May We Help You!</h2>
              </div>
              <form action="#">
                <div className="row g-3">
                  <div className="col-sm-6">
                    <label htmlFor="name">Your name*</label>
                    <input type="text" id="name" placeholder="Robot fox" />
                  </div>
                  <div className="col-sm-6">
                    <label htmlFor="email">Your Email*</label>
                    <input
                      type="email"
                      id="email"
                      placeholder="info@example.com"
                    />
                  </div>
                  <div className="col-sm-6">
                    <label htmlFor="subject">subject*</label>
                    <input type="text" id="subject" placeholder="Subject" />
                  </div>
                  <div className="col-sm-6">
                    <label htmlFor="number">Your Phone*</label>
                    <input
                      type="text"
                      id="number"
                      placeholder="+1253 457 7840"
                    />
                  </div>
                  <div className="col-12">
                    <label htmlFor="massage">Message*</label>
                    <textarea
                      id="massage"
                      placeholder="Write Message"
                    ></textarea>
                  </div>
                </div>
                <button>Sand Message</button>
              </form>
            </div>
          </div>
          <div className="col-lg-6 ps-2 ps-lg-5">
            <div className="section-header mb-40">
              <h5
                className=""
                data-aos="fade-up"
                data-aos-delay="0"
                data-aos-duration="1500"
              >
                <Image className="me-1" src={Title} alt="icon" priority />
                CLIENTS REVIEW
              </h5>
              <h2
                className=""
                data-aos="fade-up"
                data-aos-delay="200"
                data-aos-duration="1500"
              >
                What They Say About Our
              </h2>
              <p
                className=""
                data-aos="fade-up"
                data-aos-delay="400"
                data-aos-duration="1500"
              >
                It is a long established fact that a reader will be distracted
                the readable content of a page when looking at layout the point
                of using lorem the is Ipsum less normal distribution of letters.
              </p>
            </div>
            <div
              className="swiper testimonial__slider "
              data-aos="fade-down"
              data-aos-delay="0"
              data-aos-duration="1500"
            >
              <Swiper
                slidesPerView={1}
                slidesPerGroup={1}
                freeMode={true}
                speed={300}
                loop={true}
                roundLengths={true}
                modules={[Autoplay, Navigation]}
                autoplay={{
                  delay: 3000,
                  disableOnInteraction: false,
                  pauseOnMouseEnter: true,
                }}
                className="swiper-wrapper"
                navigation={{
                  nextEl: ".testimonial__arry-next",
                  prevEl: ".testimonial__arry-prev",
                }}
              >
                <SwiperSlide>
                  <div>
                    <div className="testimonial__item">
                      <svg
                        className="coma"
                        width="50"
                        height="37"
                        viewBox="0 0 50 37"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M0 0V37L18.75 18.5V0H0ZM31.25 0V37L50 18.5V0H31.25Z"
                          fill="#3C72FC"
                        />
                      </svg>
                      <div className="d-flex align-items-center gap-3">
                        <Image
                          src={One}
                          alt="Image"
                          priority
                          height={100}
                          width={100}
                        />
                        <div className="testi-info">
                          <h4>Muhammad zahid</h4>
                          <p>Web Developer</p>
                          <div className="star mt-1">
                            <i className="fa-sharp fa-solid fa-star"></i>
                            <i className="fa-sharp fa-solid fa-star"></i>
                            <i className="fa-sharp fa-solid fa-star"></i>
                            <i className="fa-sharp fa-solid fa-star"></i>
                            <i className="fa-sharp fa-solid fa-star disable"></i>
                          </div>
                        </div>
                      </div>
                      <p className="mt-30">
                        “Sajid knows how to lead his team in friendly
                        environment and complete his projects within given
                        deadlines. I pray and hope a best future for him. May
                        Allah Bless him. ”
                      </p>
                    </div>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div>
                    <div className="testimonial__item">
                      <svg
                        className="coma"
                        width="50"
                        height="37"
                        viewBox="0 0 50 37"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M0 0V37L18.75 18.5V0H0ZM31.25 0V37L50 18.5V0H31.25Z"
                          fill="#3C72FC"
                        />
                      </svg>
                      <div className="d-flex align-items-center gap-3">
                        <Image
                          src={Two}
                          alt="Image"
                          priority
                          height={100}
                          width={100}
                        />
                        <div className="testi-info">
                          <h4>Hamid Hassan</h4>
                          <p>Web Designer</p>
                          <div className="star mt-1">
                            <i className="fa-sharp fa-solid fa-star"></i>
                            <i className="fa-sharp fa-solid fa-star"></i>
                            <i className="fa-sharp fa-solid fa-star"></i>
                            <i className="fa-sharp fa-solid fa-star"></i>
                            <i className="fa-sharp fa-solid fa-star disable"></i>
                          </div>
                        </div>
                      </div>
                      <p className="mt-30">
                        “I worked with Sajid in Inventive Zone for almost a
                        year. During this time, Sajid proved himself very
                        honest, dedicated, intelligent and hard working team
                        member. He is a great .NET and php developer, very
                        cooperative team player and has the potential to lead a
                        team. He was very important contributor in my team and I
                        loved working with him. I recommend him for Senior
                        Software Development position and wish him best of luck.
                        ”
                      </p>
                    </div>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div>
                    <div className="testimonial__item">
                      <svg
                        className="coma"
                        width="50"
                        height="37"
                        viewBox="0 0 50 37"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M0 0V37L18.75 18.5V0H0ZM31.25 0V37L50 18.5V0H31.25Z"
                          fill="#3C72FC"
                        />
                      </svg>
                      <div className="d-flex align-items-center gap-3">
                        <Image
                          src={Three}
                          alt="Image"
                          priority
                          height={100}
                          width={100}
                        />
                        <div className="testi-info">
                          <h4>Haider Ali</h4>
                          <p>WordPress Developer</p>
                          <div className="star mt-1">
                            <i className="fa-sharp fa-solid fa-star"></i>
                            <i className="fa-sharp fa-solid fa-star"></i>
                            <i className="fa-sharp fa-solid fa-star"></i>
                            <i className="fa-sharp fa-solid fa-star"></i>
                            <i className="fa-sharp fa-solid fa-star disable"></i>
                          </div>
                        </div>
                      </div>
                      <p className="mt-30">
                        “An exceptional leader who not only drives the team
                        towards success but also fosters a culture of continuous
                        learning and collaboration. Their technical expertise
                        and strategic vision have been instrumental in
                        delivering high-quality software solutions. ”
                      </p>
                    </div>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div>
                    <div className="testimonial__item">
                      <svg
                        className="coma"
                        width="50"
                        height="37"
                        viewBox="0 0 50 37"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M0 0V37L18.75 18.5V0H0ZM31.25 0V37L50 18.5V0H31.25Z"
                          fill="#3C72FC"
                        />
                      </svg>
                      <div className="d-flex align-items-center gap-3">
                        <Image
                          src={Four}
                          alt="Image"
                          priority
                          height={100}
                          width={100}
                        />
                        <div className="testi-info">
                          <h4>Shahbaz Mayo</h4>
                          <p>CEO of Chak92</p>
                          <div className="star mt-1">
                            <i className="fa-sharp fa-solid fa-star"></i>
                            <i className="fa-sharp fa-solid fa-star"></i>
                            <i className="fa-sharp fa-solid fa-star"></i>
                            <i className="fa-sharp fa-solid fa-star"></i>
                            <i className="fa-sharp fa-solid fa-star disable"></i>
                          </div>
                        </div>
                      </div>
                      <p className="mt-30">
                        “I hired Smart Adroit to develop a custom property
                        management system, and I couldn't be happier with the
                        results. The project was complex, involving everything
                        from individual property management to agency-level
                        operations, along with a comprehensive lead management
                        system. Smart Adroit truly understood my requirements and
                        delivered an amazing system that exceeded my
                        expectations. Their attention to detail and ability to
                        translate my needs into a functional, user-friendly
                        system was impressive. I highly recommend Smart Adroid
                        for anyone in need of tailored software solutions. ”
                      </p>
                    </div>
                  </div>
                </SwiperSlide>
              </Swiper>
            </div>
            <div
              className="testimonial__arry-btn mt-40 "
              data-aos="fade-down"
              data-aos-delay="200"
              data-aos-duration="1500"
            >
              <button className="arry-prev testimonial__arry-prev">
                <i className="fa-light fa-chevron-left"></i>
              </button>
              <button className="arry-next testimonial__arry-next active">
                <i className="fa-light fa-chevron-right"></i>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonial;
