"use client";
import React from "react";
import TheSection from "../TheSection";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/bundle";
import { Autoplay, Navigation, Pagination } from "swiper/modules";

const TestimonialsHeroSection = () => {
  return (
    <TheSection>
      <Swiper
        spaceBetween={50}
        slidesPerView={1}
        onSlideChange={() => console.log("slide change")}
        onSwiper={(swiper) => console.log(swiper)}
        loop={true}
        autoplay={{
          delay: 2000,
          disableOnInteraction: false,
        }}
        modules={[Autoplay, Pagination, Navigation]}
      >
        {Array.from({ length: 10 }).map(() => {
          return (
            <SwiperSlide key={Math.random().toString()}>
              <div className="relative">
                <div>
                  <img
                    className="w-full"
                    src="/images/business-women.png"
                    alt=""
                  />
                </div>
                <div className="absolute top-[40%]  left-[10%] ">
                  <div className=" w-[50%] text-xs md:text-3xl lg:text-5xl  font-bold text-white">
                    Inspiring Stories of Customer&apos;s Success
                  </div>
                  <div className=" w-[70%] md:mt-2 lg:mt-3 text-white  text-[0.6rem] md:text-lg lg:text-xl">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Accusantium corrupti blanditiis adipisci quibusdam, facilis
                    cum hic et quo quas eaque.
                  </div>
                </div>
              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </TheSection>
  );
};

export default TestimonialsHeroSection;
