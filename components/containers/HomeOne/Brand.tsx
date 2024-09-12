"use client";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/swiper-bundle.css";
import Shape from "@/public/images/shape/brand-shape.png";
import One from "@/public/images/brand/chak921.webp";
import Two from "@/public/images/brand/bretlogo (1).png";
import Three from "@/public/images/brand/logo.jpg";
import Four from "@/public/images/brand/FGP-LOGO2.png";
import Five from "@/public/images/brand/point.png";
import Six from "@/public/images/brand/Asset-7@3x.png";
// import Seven from "@/public/images/brand/Asset-11@3x.png";


const Brand = () => {
  return (
    <div className="brand-area">
      <div className="container">
        <div className="brand__wrp">
          <div className="brand__shape">
            <Image src={Shape} alt="Image" priority />
          </div>
          <div className="swiper brand__slider">
            <Swiper
              slidesPerView={2}
              spaceBetween={30}
              freeMode={true}
              speed={300}
              loop={true}
              roundLengths={true}
              modules={[Autoplay]}
              autoplay={{
                delay: 3000,
                disableOnInteraction: false,
              }}
              breakpoints={{
                1200: {
                  slidesPerView: 5,
                },
                992: {
                  slidesPerView: 4,
                },
                576: {
                  slidesPerView: 3,
                },
              }}
              className="swiper-wrapper"
            >
              <SwiperSlide>
                <div>
                  <div className="brand__image image">
                    <Image src={One} alt="Image" priority />
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div>
                  <div className="brand__image image">
                    <Image src={Two} alt="Image" priority />
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div>
                  <div className="brand__image image">
                    <Image src={Three} alt="Image" priority />
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div>
                  <div className="brand__image image">
                    <Image src={Four} alt="Image" priority />
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div>
                  <div className="brand__image image">
                    <Image src={Five} alt="Image" priority />
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div>
                  <div className="brand__image image">
                    <Image src={Six} alt="Image" priority />
                  </div>
                </div>
              </SwiperSlide>
              {/* <SwiperSlide>
                <div>
                  <div className="brand__image image">
                    <Image src={Seven} alt="Image" priority />
                  </div>
                </div>
              </SwiperSlide> */}
              <SwiperSlide>
                <div>
                  <div className="brand__image image">
                    <Image src={One} alt="Image" priority />
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div>
                  <div className="brand__image image">
                    <Image src={Two} alt="Image" priority />
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div>
                  <div className="brand__image image">
                    <Image src={Three} alt="Image" priority />
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div>
                  <div className="brand__image image">
                    <Image src={Four} alt="Image" priority />
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div>
                  <div className="brand__image image">
                    <Image src={Five} alt="Image" priority />
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div>
                  <div className="brand__image image">
                    <Image src={Six} alt="Image" priority  />
                  </div>
                </div>
              </SwiperSlide>
              {/* <SwiperSlide>
                <div>
                  <div className="brand__image image">
                    <Image src={Seven} alt="Image" priority  />
                  </div>
                </div>
              </SwiperSlide> */}
            </Swiper>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Brand;
